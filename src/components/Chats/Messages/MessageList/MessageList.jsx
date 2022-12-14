import { useDispatch, useSelector } from "react-redux"
import Message from "./MessageListItem/Message"
import styles from '../Messages.module.scss'
import React, { useEffect, useRef } from "react"
import { getMessageList } from "../../../../redux/reducers/messagesReducer/selectorMessages"
import { subscribeOnNewMessages, unsubscribeOnNewMessages } from "../../../../redux/actions"

/**
 * create new component with old messages, which not dependencies  with new and current messages, which have state old messages
 * 
 */


export default function MessageList( { uid } ) {
    const messages = useSelector( getMessageList( uid ) );
    const dispatch = useDispatch();
    const refOnLastElement = useRef();
    let startDate;
    useEffect( () => {
        dispatch( subscribeOnNewMessages( uid ) );
        return () => {
            dispatch( unsubscribeOnNewMessages( uid ) )
        }
    }, [uid, dispatch] )
    const list = messages.map( ( el ) => {
        let time = new Date( el.TimestampServer ? el.TimestampServer : new Date() );
        if ( ( startDate === undefined ) || ( startDate.getDate() !== time.getDate() ) ) {
            startDate = time;
            let tmpDate = startDate.toLocaleString( 'default', { month: 'long' } )
            return <React.Fragment key={el.idMessage}><div key={`${el.idMessage}_date`} className={styles.date}>{tmpDate} {startDate.getDate()}</div><MessageMemo ref={refOnLastElement} el={el} key={`${el.idMessage}_m`} /></React.Fragment>
        }
        return <MessageMemo key={`${el.idMessage}_message`} ref={refOnLastElement} el={el} />
    } )
    return (
        <>
            {list && list}
            <div ref={refOnLastElement} />
        </>
    )
}

const MessageMemo = React.memo( Message );