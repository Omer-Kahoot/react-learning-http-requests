import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios'
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'; //NavLink instead of link is similar in functionailty but also provides us with the option to give some styling on active links etc.
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state = {
        auth : false
    };

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
                            {/* When  a styling is dependent on a root url and not using exact, may cause problems since the
                            root url nav link will also satisfy for the sub urls as well. So a styling for only the sub url
                            the root url but removing exact may cause issues and is a tricky thing to do. Normally sub urls
                            will always be their exact domains. */}
                            <li><NavLink 
                                to="/posts" 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                exact>Posts</NavLink></li>
                            {/*By default path name over here points to the absolute path:
                            meaning even if we are on the page i.e. example.com/posts when the below link is clicked
                            it would take to example.com/new-post instead of example.com/posts/new-post. In order
                            to make it an relative kind of path, we will have to apped the props property url match
                            inside this path name like this.props.match.url + /new-post*/}
                            <li><NavLink to={{
                                pathname : '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch> {/* With switch  it means that any of the following routes, the first route that satisfies the condition return that, and do not render the remaining ones, other wise
                by default react router dom will always render all routes that satisfy the condition irrespective of order or not.
                
                Also currently the routes are being defined over here. What we can do is to make those routes inside of a child component instead doing it directly ove rehre.*/}
                    { this.state.auth ? <Route path="/new-post" component={NewPost}  /> : null }
                    <Route path="/posts" component={Posts}  />
                    {/* this is another react router dom component. which can be used for redirection from one url to another.
                      you can also specify that route separately and do this but its better to use the above component
                      Also conditional redirection can also be provided to be done.  */}
                    <Redirect from="/" to="/posts" /> 
                    {/*<Route path="/" component={Posts}  /> */ }
                    {/*<Rout e path="/:id" component={Full Post}  /> adding inside the child component instead.*/}
                </Switch>
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