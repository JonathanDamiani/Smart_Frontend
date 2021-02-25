// Copyright © 2021 Jonathan Dean Damiani
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser ($email: String!, $password: String!) {
        loginUser (email: $email, password: $password) {
            response {
                code
                message
                success
            }
            user {
                id
                username
                email
            }
            token
        }
    }
`;

export default LOGIN_USER;
