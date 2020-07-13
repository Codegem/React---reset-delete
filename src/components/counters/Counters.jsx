import React, { Component } from 'react'
import Counter from '../counter/Counter'
export default class Counters extends Component {
    state = {
        counters: [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0}
        ]
    }

    handleAtimti = counter => {
        this.setState({value: this.state.counter - 1});
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        if (counters[index].value !== 0){
            counters[index].value--
        }
        console.log(this.state.counters[index])
        this.setState({counters})
    }

    handlePrideti = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        console.log(this.state.counters[index])
        this.setState({counters})
    }

    handleAtkurti = () => {
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        })
        this.setState({counters});
    }

    handleTrinti = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    render() {
        return (
            <div>
            <a onClick={this.handleAtkurti} className="btn btn-primary m-2">Reset</a>
            {this.state.counters.map(counter =>
            <Counter key={counter.id} counter={counter} onDelete={this.handleTrinti} onPrideti = {this.handlePrideti} onAtimti = {this.handleAtimti}
            />)}
            </div>
        )
    }
}
