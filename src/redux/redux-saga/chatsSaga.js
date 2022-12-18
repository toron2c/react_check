import { query } from "firebase/database";
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc, where } from "firebase/firestore";
import { eventChannel } from "redux-saga";
import { call, delay, put, select, take, takeLatest } from "redux-saga/effects";
import { auth, fs } from "../../services/firebase";
import { addChatToStore, addNewElementChat, setSubscribeOnNewChats } from "../actions";
import { ADD_CHAT_WITH_SAGA, GET_CHATS_WITH_SAGA, SET_CLOSED_SUBSCRIBE, SET_SUBSCRIBE_ACTIVE } from "../types";




/// *** get chats logic ***
/**
 * function worker get chat's list
 */
function* getChatsWorker() {
    try {
        yield delay( 1000 );
        let dialogs = [];
        console.log( 111 );
        // ref to user doc 
        const docRef = doc( fs, 'users', auth.currentUser.uid );
        // get doc current user
        const profile = yield getDoc( docRef );
        if ( profile.exists() ) {
            dialogs = profile.data().dialogs;
        }
        let arrayDialogs = [];
        for ( let dialog of dialogs ) {
            let correctDialog = {
                nameDialog: yield getNameForChatWorker( dialog.uidAnotherUser ),
                chatId: dialog.chatId
            }
            arrayDialogs.push( correctDialog );
        }
        if ( arrayDialogs.length > 0 ) {
            yield put( addChatToStore( arrayDialogs ) );
        }
        console.log( `po4emu?` )
        yield put( setSubscribeOnNewChats() );
        yield call( subscribeOnNewChatsWorker );
    } catch ( error ) {
        console.error( `error load chat's. please contact to administration (@toron2c)\n message: ${error.message}` );
    }
}
/**
 * function worker get username chat
 * @param {*} uid user uid
 * @returns returns name user,or if user without name, returns email
 */
function* getNameForChatWorker( uid ) {
    try {
        const userRef = doc( fs, 'users', uid );
        let name = '';
        if ( uid === auth.currentUser.uid ) {
            name = 'Saved messages';
        } else {
            let profile = yield getDoc( userRef );
            if ( profile.exists() ) {
                let user = profile.data()
                name = user.displayName ? user.displayName : user.email
            }
        }
        return name;
    } catch ( error ) {
        console.error( `error load chat's. please contact to administration (@toron2c)\n message: ${error.message}` );
    }
}

// *** add chat logic ***
/**
 * function worker add chat new chat
 */
function* addChatWorker() {
    try {
        yield delay( 500 );
        let email = yield select( state => state.chats.nameNewChat )
        let user = yield checkUserWorker( email );
        if ( user ) {
            let isTheredialog = yield checkDialogsWorker( user );
            if ( !isTheredialog ) {
                yield addDialogWorker( user );
            } else {
                throw new Error( 'sorry, but there is already a dialog with the current user' )
            }
        } else {
            throw new Error( `sorry, but user with this email ${email} not found` )
        }
    } catch ( error ) {
        console.error( `error load data. please contact to administration (@toron2c)\n message: ${error.message}` );
    }
}
/**
 * function worker, search the user
 * @param {*} userEmail - user email
 * @returns boolean: if user finded, return uid, otherwise null
 */
function* checkUserWorker( userEmail ) {
    try {
        let user = null;
        const usersRef = collection( fs, 'users' );
        // query for find doc user for add new chat 
        const q = yield query( usersRef, where( 'email', '==', userEmail ) );
        // get result
        const profile = yield getDocs( q );
        // find dialog with curr name
        profile.forEach( ( doc ) => {
            user = doc.data().uid
        } );
        return user;
    } catch ( e ) {
        console.error( `error load data. please contact to administration (@toron2c)\n message: ${e.message}` );
    }
}
/**
 * function worker check avaible dialog with entered email
 * @param {*} uid user uid
 * @returns  boolean: if dialog finded, return true, otherwise false
 */
function* checkDialogsWorker( uid ) {
    try {
        let res = false;
        let dialogsList = [];
        // create ref on doc current user
        const userRef = doc( fs, 'users', auth.currentUser.uid );
        // get doc current user 
        const profile = yield getDoc( userRef );
        if ( profile.exists() ) {
            dialogsList = profile.data().dialogs;
        }
        // check can added dialog
        for ( let dialog of dialogsList ) {
            if ( dialog.uidAnotherUser === uid ) {
                res = true;
            }
        }
        return res;
    } catch ( e ) {
        console.error( `error load data. please contact to administration (@toron2c)\n message: ${e.message}` );
    }
}

/**
 * function worker add doc to dialogs and add doc to chats
 */
function* addDialogWorker( uidAnotherUser ) {
    try {
        let user = null;
        // create ref on doc another user
        const userRef = doc( fs, 'users', uidAnotherUser );
        //get doc another user
        user = yield getDoc( userRef );
        user = user.data();
        // create new doc for messages data
        const refMessages = yield addDoc( collection( fs, 'messages' ), {
            messages: [],
        } );
        // update currentUser add new dialog
        yield updateDoc( doc( fs, 'users', auth.currentUser.uid ), {
            dialogs: arrayUnion( { chatId: refMessages.id, emailAnotherUser: user.email, uidAnotherUser: user.uid, anotherName: user.displayName } )
        }, )
        // update anotherUser, add new dialog
        yield updateDoc( doc( fs, 'users', user.uid ), {
            dialogs: arrayUnion( { chatId: refMessages.id, emailAnotherUser: auth.currentUser.email, uidAnotherUser: auth.currentUser.uid, anotherName: auth.currentUser.displayName } )
        }, )
    } catch ( error ) {
        console.error( `error add dialog. please contact to administration (@toron2c)\n message: ${error.message}` );
    }
}

function* subscribeOnNewChatsWorker() {
    try {
        yield delay( 1000 );
        console.log( `open connect` )
        const element = yield call( getNewChats );
        while ( yield select( state => state.chats.subscribeActived ) ) {
            if ( yield take( SET_CLOSED_SUBSCRIBE ) ) {
                element.close();
            }
            if ( yield select( state => state.chats.subscribeActived ) ) {
                const elemChat = yield take( element )
                let correctElement = {
                    nameDialog: elemChat.anotherName ? elemChat.anotherName : elemChat.emailAnotherUser,
                    chatId: elemChat.chatId
                }
                if ( correctElement ) {
                    yield put( addNewElementChat( correctElement ) )
                }
            } else {
                element.close();
            }
        }
        // element.close();
        console.log( 'closed connect' );
    } catch ( error ) {
        console.log( error );
    }
}

function getNewChats() {
    return eventChannel( emitter => {
        const subscribeOnChats = onSnapshot( doc( fs, 'users', auth.currentUser.uid ), ( doc ) => {
            let element;
            for ( let dialog of doc.data().dialogs ) {
                element = dialog;
            }
            if ( element ) {
                emitter( element );
            }
        } )
        // return unsubscribe function
        return () => {
            subscribeOnChats();
        }
    }
    )
}

export function* getChatsWatcher() {
    yield takeLatest( GET_CHATS_WITH_SAGA, getChatsWorker )
}
export function* createNewChatWatcher() {
    yield takeLatest( ADD_CHAT_WITH_SAGA, addChatWorker )
}

export function* subscibeOnNewChatsWatcher() {
    yield takeLatest( SET_SUBSCRIBE_ACTIVE, subscribeOnNewChatsWorker )
}