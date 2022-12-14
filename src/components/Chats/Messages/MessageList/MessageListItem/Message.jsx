import { forwardRef, useEffect } from 'react'
import style from './message.module.scss'



const Message = forwardRef( ( props, ref ) => {
    const { el } = props;
    let time = new Date( el.TimestampServer ? el.TimestampServer : new Date() );
    const windowInnerWidth = window.innerWidth;
    useEffect( () => {
        if ( windowInnerWidth <= 600 ) {
            ref.current.scrollIntoView( true );
        } else {
            ref.current.scrollIntoView( { behavior: "smooth" } );
        }
    }, [ref, windowInnerWidth] )
    return (
        <div className={el.author === 'you' ? style.user : style.bot}>
            <div className={style.text}>
                {el.message}
                <div className={style.time}>{time.getHours()} : {( time.getMinutes() < 10 ? '0' : '' ) + time.getMinutes()}</div>
            </div>

        </div>
    )
} )

export default Message;