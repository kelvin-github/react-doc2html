import React from "react";

export default class Demo03 extends React.Component{
    state ={
        carName:"Ben C63",
        stus:["A","B","C"]
    }

    // 纯组件处理
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props,this.state)  //当前 的
        console.log(nextProps,nextState)    //即将要变的
        return true
    }

    change2CarName=()=>{
        this.setState({
            carName:"MaBaKe"
        })
    }
    change2AddStus=()=>{
        this.setState({
            stus:["D",...this.state.stus]
        })
    }
    render(){
        console.log("Parent Run",this.state.stus)

        const {carName} = this.state
        return(
            <div style={{ background:"orange", padding: "10px"}}>
                <h1>i am Parent </h1>
                <span>My car name is :{carName} </span><br/>
                <button onClick={this.change2CarName} >click me 2 change carName</button>
                <button onClick={this.change2AddStus} >click me 2 Add stus</button>
                <Child 
                    carName={carName} 
                />
            </div>
        )
    }
}

// 纯组件（新写法 是有 缺陷 unshift pop 数组 都 无效 setState ）
class Child extends React.PureComponent{
    // 纯组件处理，旧的写法
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state)  //当前 的
    //     console.log(nextProps,nextState)    //即将要变的
    //     return !(JSON.stringify(this.props) === JSON.stringify(nextProps))        
    // }

    render(){
        console.log("Child Run")
        return(
            <div style={{ background:'gray', padding:10,marginTop:30 }}>
                <h2>i am Child</h2>
                <span>i reciver car name is :{this.props.carName}</span>
            </div>
        )
    }
}