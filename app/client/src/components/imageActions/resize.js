import React, { Component } from 'react';
import './actions.css';
import { Input, message, Modal } from 'antd';
import { validateData } from '../../util';

class Resize extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: '',
            height: '',
            aspectRatio: '',
        }
    }

  
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveParams = () => {
        const { width, height, aspectRatio } = this.state;
        if(!validateData(this.state)){
            return message.error('Please provide all the fields');
        }
        this.props.addAction({
            type: 'resize',  params: { width, height, aspectRatio },
        })
        message.success('Noted')
        this.props.closeModal()
    }

    render(){
        const { width, height, aspectRatio } = this.state;
        return (
           <Modal visible={true} onCancel={this.props.closeModal} onOk={this.saveParams} okText="Done">
               <div className='action-inputs'>
                    <p>Width</p>
                    <Input name='width' value={width} onChange={this.handleChange} type='number'></Input>
               </div>
               <div className='action-inputs'>
                    <p>Height</p>
                    <Input name='height' value={height} onChange={this.handleChange} type='number'></Input>
                </div>
                <div className='action-inputs'>
                    <p>Aspect Ratio</p>
                    <Input name='aspectRatio' value={aspectRatio} onChange={this.handleChange}></Input>
                </div>
           </Modal>
        )
    }
}

export default Resize;