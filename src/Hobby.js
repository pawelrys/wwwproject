import React, { Component } from "react";
import {Table} from "./data/Table";
class Hobby extends Component {
    render() {
        return (
            <>
            <div>
                <h2>Hello</h2>
                <p>To jest strona Hobby.</p>
                <p>Wybierz jedną z pozycji menu, aby dowieaaadzieć się czegośc
                    więcej.</p>
            </div>

            <Table/>
            </>
        );
    }
}
export default Hobby;
