import React from "react"
import styles from './MyPosts.module.css'
import Post from "./Post/Post"
import {Formik, Form} from "formik"
import * as Yup from 'yup'
import {MyButton, MyTextarea} from "../../common/FormControls/FormControls";

const MyPosts = React.memo((props) => {
    const postElements = (props.posts)
        .map(post => <Post key={post.id} message={post.message} count={post.likesCount}/>)

    const schema = Yup.object({
        newPostText: Yup.string().max(30, 'Must be 30 characters or less')
            .min(5, 'Must be 5 characters or more')
            .required('Required')
    })

    return <div className={styles.postsBlock}>
        <h2>My Posts</h2>
        <Formik
            initialValues={{newPostText: ""}}
            onSubmit={(postData, actions) => {
                setTimeout(() => {
                    props.addPost(postData.newPostText);
                    actions.resetForm()
                }, 0)
            }}
            validationSchema={schema}
        >
            {formik => (<Form className={styles.newPost}>
                <MyTextarea name="newPostText" errorComponent={"div"} placeholder="Type your post"/>
                <MyButton buttonStyle={styles.button} name="newPostText" buttonText={"Add post"} {...props}></MyButton>
            </Form>)}
        </Formik>

        <section className={styles.posts}>
            {postElements}
        </section>
    </div>
})

export default MyPosts;