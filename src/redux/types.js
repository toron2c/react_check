
// ** PROFILE **
// change name profile
export const INITIALIZE_PROFILE = 'PROFILE::INITIALIZE_PROFILE';
export const TOGGLE_PROFILE_EDIT = 'PROFILE::TOGGLE_PROFILE_EDIT';
export const SET_NAME_PROFILE = 'PROFILE::SET_NAME_PROFILE';
export const SET_STATUS_PROFILE = 'PROFILE::SET_STATUS_PROFILE';
export const SET_ABOUT_PROFILE = 'PROFILE::SET_ABOUT_PROFILE';
export const SET_AVATAR_PROFILE_WITH_SAGA = 'PROFILE::SET_AVATAR_PROFILE_WITH_SAGA';
export const SET_AVATAR_TO_PROFILE = 'PROFILE::SET_AVATAR_TO_PROFILE';

export const SAVE_PROFILE_WITH_SAGA = 'PROFILE::SAVE_PROFILE_WITH_SAGA';
export const SET_ERROR_SAVE_PROFILE_DATA = 'PROFILE::SET_ERROR_SAVE_PROFILE_DATA';

// *** CHATS *** 
export const GET_CHATS_WITH_SAGA = 'CHATS::GET_CHATS_WITH_SAGA';
export const ADD_CHAT_TO_STORE = 'CHATS::ADD_CHATS_TO_STORE';
export const SET_SUBSCRIBE_ACTIVE = 'CHATS::SET_SUBSCRIBE_ACTIVE';
export const SET_SUBSCRIBE_ON_CHATS = 'CHATS::SET_SUBSCRIBE_ON_CHATS'
export const SET_CLOSED_SUBSCRIBE = 'CHATS::SET_CLOSED_SUBSCRIBE';
export const ADD_NEW_ELEMENT_TO_CHAT = 'CHATS::ADD_NEW_ELEMENT_TO_CHAT';
// create new chat
export const TOGGLE_NEW_CHAT = 'CHATS::TOGGLE_NEW_CHAT';
export const CHANGE_NAME_CHAT = 'CHATS::CHANGE_NAME_CHAT';
export const ADD_CHAT_WITH_SAGA = 'CHATS::ADD_CHAT_WITH_SAGA';
export const SET_ADDED_CHAT_ERROR = 'SET::ADDED_CHAT_ERROR';


// remove chat // unactive
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';


// ** MESSAGESS **
export const GET_MESSAGES_WITH_SAGA = 'MESSAGES::GET_MESSAGES_WITH_SAGA';
export const GET_OLD_MESSAGES_WITH_SAGA = 'MESSAGES::GET_OLD_MESSAGES_WITH_SAGA';
export const UPDATE_LAST_MESSAGES_WITH_SAGA = 'MESSAGES::UPDATE_LAST_MESSAGES_WITH_SAGA';
export const UPDATES_LAST_MESSAGES_IN_STATE = 'MESSAGES::UPDATES_LAST_MESSAGES_IN_STATE';
export const ADD_MESSAGES_TO_STORE = 'MESSAGES::ADD_MESSAGES_TO_STORE';
export const ADD_OLD_MESSAGES_TO_STORE = 'MESSAGES::ADD_OLD_MESSAGES_TO_STORE';
export const SEND_MESSAGE_WITH_SAGA = 'MESSAGES::SEND_MESSAGE_WITH_SAGA';
export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE';
export const INPUT_CHAT = 'MESSAGES::INPUT_CHAT';


export const SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA = 'MESSAGES::SUBSCRIBE_ON_NEW_MESSAGES_WITH_SAGA'
export const UNSUBSCRIBE_ON_NEW_MESSAGES = 'MESSAGES::UNSUBSCRIBE_ON_NEW_MESSAGES';
export const ADD_NEW_MESSAGE_TO_STORE = 'MESSAGES::ADD_NEW_MESSAGE_TO_STORE';


//=======================**Characters**
export const GET_INIT_LIST = 'CHARACTERS::GET_INIT_LIST';
export const SET_LIST = 'CHARACTERS::SET_LIST';
export const SET_ERROR = 'CHARACTERS::SET_ERROR';

//=======================**auth**
export const SET_EMAIL = 'AUTH::SET_EMAIL';
export const SET_PASSWORD = 'AUTH::SET_PASS';
export const REGISTRATION_USER = 'AUTH::REGISTRATION_USER';
export const AUTHORIZATION_USER = 'AUTH::AUTHORIZATION_USER';
export const SET_STATUS_AUTH = 'AUTH::SET_STATUS_AUTH';
export const SET_ERROR_AUTH = 'AUTH::SET_ERROR_AUTH';
export const CLEAR_FIELDS_AUTH = 'AUTH:CLEAR_FIELDS';

export const LOGOUT_AUTH_WITH_SAGA = 'AUTH::LOGOUT_AUTH_WITH_SAGA';
export const LOGOUT_AUTH = 'AUTH::LOGAUT';
export const DELETE_DATA_AFTER_LOGOUT = 'AUTH::DELETE_DATA_AFTER_LOGOUT';