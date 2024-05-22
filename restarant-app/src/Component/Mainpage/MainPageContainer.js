import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as TicketsActions from './MainPage.actionHandler';
import _get from 'lodash/get';
import MainPage from './MainPage';
import { compose } from 'recompose';



const ticketDetailsActions = defaultMemoize(dispatch => bindActionCreators({ ...TicketsActions }, dispatch));

const mapDispatchToProps = dispatch => ({
    MainPageActions: ticketDetailsActions(dispatch),
});

const mapStateToProps = ({
    MainpageReducer,
}) => ({
    DashboardProductData: _get(MainpageReducer, 'DashboardProductData'),
    loading: _get(MainpageReducer, 'loading'),
    hamburger:_get(MainpageReducer, 'hamburger'),
    popupMenu:_get(MainpageReducer, 'popupMenu'),
    popmenuData:_get(MainpageReducer, 'popmenuData'),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(MainPage);
