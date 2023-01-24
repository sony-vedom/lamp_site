import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

const Users = ({users, ...props}) => {
    return (
        <div>
            <Paginator {...props}/>
                {props.isFetching ? <Preloader/> : null}
            <div>
            {
                users.map(u => <User key={u.id} user={u} {...props}/>)
            }
            </div>
        </div>
    )
}

export default Users;