import React, { Component } from 'react';

export default class ClickCounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <p>你点击了{count}次</p>
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
}