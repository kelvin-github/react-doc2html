import React, { 
    useState,
    useEffect,
    useRef
} from 'react'

// let timer
// function Demo01(){
    
//     const [init, setInit] = useState(
//         [
//             {id:1,content:"123"},
//             {id:2,content:"123"}
//         ]
//     )
//     const [count,setCount] = useState(0)
    

//     const myRef = useRef()
    
//     useEffect(()=>{
//         timer = setInterval(()=>{
//             setCount(count=>count+1)
//         },1000)
//         return ()=>{
//             console.log("like unmount")
//             clearInterval(timer)
//         }
//     },[])

//     const handleClickAdd =(e)=>{
//         // 1 写法
//         // setCount(count+1)

//         // 2 写法
//         setCount(count=>count+1)
//     }

//     const handleClick2Stop=(e)=>{
//         console.log("handleClick2Stop")
//         clearInterval(timer)
//     }
//     const handleClick2Show=()=>{
//         console.log("handleClick2Show",myRef.current.value)

//     }
//     return(
//         <div>{count}
//             {
//                 init.map((item,index)=>{
//                     return(
//                         <div key={index}>
//                             <div>{item.id}</div>
//                             <div>{item.content}</div>
//                         </div>
//                     )
//                 })
//             }
//             <input type="text" ref={myRef} />
//             <button onClick={handleClickAdd}>click me</button>
//             <button onClick={handleClick2Stop}>Stop Interval</button>
//             <button onClick={handleClick2Show}>Show Tips</button>
//         </div>
//     )
// }


class Demo01 extends React.Component{
    state={
        init:[
            {id:1,content:"123"},
            {id:2,content:"123"}
        ],
        count:0,
        setInt:''
    };

    handleClick =(e)=>{
        console.log(this.init)
    }

    handleClickAdd =()=>{
        // 1 写法
        // this.setState({
        //     count:this.state.count+1
        // })

        // 2 写法
        const {count} = this.state
        this.setState({
            count:count+1
        },()=>{
            console.log(this.state.count)
        },)
    }

    componentDidMount(){
        this.auto2Add()
    }
    
    auto2Add =()=>{
        this.timer = setInterval(()=>{
            this.setState({
                count:this.state.count +1
            })
        },1000)
    }

    handleClick2Stop =()=>{
        console.log("handleClick2Stop")
        clearInterval(this.timer)
    }
    handleClick2Show =()=>{
        console.log("handleClick2Show")
        let inputValue = this.myRef.current.value
        console.log(inputValue)
    }

    myRef = React.createRef()
    
    render(){
        return(
            <div>{this.state.count}
                {
                    this.state.init.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div>{item.id}</div>
                                <div>{item.content}</div>
                            </div>
                        )
                    })
                }
                <input type="text" ref={this.myRef} />
                <button onClick={this.handleClickAdd}>click me</button>
                <button onClick={this.handleClick2Stop}>Stop Interval</button>
                <button onClick={this.handleClick2Show}>Show tips</button>
            </div>
        )
    }    
}


export default Demo01