import React, { Component } from 'react';
import axios from '../../../axios';
import './NewPost.css';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    componentDidMount(){
        // if unauth => this.props.history.replace('/posts'); One another way of replacing the route if user is unauthenticated. guards
        console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        }
        axios.post('/posts', post)
             .then(response=>{
                 console.log(response);
                 this.setState({ submitted : true });
                 //Another way to redirect is without the redirect component and instead using the history prop over here as follows:
                 //this.props.history.push('/posts');
                 //The difference is push pushes the page onto the page stack so clicking on back button will again bring the 
                 //page to current one that is new post. Redirect on the other hand replaces the page so back button will take
                 //to previous page not to the one where we have redirected from.
             });
    }

    render() {
        let redirect = null;
        if(this.state.submitted)
            redirect = <Redirect to="/posts" />;
        return (
            <div className="NewPost">
                {/*<Redirect to="/posts" /> /* if this component is palced like this it will automatically redirect to the posts page as soon as it renders. So we need to do this conditionally instead. */}
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;