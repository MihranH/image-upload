import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('/api/v1/image/all').then(res => this.setState({data:res.data}))
    }

    render(){
        const { data } = this.state;
        return (
            <div>
                {data.map(item => {
                    return <div>
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                            </div>
                })}
            </div>
        )
    }
}

export default Main;