import React, {useEffect} from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    let messagesElements = props.dialogsPage.messages.map(el => <Message message={el.message} key={el.id}/>);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageForm  sendMessage={props.sendMessage}/>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})

export default compose(
    connect(mapStateToProps, {sendMessage}), // потом сюда
    withAuthRedirect // сначала компонента засовывается сюда
)(Dialogs);