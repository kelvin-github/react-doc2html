import React, {useEffect, useState} from 'react';
import mammoth from 'mammoth';



function handleFileSelect (event) {
    console.log("hadf:",event)
    
    
    readFileInputEventAsArrayBuffer(event,(arrayBuffer) => {
        console.log("arrayBuffer",arrayBuffer)

        mammoth.convertToHtml({ arrayBuffer })
        .then(function (result) {
            // setData(result.value);
            console.log('message ', result.messages,result.value);
            document.getElementById("doc").innerHTML = result.value
        })
        .done();
    });
}

function readFileInputEventAsArrayBuffer (event,callback){
    var file = event.target.files[0];
    console.log("fileName?",file)
    let fileName = file.name
    let flieArr = fileName.split(".");
    let fileSuffix = flieArr[flieArr.length - 1];
    console.log("fileType:",fileSuffix)

    var reader = new FileReader();
    // reader.readAsText(file,"gb2312");
    reader.readAsArrayBuffer(file);
    reader.onload = function(loadEvent){
        var arrayBuffer = loadEvent.target.result; 
        console.log("temp:",arrayBuffer)        
        
        callback(arrayBuffer)
                
    }
}

const DocViewer = () => {
    const [data, setData] = useState(null);

    // useEffect(()=> {
    //     mammoth.convertToHtml({ path: '003.docx' })
    //     .then(function (result) {
    //         setData(result.value);
    //         console.log('message ', result.messages);
    //     })
    //     .done();
    // }, []);
    return (
        <>
            <div>
                <input type='file' multiple='multiple' onChange={ (e)=>handleFileSelect(e) } />
            </div>
            <div id="doc" style={{display:"block"}}></div>
            {data}
        </>
    );
}
export default DocViewer