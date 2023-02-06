import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    updateLikesCount
} from "../../redux/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    const {id} = useParams() // возвращает объект параметров маршрута, слева тупо деструктуризация
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            props.getProfile(id)
            props.getStatus(id)
        }
        if (!props.userId && !id) {
            props.history.push("/login") // я не понимаю что это
        }
        if (!id) {
            navigate(`/profile/${props.userId}`) // из профиля своего не работает кнопка назад, т к она возвращается на profile/ а потом опять соответственно на /profile/мойайди
        }
    }, [id])
    return (
        <main>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.userId === parseInt(id)}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <MyPosts/>
        </main>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile, updateLikesCount}),
    withAuthRedirect,
)(Profile);