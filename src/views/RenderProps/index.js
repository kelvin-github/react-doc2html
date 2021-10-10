import React from "react";

export default class Demo04 extends React.Component{
    render(){
        return(
            <div style={{background:'orange',padding:10}}>
                <h1>i am Parent</h1>

                <A>
                    hello world
                </A>
                
            </div>
        )
    }
}

class A extends React.Component{
    render(){
        console.log(this.props.children)
        return(
            <div style={{background:'gray',padding:10}}>
                <h2>i am A</h2>

                {/* <B>
                    <C/>
                </B>*/}

                <B render={ (name)=><C name={name} /> }/>
            </div>
        )
    }
}
class B extends React.Component{
    state = {
        name:"i am B state"
    }
    render(){
        const {name} = this.state
        return(
            <div style={{background:'skyblue',padding:10}}>
                <h3>i am B</h3>
                {/* 等同于 <C/> */}
                {/* {this.props.children} */}
                {this.props.render(name)}
            </div>
        )
    }
}
class C extends React.Component{    
    render(){
        console.log(this.props)
        return(
            <div style={{background:'green',padding:10}}>
                <h4>i am C</h4>
                <h4>i get B data from render : {this.props.name}</h4>
            </div>
        )
    }
}
