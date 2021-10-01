import React from "react";
import mammoth from "mammoth"
import { find } from "xpath-react";


class Docx2html extends React.Component{
    state={
        docshow:"block",
        website:"会是那家招聘网的 doc ?",
        name:"",
        phone:"",
    }

    readFileInputEventAsArrayBuffer =(event,callback)=> {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file,"gb2312");
        reader.onload = function(loadEvent){
            var arrayBuffer = loadEvent.target.result; 
            console.log("temp:",arrayBuffer)
            
            let temp1 =arrayBuffer.indexOf("工作");
            let temp2 =arrayBuffer.indexOf("utf-8");
            let temp3 =arrayBuffer.indexOf("base64");
            
            console.log("temp",temp1,temp2,temp3)
            
            if(temp1>0){
                // 正确解码
                console.log("正确解码")
                callback(arrayBuffer)
            }else{
                if(temp1<0 && temp2<0 && temp3<0){
                    // 前程无忧base64 encoding gb2312
                    console.log("前程无忧docx")

                }else if(temp1<0 && temp2<0 && temp3>0){
                    console.log("前程无忧doc base64")
                    let search = `Content-Transfer-Encoding:base64`
                    let start = arrayBuffer.indexOf(search);
                    var result = arrayBuffer.substring(start+search.length);//截取字符串
                    console.log("result",result)
                }
                else{
                    reader.readAsText(file,"utf-8");
                }                
            }            
        }
    }

    handleFileSelect =(event)=>{
        this.readFileInputEventAsArrayBuffer(event,(arrayBuffer) => {
            console.log("arrayBuffer",arrayBuffer)
            document.getElementById("doc").innerHTML = arrayBuffer
            let search01 = arrayBuffer.indexOf("智联")
            let search02 = arrayBuffer.indexOf("zh-hr")
            let search03 = arrayBuffer.indexOf("http://image0.lietou-static.com/img/569f308d45ceea11aa29f7a104a.jpg")
            console.log("看看是那家人力资源网：",search01,search02,search03)

            if(search01>0){
                // 智联                
                this.setState({
                    website:"智联招聘"
                })                
                this.zlzp(arrayBuffer)
            }
            if(search02>0){
                // 珠海人力资源网
                this.setState({
                    website:"珠海人力资源网"
                })
                this.zhhr(arrayBuffer)

            }
            if(search03>0){
                // 猎聘
                this.setState({
                    website:"猎聘网"
                })
                this.lpwl(arrayBuffer)
            }
        });
    }

    zlzp = (arrayBuffer) =>{
        console.log(arrayBuffer)
        
        let headings1 = document.evaluate('//*[@id="doc"]/div/table[2]/tbody/tr[1]/td/table/tbody/tr/td[1]/p/b/span/text()', document, null, XPathResult.ANY_TYPE, null );
        let thisHeading1 = headings1.iterateNext()
        let name = thisHeading1.textContent
        name = name.trim();
        
        var headings2 = document.evaluate('//*[@id="doc"]/div/table[2]/tbody/tr[1]/td/table/tbody/tr/td[2]/p/span/b/span/span/text()', document, null, XPathResult.ANY_TYPE, null );
        var thisHeading2 = headings2.iterateNext()
        let phone = thisHeading2.textContent
        phone = phone.trim();

        this.setState({
            name,
            phone
        })
    }

    zhhr = (arrayBuffer) =>{
        console.log(arrayBuffer)
        let headings1 = document.evaluate('//*[@id="userName"]/text()', document, null, XPathResult.ANY_TYPE, null );
        let thisHeading1 = headings1.iterateNext()
        let name = thisHeading1.textContent
        name = name.trim();

        var headings2 = document.evaluate('//*[@id="base_link"]/table[2]/tbody/tr[1]/td[2]/text()', document, null, XPathResult.ANY_TYPE, null );
        var thisHeading2 = headings2.iterateNext()
        let phone = thisHeading2.textContent
        phone = phone.trim();

        this.setState({
            name,
            phone
        })
    }

    lpwl = (arrayBuffer) =>{
        console.log(arrayBuffer)
        let headings1 = document.evaluate('//*[@id="doc"]/div/table[3]/tbody/tr[1]/td[2]/p/span[1]/text()', document, null, XPathResult.ANY_TYPE, null );
        let thisHeading1 = headings1.iterateNext()
        let name = thisHeading1.textContent
        name = name.trim();

        var headings2 = document.evaluate('//*[@id="doc"]/div/table[3]/tbody/tr[2]/td[2]/p/span/text()', document, null, XPathResult.ANY_TYPE, null );
        var thisHeading2 = headings2.iterateNext()
        let phone = thisHeading2.textContent
        phone = phone.trim();

        this.setState({
            name,
            phone
        })
    }

    render(){
        return(
            <React.Fragment>
                <div style={{height:"45px",marginTop:"30px"}}>
                    <input type='file' multiple='multiple' onChange={e=>this.handleFileSelect(e)} />
                    <label >{this.state.website}</label>
                </div>

                <div >
                    <div style={{float:"left",marginLeft:"10%"}}>
                        <label>姓名：</label>
                        <input value={this.state.name} placeholder="填写姓名" ></input>
                    </div>

                    <div >
                        <label>电话：</label>
                        <input value={this.state.phone} placeholder="填写电话" ></input>
                    </div>
                </div>
                
                <div id="doc" style={{display:this.state.docshow}}></div>
                
            </React.Fragment>
        )
    }

    
}
export default Docx2html