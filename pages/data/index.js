import React, { Component } from 'react';
import axios from 'axios';
import Head from '../../components/common/head'
import Nav from '../../components/client/nav'

export default class Data extends Component {
    static async getInitialProps({ req, query }) {
        const id = req.query.id || query.id || 1;

        try {
            const result = await axios.get(`https://reqres.in/api/users/${id}`);

            return {
                user: result.data.data,
                namespacesRequired: ['common']
            };
        }
        catch (ex) {
            throw ex;
        }
    }

    state = {
        data: null,
        isLoading: false,
        errorMessage: null
    };

    async componentDidMount() {
        // Execute request from the browser
        await this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            isLoading: true,
            errorMessage: null
        })

        try {
            const result = await axios.get('/api/v1/data');

            this.setState({
                data: result.data.data,
                isLoading: false
            });
        }
        catch (ex) {
            this.setState({
                errorMessage: ex.message || 'Unknown error',
                data: null,
                isLoading: false
            })
        }
    }

    render() {
        const { user } = this.props;
        const { data, errorMessage, isLoading } = this.state;

        return (
            <div>
                <Head title="Home" />
                <Nav />
                <div className="container">
                    {errorMessage && (
                        <p className="errorMessage">{errorMessage}</p>
                    )}

                    {isLoading && (
                        <p className="loader">Loading...</p>
                    )}

                    {data && (
                        <div className="dataView">
                            <span className="dataView-label">Data: </span>
                            <span className="dataView-value">{data}</span>
                        </div>
                    )}

                    {user && (
                        <div className="user">
                            {user.avatar && <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}></img>}
                            <dl className="user-info">
                                <dt>ID: </dt>
                                <dd>{user.id}</dd>
                                <dt>First name: </dt>
                                <dd>{user.first_name}</dd>
                                <dt>Last name: </dt>
                                <dd>{user.last_name}</dd>
                            </dl>
                        </div>
                    )}
                </div>
                <style jsx>{`
                    .dataView-label {
                        font-weight: bold;
                    }

                    .user-info dt {
                        font-weight: bold;
                    }
                    `}</style>
            </div>
        );
    }
}