import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios'
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    /*state = {
        posts : [],
        selectedPostId : null,
        error : false
    }*/

    /*componentDidMount() {
        axios.get('/posts')
             .then(response => {
                 const posts = response.data.slice(0,4);
                 const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                 });
                 this.setState({
                    posts : updatedPosts
                 });
             })
             .catch(error=>{
                 //console.log(error);
                 this.setState({error: true});
             });
    }*/

    /*postSelectedHandler = (id) => {
        this.setState({selectedPostId : id});
    }*/
    
    render () {
        /*let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                            clicked={() => this.postSelectedHandler(post.id)}
                            title={post.title} 
                            key={post.id} 
                            author={post.author}/>
            }); 
        }*/
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*<li><a href="/">Home</a></li>
                            <li><a href="new-post">New Post</a></li>*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname : 'new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}  />
                <Route path="/new-post" component={NewPost}  />
               {/*<Route path="/new-post" render={() => <h1>Home</h1> } />
                <section className="Posts">
                    { posts }
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>*/}                
            </div>
        );
    }
}

export default Blog;