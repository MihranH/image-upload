import React, { Component } from 'react';
import './actions.css';
import { Input, message, Modal } from 'antd';
import { validateData } from '../../util';

class Blur extends Component {
    constructor(props){
        super(props)
        this.state = {
            percent: '',
        }
    }

  
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveParams = () => {
        const { percent } = this.state;
        if(!validateData(this.state)){
            return message.error('Please provide all the fields');
        }
        this.props.addAction({
            type: 'blur',  params: { percent },
        })
        message.success('Noted')
        this.props.closeModal()
    }

    render(){
        const { percent } = this.state;
        return (
           <Modal visible={true} onCancel={this.props.closeModal} onOk={this.saveParams} okText="Done">     
                <div className='action-inputs'>
                    <p>Percent</p>
                    <Input name='percent' value={percent} onChange={this.handleChange} type='number'></Input>       
                </div>      
           </Modal>
        )
    }
}

export default Blur;