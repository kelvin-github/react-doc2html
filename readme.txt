打包
npm run build

模拟当地服务器运行打包后的静态文件
npm i serve -g
serve build

serve : 无法加载文件 C:\Users\kelvi\AppData\Roaming\npm\serve.ps1，因为在此系统上禁止运行脚本
解决方法：
删除 C:\Users\kelvi\AppData\Roaming\npm\serve.ps1


安装 富文本
npm install tinymce -S
npm install @tinymce/tinymce-react --save