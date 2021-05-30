import React, { Component } from 'react';
import { uploadImage } from '../../api/image'
import { Upload, Button, message } from 'antd';
import { UploadOutlined, CopyOutlined } from '@ant-design/icons';
import './imageUploader.css';

class ImageUploader extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgUrl: '',
        }
    }

    handleImgUpload = file => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            return message.error('You should upload either jpeg or png')
        }
        const data = new FormData();
        data.append('image', file)
        message.loading('Uploading...')
        // the formdata should be sent but as we mock the image url then we send ordinary object
        uploadImage({image: 'test'}).then(res => {
            message.destroy();
            if (res){
                this.setState({imgUrl: res});
                return message.success('Uploaded!');
            } else {
                return message.error('Failed to upload');
            }
        })
    }

    copyURL = url => {
        const inputCopy = document.createElement('textarea')
        inputCopy.value = url;
        document.body.appendChild(inputCopy);
        inputCopy.select();
        document.execCommand('copy');
        document.body.removeChild(inputCopy);
        message.destroy();
        message.success('Image URL copied')
    }

    render(){
        const { imgUrl } = this.state;
        return (
            <div className="upload-container">
               <Upload
                beforeUpload={this.handleImgUpload}
                showUploadList={false}
                customRequest={() => {}}>
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
               </Upload>
               {Boolean(imgUrl) && 
               <p>{imgUrl} 
                    <Button type='primary' shape='circle' size='small' icon={<CopyOutlined />} onClick={() => this.copyURL(imgUrl)}></Button>
               </p>}
            </div>
        )
    }
}

export default ImageUploader;