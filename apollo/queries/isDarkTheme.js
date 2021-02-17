// Copyright © 2021 Jonathan Dean Damiani
import { gql } from '@apollo/client';

export const GET_IS_DARK_THEME = gql`
    query getIsDarkTheme {
        isDarkTheme @client 
    }
`;

export default GET_IS_DARK_THEME;
