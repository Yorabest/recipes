import { Component, useEffect } from "react";

let tim = 0;

export class Timer extends Component{
    state = {
        count: 0,
        start: false,
        some: "some"
    }

    

    componentDidMount = () => {
        //    this.startTimer()
        this.interval = setInterval(this.handleTimer, 1000)
    }
     
          
        
        
    

    handleTimer = () => {
        this.setState((prev) => ({ count: prev.count + 1}))
        // console.log(this.state.count);
    //     useEffect(() => {
    //         const interval = setInterval(() => {
    //         this.setState((prev)=>({count: prev.count + 1}))
            
    //         }, 1000);
    //         console.log(this.state.count);
            
    //         return () => clearInterval(interval)
    //    })
    }


// startTimer = () => {
//     this.setState((prev) => ({ start: !prev.start }))
//             setInterval(this.handleTimer, 1000)
// }
//     componentWillUnmount() {
//         clearInterval(this.state.interval)
//     }



    render() {
        return <><p>{this.state.count}</p>
            {/* <button onClick={this.startTimer}>St</button> */}
        </>
    }
}