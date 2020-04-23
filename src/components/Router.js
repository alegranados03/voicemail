import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import VoiceMailSelect from './VoiceMailSelect';
import VoiceMailList from './VoiceMailList';

class Router extends Component {
    render() {
        return (

            <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={VoiceMailSelect}></Route>
                <Route path={'/listVoiceMails/:id'} component={VoiceMailList}></Route>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;