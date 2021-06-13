import React, { Component } from "react";
import { Parallax } from 'react-parallax';

const images = {
    image1: require('./photos/back1.jpg'),
    image2: require('./photos/back2.jpg'),
    image3: require('./photos/back3.jpg'),
    image4: require('./photos/back4.jpg'),
}

class AboutMe extends Component {
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <p>To jest strona AboutMe.</p>
                <p>Wybierz jedną z pozycji menu, aby dowiedzieć się czegośc
                    więcej.</p>
            </div>
        );
    }
}
export default AboutMe;
