import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            post: []
        }
    }
    

    componentDidMount() {
        let post = this.props.content.map((p, i) => {
            return (
                <div className="col-md-3" key={i}>
                    <div className="card">
                        <img className="card-img-top" src={p.urlToImage || 'img/img-not-found.png'} alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{p.title}</h5>
                            <p className="card-text">{p.description}</p>
                            <a href={p.url} target="_blank" className="btn btn-primary">Go the site</a>
                        </div>
                    </div>
                </div>
            )
        });

        this.setState({ post: post });

    }

    render() {
        return (
            <div className="row">
                {this.state.post}
            </div>
        )
    }
}

export default Post;