import React, { Component } from 'react';
import { Button } from 'antd';
import Crop from './crop';
import Resize from './resize';
import Blur from './blur';

class Actions extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: '',
        }
    }

  
    handleAction = type => {
        this.setState({type})
    }

    getAction = () => {
        const { type } = this.state;
        switch(type) {
            case 'resize':
                return <Resize closeModal={() => this.handleAction('')} addAction={this.props.addAction} />;
            case 'crop':
                return <Crop closeModal={() => this.handleAction('')} addAction={this.props.addAction} />;
            case 'blur':
                return <Blur closeModal={() => this.handleAction('')} addAction={this.props.addAction} />;
            default:
                return '';
        }
    }

    render(){       
        return (
            <div style={{'margin': '15px'}}>
              <Button style={{'margin': '15px'}} type='primary' onClick={() => this.handleAction('resize')}>Resize</Button>
              <Button style={{'margin': '15px'}} type='primary' onClick={() => this.handleAction('crop')}>Crop</Button>
              <Button style={{'margin': '15px'}} type='primary' onClick={() => this.handleAction('blur')}>Blur</Button>
              {this.getAction()}
            </div>
        )
    }
}

export default Actions;