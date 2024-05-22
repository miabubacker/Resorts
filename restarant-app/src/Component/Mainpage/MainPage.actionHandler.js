import { ACTION_TYPES } from './Mainpage.constant';
// import {
//   getRequestedFeatures,
// } from '../../Api';


 export const fetchRequestedFeatures = payload => (dispatch) => {
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: true });
       
};
export const menubar=()=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.MENUBAR });
   }

   export const popupmenu=payload=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.POPUPMENU,data:payload });
   }
   
   