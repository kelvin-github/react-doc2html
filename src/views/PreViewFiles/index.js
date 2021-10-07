// MyApp.js
import React, { Component } from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// 默认再 public 目录下
// const file = './20200708143409426.jpg'
// const type = 'jpg'
const file = './003.docx'
const type = 'docx'
// const file = './002.pdf'
// const type = 'pdf'
// const file = './001.xlsx'
// const type = 'xlsx'


export default class MyComponent extends Component {
  render() {
    return (
      <FileViewer
        fileType={type}
        filePath={file}
        // errorComponent={CustomErrorComponent}
        // onError={this.onError}
        />
    );
  }

//   onError(e) {
//     logger.logError(e, 'error in file-viewer');
//   }
}
