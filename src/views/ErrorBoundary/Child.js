import React from "react";

export default class Child extends React.Component{
    state={
        // users:[
        //     {id:1,name:"tom01"},
        //     {id:2,name:"tom02"},
        //     {id:3,name:"tom03"},
        //     {id:4,name:"tom04"}
        // ]
        users:'abc'
    }
    render(){
        return(
            <div style={{background:'gray',padding:10}}>
                <div>i am Child </div>
                {
                    this.state.users.map((item)=>{
                        return (
                            <div key={item.id}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}