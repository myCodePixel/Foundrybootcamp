import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HeaderPage from './HeaderPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
class PrimaryLayout extends Component {
    render() {
        return (
            <div>
                <HeaderPage></HeaderPage>
<switch>
<Route path="/" exact component={HomePage}/>
<Route path="/about" component={AboutPage}/>
        </switch>
            </div>
        );
    }
}

export default PrimaryLayout;