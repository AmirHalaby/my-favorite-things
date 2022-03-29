import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DisplayFoodish extends Component {
    constructor() {
        super();
        this.state = {
            imgUrl: ""
        };
    }
    async componentDidMount() {
        let response = await fetch('https://foodish-api.herokuapp.com/api/images/biryani');
        let data = await response.json();
        console.log(data);
        this.setState({
            imgUrl: data.image
        })
    }
    render() {
        return (
            <div className='body'>
                <Link className='link' to="/">Home</Link>
                <div className='imageStyle'>
                    <img src={this.state.imgUrl} width="400" height="400"/>
                </div>
            </div>
        );
    }
}

export default DisplayFoodish;