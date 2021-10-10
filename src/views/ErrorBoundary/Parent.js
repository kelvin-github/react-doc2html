import React from "react";
import Child from "./Child";

export default class Parent extends React.Component{
    state={
        hasError:'' // 用于标识子组件是否产生错误
    }

    // static getDerivedStateFromProps

    // 错误边界,当其子组件错误时会触发 getDerivedStateFromError 调用，并返回错误信息【新的生命周期】(而且只会在生产环境下有效)
    static getDerivedStateFromError(error){
        console.log('@@@@',error)
        return {hasError : error}
    }
    // 配合 上方 新的生命周期 函数一起使用
    componentDidCatch(){
        console.log("componentDidCatch : 渲染子组件时出错")
    }

    render(){
        return(
            <div style={{background:'orange',padding:10}}>
                <div>i am Parent </div>
                {this.state.hasError ? <h2>当前网络异常</h2>:<Child/>}
            </div>
        )
    }
}