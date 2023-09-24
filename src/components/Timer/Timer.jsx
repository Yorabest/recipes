import { Component, useEffect } from "react";

export class Timer extends Component{
    state = {
        count: 0,
        start: false,
        some: "some"
    }

    

    componentDidMount = () => {
        this.interval = setInterval(this.handleTimer, 1000)
    }
     
          
        
        
    

    handleTimer = () => {
        this.setState((prev) => ({ count: prev.count + 1}))
    }



     componentWillUnmount() {
         clearInterval(this.interval)
     }



    render() {
        return <p>{this.state.count}</p>
       
    }
}