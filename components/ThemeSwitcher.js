// Copyright © 2021 Jonathan Dean Damiani
import React, { Fragment } from 'react';  
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';
import { isDarkThemeVar } from '../apollo';
import { Query } from './';
import { USER_CONFIG } from '../apollo/queries';
import cookieCutter from 'cookie-cutter';

const ThemeSwitcher = () => {

    const HandleThemeChange = () => {
        isDarkThemeVar(!isDarkThemeVar())
        cookieCutter.set('isDarkTheme', isDarkThemeVar());
    }

    return (
        <Fragment>
            <Query query={USER_CONFIG}>
                {({data: { isDarkTheme }}) => {
                    return (
                        <Switch
                            checked={isDarkTheme}
                            onChange={HandleThemeChange}
                        />
                    )
                }}
            </Query>
        </Fragment>
    )
}

ThemeSwitcher.propTypes = {

}

export default ThemeSwitcher
