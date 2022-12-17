
// ** PROFILE **
// change name profile
export const INITIALIZE_PROFILE = 'PROFILE::INITIALIZE_PROFILE';
export const TOGGLE_PROFILE_EDIT = 'PROFILE::TOGGLE_PROFILE_EDIT';
export const SET_NAME_PROFILE = 'PROFILE::SET_NAME_PROFILE';
export const SET_STATUS_PROFILE = 'PROFILE::SET_STATUS_PROFILE';
export const SET_ABOUT_PROFILE = 'PROFILE::SET_ABOUT_PROFILE';

export const SAVE_PROFILE_WITH_SAGA = 'PROFILE::SAVE_PROFILE_WITH_SAGA';

// *** CHATS *** 
export const GET_CHATS_WITH_SAGA = 'CHATS::GET_CHATS_WITH_SAGA';
export const ADD_CHAT_TO_STORE = 'CHATS::ADD_CHATS_TO_STORE';
export const SET_SUBSCRIBE_ACTIVE = 'CHATS::SET_SUBSCRIBE_ACTIVE';
export const ADD_NEW_ELEMENT_TO_CHAT = 'CHATS::ADD_NEW_ELEMENT_TO_CHAT';
// create new chat
export const TOGGLE_NEW_CHAT = 'CHATS::TOGGLE_NEW_CHAT';
export const CHANGE_NAME_CHAT = 'CHATS::CHANGE_NAME_CHAT';
export const ADD_CHAT_WITH_SAGA = 'ADD_CHAT_WITH_SAGA';


// remove chat
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';


// ** MESSAGESS **

// messages
export const INPUT_CHAT = 'MESSAGES::INPUT_CHAT';
export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE'
export const SEND_MESSAGE_WITH_SAGA = 'MESSAGES::SEND_MESSAGE_WITH_SAGA';


//  **Characters**
export const GET_INIT_LIST = 'CHARACTERS::GET_INIT_LIST';
export const SET_LIST = 'CHARACTERS::SET_LIST';
export const SET_ERROR = 'CHARACTERS::SET_ERROR';

// **auth**
export const SET_EMAIL = 'AUTH::SET_EMAIL';
export const SET_PASSWORD = 'AUTH::SET_PASS';
export const REGISTRATION_USER = 'AUTH::REGISTRATION_USER';
export const AUTHORIZATION_USER = 'AUTH::AUTHORIZATION_USER';
export const SET_STATUS_AUTH = 'AUTH::SET_STATUS_AUTH';
export const SET_ERROR_AUTH = 'AUTH::SET_ERROR_AUTH';
export const CLEAR_FIELDS_AUTH = 'AUTH:CLEAR_FIELDS'

export const LOGOUT_AUTH_WITH_SAGA = 'AUTH::LOGOUT_AUTH_WITH_SAGA'
export const LOGOUT_AUTH = 'AUTH::LOGAUT'