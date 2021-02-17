// Copyright © 2021 Jonathan Dean Damiani
import { makeVar } from '@apollo/client';

// Reactive Vars
export const isDarkThemeVar = makeVar(false);

export { default as withApollo } from './apollo';
