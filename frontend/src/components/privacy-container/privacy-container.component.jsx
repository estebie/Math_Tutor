import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectCurrentUser} from '../../redux/user/user.selector';

import IsAuthenticated from '../is-authenticated/is-authenticated.component';

const mapStateToProps =  createStructuredSelector({
    user: selectCurrentUser
});

const PrivacyContainer = compose(
    connect(mapStateToProps),
    IsAuthenticated
);

export default PrivacyContainer;