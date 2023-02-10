import React, {useEffect} from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize)
    }, [])

    const onPagedChanged = (pageNumber) => {
        props.requestUsers(pageNumber)
    }

    return <>
        <div>
            <Paginator onPagedChanged={onPagedChanged} {...props}/>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {props.users.map(u => <User key={u.id} user={u} {...props}/>)}
            </div>
        </div>
    </>
}
let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    }),
)(Users);