import React, { Component } from 'react';

import Aux from './../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    toggleMenuHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.toggleMenuHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;