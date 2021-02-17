// Copyright © 2021 Jonathan Dean Damiani
import React, { Fragment } from 'react';  
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';
import { isDarkThemeVar } from '../apollo';
import { Query } from './';
import { GET_IS_DARK_THEME } from '../apollo/queries';

const ThemeSwitcher = props => {

    const HandleThemeChange = () => {
        isDarkThemeVar(!isDarkThemeVar())
    }

    return (
        <Fragment>
            <Query query={GET_IS_DARK_THEME} id="null">
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
