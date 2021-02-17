// Copyright © 2021 Jonathan Dean Damiani
import { InMemoryCache } from '@apollo/client';
import { isDarkThemeVar } from './';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isDarkTheme: {
                    read() {
                        return isDarkThemeVar();
                    }
                }
            }
        }
    }
});
