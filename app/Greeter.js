import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            <div>
                {config.greetText}<Button bsStyle="success">2221hhsadasdsaSuccess</Button>
            </div>
        );
    }
}

export default Greeter