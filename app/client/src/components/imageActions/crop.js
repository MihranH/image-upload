import React, { Component } from 'react';
import './actions.css';
import { Input, message, Modal } from 'antd';
import { validateData } from '../../util';

class Crop extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: '',
            height: '',
            top: '',
            left: '',
        }
    }

  
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveParams = () => {
        const { width, height, top, left } = this.state;
        if(!validateData(this.state)){
            return message.error('Please provide all the fields');
        }
        this.props.addAction({
            type: 'crop',  params: { width, height, top, left },
        })
        message.success('Noted')
        this.props.closeModal()
    }

    render(){
        const { width, height, top, left } = this.state;
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
                    <p>Top</p>
                    <Input name='top' value={top} onChange={this.handleChange} type='number'></Input>
                </div>
                <div className='action-inputs'>
                    <p>Left</p>
                    <Input name='left' value={left} onChange={this.handleChange} type='number'></Input>
                </div>
           </Modal>
        )
    }
}

export default Crop;