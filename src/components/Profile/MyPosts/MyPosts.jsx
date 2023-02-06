import React from "react"
import styles from './MyPosts.module.css'
import Post from "./Post/Post"
import MyPostsForm from "./MyPostsForm";
import {connect} from "react-redux";
import {addPost, updateLikesCount} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
})

const MyPosts = connect(mapStateToProps, {addPost, updateLikesCount})(React.memo(
    (props) => {
    const postElements = (props.posts)
        .map(post => <Post key={post.id} id={post.id} updateLikesCount={updateLikesCount}
                           message={post.message} count={post.likesCount}/>)

    return <div className={styles.postsBlock}>
        <h2>My Posts</h2>
        <MyPostsForm {...props}/>
        <section className={styles.posts}>
            {postElements}
        </section>
    </div>
}))

export default MyPosts;