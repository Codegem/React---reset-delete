import React, { Component } from 'react'

export default class Counter extends Component {

    render() {
        return (
            <div>
            <span className={this.badgeKlase()}>{this.skaiciuokle()}</span>
            <a 
                onClick ={() => this.props.onAtimti(this.props.counter)} 
                className="btn btn-secondary m-1">
            -</a>
            <a 
                onClick={() => this.props.onPrideti(this.props.counter)}
                className="btn btn-secondary m-1">
            +</a>
            <a 
                onClick ={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger m-1">
            Trinti</a>
            </div>
        );
    }

    badgeKlase() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter === 0) ? "warning" : "primary";
        return classes;
    }

    skaiciuokle(){
        const {value} = this.props.counter;
        return value === 0 ? "Nulis" : value;
    }
}