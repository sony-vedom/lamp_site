import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

// обертка над компонентами

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return <>
                {
                    (this.props.isAuth)
                        ? <Component {...this.props}/>
                        : <Navigate to="/login"/> // синтаксис хука useNavigate для классовых компонент, просто перенаправляет
                }
            </>
        }
    }

    // const RedirectComponent = (props) => {
    //     const navigate = useNavigate()
    //     useEffect(() => {
    //         if (!props.isAuth) {
    //             navigate("/login")
    //         }
    //     }, [props.isAuth])
    //     return <Component {...props}/>
    // }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}