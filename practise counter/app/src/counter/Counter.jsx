import React, { useState ,Fragment } from 'react'

const Counter = () => { 
//    let a =1
    const [count,setCount] = useState(0)
    // const Increment = () => {
        // console.log("pre",count,a);
    //    setCount(count+ 1);
        // a++;
        // console.log("post",)
//  }
//  const Decrement = () => {
//    
        // console.log("pre",count,a);
    //    setCount(count-1);
        // a--;
        // console.log("post",)
//  }
    
  return (
    <Fragment>
        <h1>Counter App:{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => {
            if(count > 0){
                setCount(count-1)
            }
        }}>Decrement</button>
        </Fragment>
  )
}

export default Counter
 