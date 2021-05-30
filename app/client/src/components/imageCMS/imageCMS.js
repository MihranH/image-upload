import React, { Component } from 'react';
import { addImage } from '../../api/image'
import { Input, Button, message } from 'antd';
import './imageCMS.css';
import Actions from '../imageActions/actions';
import ImageList from '../imageList/imageList';

class ImageCMS extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgUrl: '',
            actions: [],
            loading: false,
        }
        this.list = React.createRef();
    }

  
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addImg = () => {
        const { imgUrl, actions } = this.state;
        if (!imgUrl) {
            return message.error('Image url should not be empty')
        }
        message.loading('Adding...')
        this.setState({loading: true})
        addImage(imgUrl, actions).then(res => {
            message.destroy()
            this.setState({loading: false, imgUrl: ''})
            if (res === true) {
                if (this.list && this.list.current) {
                    this.list.current.getData();
                }
                return message.success('Added!')
            } else {
                return message.error('Failed to add')
            }
        })
    }

    addAction = action => {
        const { actions } = this.state;
        this.setState({ actions: [...actions, action] });
    }

    render(){
        const { imgUrl, loading } = this.state;
        return (
            <div>
              <Input className='url-input' placeholder="Image URL" name="imgUrl" value={imgUrl} onChange={this.handleChange}></Input>
              <Button type='primary' onClick={this.addImg} loading={loading}>Add</Button>
              {Boolean(imgUrl) && <Actions addAction={this.addAction}/>}
              <ImageList ref={this.list}/> 
            </div>
        )
    }
}

export default ImageCMS;