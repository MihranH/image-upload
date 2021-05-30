import React, { Component } from 'react';
import './imageList.css';
import { getAllImages, deleteImgById } from '../../api/image'
import { Table, Button, Modal, message } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Column } = Table;
const confirmModal = Modal.confirm;

class ImageList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: false,
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        this.setState({loading: true})
        getAllImages().then(res => {
            this.setState({data: res, loading: false})
        })
    }

    deleteImage = imgId => {
        confirmModal({
           title: 'Are you sure you want to delete this image',
           okText: 'Yes',
           cancelText: 'No',
           onOk: () => {
            message.loading('Deleting...')
            deleteImgById(imgId).then(res => {
                message.destroy();
                if (res === true){
                    this.getData();
                    return message.success('Deleted!')
                } else {
                    return message.error('Failed to delete')
                }
            })
           },
           onCancel: () => {}
        })
    }

    render(){
        const { data, loading } = this.state;
        return (
            <div className="content">
                <Table dataSource={data} loading={loading}>
                    <Column title="Image URL" dataIndex="url" key='url'></Column>
                    <Column title="Log" key='log'
                     render={(text, record) => (
                     <Link to={`log/${record.id}`}>
                        <InfoCircleOutlined className='log-info-icon' />
                     </Link>)}></Column>
                    <Column title="Delete" key='delete'
                     render={(text, record) => (<Button type='danger' onClick={() => this.deleteImage(record.id)}>Delete</Button>)}>                         
                    </Column>
                </Table>                
            </div>
        )
    }
}

export default ImageList;