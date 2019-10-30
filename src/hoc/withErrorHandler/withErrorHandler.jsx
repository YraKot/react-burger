import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            this.reqIntercetor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.resIntercetor = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err });
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqIntercetor);
            axios.interceptors.response.eject(this.resIntercetor);
        }

        errorConfrmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfrmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;