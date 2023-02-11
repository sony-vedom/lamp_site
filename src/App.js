import React, {Suspense} from "react";
import './App.css';
import {useRoutes} from "react-router-dom";
import UsersContainer from "./components/Users/Users";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./components/Profile/Profile'));

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const App = connect(mapStateToProps, {initializeApp})((props) => {
    const routeResult = useRoutes([
        {
            path: "profile", element: <ProfileContainer/>,
            children: [{path: ":id", element: <ProfileContainer/>,}]
        },
        {path: "/dialogs/*", element: <DialogsContainer/>},
        {path: "/users", element: <UsersContainer/>,},
        {path: "/login", element: <Login/>},
        {path: "/", element: <Login/>},
        {path: "*", element: <div>404 Not Found</div>},
    ])
    // useEffect(() => {
    //   props.initializeApp()
    // }, [])
    //
    // if (!props.initialized) return <Preloader/>

    return <>
        {/*{(!props.initialized)*/}
        {/*    ? <Preloader/>*/}
        <div className="app-wrapper" role={'main'}>
            <HeaderContainer/>
            <Suspense fallback={<Preloader/>}>
                <div className="app-wrapper-content">
                    {routeResult}
                </div>
            </Suspense>
        </div>
    </>
})

export default App;