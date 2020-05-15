import React from 'react';
import logo from './../assets/img/app_logo.jpg';

const MainLogo = ({ width }) => {
    return (
        <img src={logo} className="rounded-circle" style={{ width: width ? width : 200 }} alt="App Logo" />
    )
}

export default MainLogo;