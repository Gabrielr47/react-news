import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Post from './components/Post';

class App extends Component {

    render() {
        return (
            <div>
                <Header></Header><br />
                <div className="container-fluid">
                    <Post></Post>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
