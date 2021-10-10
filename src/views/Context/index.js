import React from 'react'

// 创建一个可以保存 上下组件的 对象
const MyContext = React.createContext()

class Demo02 extends React.Component{
    state={
        initA:"AAAAAA1",
        initB:"AAAAAA2"
    }
    render(){
        return(
            <React.Fragment>
                <h1>i am A component </h1>
                <h1>i have a state data : {this.state.init}</h1>

                <MyContext.Provider value={ {initA:this.state.initA,initB:this.state.initB} } >
                    <DemoB init={this.state.initA} />
                </MyContext.Provider>

            </React.Fragment>
        )
    }
}

class DemoB extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <h2>i am B component</h2>
                    <h2> i get data from A Props is : {this.props.init}</h2>
                    <DemoC init={this.props.init} />
                </div>
            </React.Fragment>
        )
    }
}
// class DemoC extends React.Component{
//     // 谁要获得 谁 静态声明 要
//     static contextType = MyContext
//     render(){
//         console.log(this.context)
//         const {initA,initB} = this.context
//         return(
//             <React.Fragment>
//                 <div>
//                     <h3>i am C component</h3>
//                     <h3>handle data from B Props is : {this.props.init}</h3>
//                     <h3>handle data from A1 Context : {initA}</h3>
//                     <h3>handle data from A2 Context : {initB}</h3>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

function DemoC(props){
    return(
        <React.Fragment>
            <div>
                <h3>i am C component</h3>
                <h3>handle data from B Props is : {props.init}</h3>
                <h3>handle data from A1 Context : 
                    <MyContext.Consumer>
                        {
                            value =>{
                                return `${value.initA}`
                            }
                        }
                    </MyContext.Consumer>
                </h3>
                <h3>handle data from A2 Context :
                    <MyContext.Consumer>
                        {
                            value =>{
                                return `${value.initB}`
                            }
                        }
                    </MyContext.Consumer>
                </h3>
            </div>
        </React.Fragment>
    )

}

export default Demo02