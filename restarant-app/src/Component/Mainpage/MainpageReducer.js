import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "./Mainpage.constant";
import { produce } from "immer";
import {companyData} from '../../Data/ProductDetails'
const initialState = {
  DashboardProductData: [],
  loading: false,
  hamburger: false,
  popupMenu:'',
  popmenuData:companyData

};

export default handleActions(
  {
    [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = true;
      }),

    [ACTION_TYPES.SET_REQUESTED_FEATURES]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.loading = false;
       data.products.forEach((data)=>{data.count=1})
        draft.DashboardProductData = data.products || [];
      }),
      [ACTION_TYPES.MENUBAR]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.hamburger = !state.hamburger;
      }),
      [ACTION_TYPES.POPUPMENU]: (state, { data } = {}) =>
      produce(state, (draft) => {
        draft.popupMenu =data ;
      }),
  },
  initialState
);
