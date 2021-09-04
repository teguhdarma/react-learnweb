import { GET_USER_DETAIL } from "../actions/userAction";
import { GET_USERS_LIST } from "../actions/userAction";
import { POST_USER_CREATE} from "../actions/userAction";

let initialState = {
  getUsersList: false,
  ErrorUsersList: false,
  getUserDetail: false,
  ErrorUserDetail: false,
  getResponeDataUser:false,
  errorResponeDataUser:false,

  title: "academy harry poter  ",
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        ErrorUsersList: action.payload.data,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        ErrorUserDetail: action.payload.data,
      };
      
      case POST_USER_CREATE:
      return {
        ...state,
        getResponeDataUser: action.payload.data,
        errorResponeDataUser: action.payload.data,
      };
      

    default:
      return state;
  }
};

export default users;
