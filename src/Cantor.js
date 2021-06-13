import React, { Component } from "react";
import axios from 'axios';
class Cantor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bitcoinCourse: ""
        }
        this.getBitcoin = this.getBitcoin.bind(this)
    }

    getBitcoin (event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let format = data.get("valueFormat");
        let output;
        console.log(format);
        let promise = axios.get('https://api.coindesk.com/v1/bpi/currentprice/' + format +'.json')
            .then(res => {
                output = "Kurs 1 Bitcoina: " + res.data.bpi[format].rate + " " + format;
                this.setState({bitcoinCourse: output});
            });
    }

    render() {
        return (
            <div>
                <h2>Kantor</h2>
                <form onSubmit={this.getBitcoin}>
                    <label htmlFor="value">
                        Podaj Kod Waluty
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <input type="text" id="valueFormat" name="valueFormat"/>
                    </label>
                    <button>Pobierz kurs!</button>
                    <br/>
                    <br/>
                    <label id="lab">
                        {this.state.bitcoinCourse}
                    </label>
                </form>
            </div>
        );
    }
}
export default Cantor;
