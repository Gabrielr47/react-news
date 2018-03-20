import React, { Component } from 'react';

import PostItem from './PostItem';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        var url = 'https://newsapi.org/v2/top-headlines?country=nl&apiKey=625662f1f94e4e5ba495a05c184c3e21';
        var req = new Request(url);
        fetch(req).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                isLoaded: true,
                posts: data.articles
            });
        });

    }

    render() {
        if (!this.state.isLoaded) {
            return <div> loading...</div>
        } else {
            return (
                <div>
                    <PostItem content={this.state.posts}></PostItem>
                </div>
            )
        }
    }
}

export default Post;