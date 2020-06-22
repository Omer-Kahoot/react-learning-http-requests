import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
//import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);

        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        //this.setState({ selectedPostId: id });
        //How to navigate programmatically using our package. using history member inside our props.
        //console.log(id);
        //console.log(this.props.history);
        //In order to go to another link programmatically.
        this.props.history.push({pathname : '/' + id});
        //this.props.history.push('/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //Following is one way to route to a specific post, but there is another way as well that we can use
                    //programmatically to do. And that will be done accordingly.
                    //<Link key={post.id} to={'/' + post.id}>
                        <Post
                            key={post.id}
                            clicked={() => this.postSelectedHandler(post.id)}
                            title={post.title}
                            author={post.author} />
                    //</Link>
            )});
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;