import React, { Component } from 'react';
import { getImageLogs } from '../../api/log'
import { Table, Button, Modal, Typography } from 'antd';
import './logs.css'

const { Column } = Table;
const { Title } = Typography;

class Logs extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: false,
            reviewVisible: false,
            params: {},
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const { id } = this.props.match.params;
        this.setState({loading: true})
        getImageLogs(id).then(res => {
            this.setState({data: res, loading: false})
        })
    }

    review = params => {    
        this.setState({reviewVisible: true, params: JSON.parse(params)})
    }

    closeReviewModal = () => {
        this.setState({reviewVisible: false, params: {}})
    }

    render(){
        const { data, loading, reviewVisible, params } = this.state;
        return (
            <>
                <Title className='title-logs'>Logs</Title>
                <div className="content-logs">                    
                    <Table dataSource={data} loading={loading}>
                        <Column title="Type" dataIndex="type" key='type'></Column>
                        <Column title="Params" key='params'
                        render={(text, record) => (<Button type='primary' onClick={() => this.review(record.params)}>Review</Button>)}></Column>                   
                    </Table>                
                </div>
                <Modal visible={reviewVisible} footer={null} onCancel={this.closeReviewModal} width={300}>
                    <div className='modal-content-logs'>
                        {Object.keys(params).map(key => {
                            return <p key={key}><strong>{key.charAt(0).toUpperCase() + key.substring(1)}</strong> : {params[key]}</p>
                        })}
                    </div>
                </Modal>
            </>
        )
    }
}

export default Logs;