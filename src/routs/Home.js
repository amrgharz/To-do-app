import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Pokeball from "../routs/pokeball.png"
import {connect} from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="pokeball"></img>
                        <div className="card-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })

        ) : (
            <div className="center"> There are no posts :( </div>
        )
        return(
            <div className="container">
                <h1 className="center">This the home page</h1>
                <p className="center">This is just to demonstrate the react router</p>
                <p>down below i am using axios and componentDidMount to usi api end point to render data:)</p>
                <div>{postList}</div>
                
            </div>
        )
    }
 
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home); 