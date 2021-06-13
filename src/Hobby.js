import React, { Component } from "react";
import {Table} from "./data/Table";
class Hobby extends Component {
    render() {
        return (
            <>
            <div>
                <p>Jest to projekt na przedmiot "Programowanie dla WWW''.</p>
                <br/>
                <br/>
                <br/>
                <h2>Tabela</h2>
                <p>Tabela do sortowania i filtrowania najbardziej niedocenianych piłkarzy i piłkarek zeszłego sezonu. Możliwe filtrowanie globalne i po kolumnach. Dane pobrate z pliku .json</p>
            </div>

            <Table/>
            </>
        );
    }
}
export default Hobby;
