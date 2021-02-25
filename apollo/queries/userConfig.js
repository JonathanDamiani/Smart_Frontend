// Copyright © 2021 Jonathan Dean Damiani
import { gql } from '@apollo/client';

export const USER_CONFIG = gql`
    query UserConfig {
        isDarkTheme @client
    }
`;

export default USER_CONFIG;
