import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
// import axios from 'axios'

// props 接收父组件传过来的方法回馈文本内容，已经接收初始化时的内容
class Tinymce extends React.Component {
    state = {
        TinyKey:'h127lbs3mi2lsb42nwjgfynkz892orbvbyx2wg1r1ozpxqom',
        content: this.props.content,
        lang:this.props.lang,
    }

    // 接收富文本内容
    receiveHtml = (content,editor) => {
        console.log(content);
        // 获取纯文本
        console.log(editor.getContent({ format: 'text' }))
        // let textContent = editor.getContent({ format: 'text' })
        // this.props.inputContent(content,textContent)        
    }

    //上传图片
    // images_upload_handler = async (blob, success, fail) => {
    //     let file_data = new FormData();
    //     file_data.append("files", blob.blob());
    //     // console.log(file_data)

    //     // axios配置
    //     let base_url = "http://www.slk368.cn/api/react/tinyupfile"
    //     let configs = {
    //         headers:{'Content-Type':'multipart/form-data'}
    //     };       
        
    //     // A.交给后台 整理后再传OSS
    //     await axios.post(base_url, file_data ,configs).then(res=>{
    //         // console.log(res)
    //         let filename = res.data.data[0]
    //         // console.log(filename)
    //         let temp = filename.substring(0,8)
    //         // console.log(temp)
    //         // 拼装路径
    //         let path = "https://slk368.oss-cn-shenzhen.aliyuncs.com/Laravel/" + temp + '/' + filename

    //         success(path)
    //     })        
    // }

    render() {
        // console.log(this.state.lang)
        return (
            <div>
                <Editor
                    inline={false}
                    selector='editorStateRef'
                    apiKey={this.state.TinyKey}
                    ref='tinyEditor'
                    value={this.state.content}
                    onEditorChange={this.receiveHtml}
                    init={{                        
                        height: '500px',
                        // language: this.state.lang,
                        // language:'zh_CN',
                        plugins: 'table lists link image',
                        menubar: false,
                        toolbar: `formatselect | image |  bold italic strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify numlist bullist outdent indent`,
                        file_picker_types: 'image',
                        images_upload_url: '',
                        image_uploadtab: true,
                        // images_upload_handler:this.images_upload_handler,
                        // file_picker_callback,
                    }}
                />
            </div>
        )
    }
}
export default Tinymce