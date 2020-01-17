import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = props => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader></AppHeader>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    
};

export default AppFrame;