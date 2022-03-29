import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');

class DisplayCoffee extends Component {
    constructor() {
        super();
        this.state = {
          imgUrl : ""
        };
      }
    async componentDidMount(){
        // let Simulations = await axios.get(`https://coffee.alexflipnote.dev/random.json`)

        // let response = 'https://coffee.alexflipnote.dev/random'
        let response = await fetch('https://coffee.alexflipnote.dev/random.json')
        let data = await response.json();
        console.log(data);
        this.setState({
            imgUrl : response
        })
    }
    render() {
        return (
            <div>                
                <Link className='link' to="/">Home</Link>
                <div className='imageStyle'>
                    <img src={this.state.imgUrl} />
                </div>
            </div>
        );
    }
}

export default DisplayCoffee;