import { Component } from "react";

export class Sum extends Component{
    state = {
        value1: 0,
        value2: 0
    }

    changeNumder = (e) => {
        const {name, value} = e.currentTarget
        this.setState({
           [ name]: Number(value)
    })
    }

    countSum = () => {
        const {value1, value2} = this.state
        return value1 + value2
    }

    reset = () => {
        this.setState({
             value1: 0,
             value2: 0
        })
    }

    render() {
        return <div>
            <input name="value1" value={this.state.value1} onChange={this.changeNumder}/>
            <p>+</p>
            <input name="value2" value={this.state.value2} onChange={this.changeNumder} />
            <p>= {this.countSum()}</p>
            <button type="button" onClick={this.reset}>Reset</button>

        </div>
    }
}