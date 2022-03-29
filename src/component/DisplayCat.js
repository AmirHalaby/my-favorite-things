import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'
class DisplayCat extends Component {
    constructor() {
        super();
        this.state = {
            imgUrl: ""
        };
    }
    async componentDidMount() {
        let response = await fetch('https://api.thecatapi.com/v1/images/search')
        let data = await response.json();
        console.log(data);
        this.setState({
            imgUrl: data[0].url
        })
    }
    render() {
        return (
            <div>

                <Link className='link' to="/">Home</Link>
                <div className='imageStyle'>
                    <img className='image' src={this.state.imgUrl} />
                </div>
            </div>
        );
    }
}

export default DisplayCat;