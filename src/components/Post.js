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
        const data = this.props.data;
        this.searchNews(data.country, data.category);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            console.log(prevProps);
            console.log(prevState);
    }
    searchNews(country, category) {
        let url = 'https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + category + '&apiKey=625662f1f94e4e5ba495a05c184c3e21';
        let req = new Request(url);
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
            return <div className="container"> <h3 className="text-center"> <i className="fa fa-spinner fa-spin"></i> Loading...</h3></div>
        } else {
            return (
                <div className="container">
                    <PostItem content={this.state.posts}></PostItem>
                </div>
            )
        }
    }
}

export default Post;