import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: 'br',
            category: 'technology'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <Header></Header><br />
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="country">Country</label>
                                            </div>
                                            <select className="custom-select" id="country" name="country" onChange={this.handleChange} >
                                                <option>Choose...</option>
                                                <option value="ar">Argentina</option>
                                                <option value="au">Australia</option>
                                                <option value="at">Austria</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="category">Category</label>
                                            </div>
                                            <select className="custom-select" id="category" name="category" onChange={this.handleChange} >
                                                <option>Choose...</option>
                                                <option value="business">Business</option>
                                                <option value="entertainment">Entertainment</option>
                                                <option value="health">Health</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-info btn-block">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Post data={this.state}></Post>
                </div>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
