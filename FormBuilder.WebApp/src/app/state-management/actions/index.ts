import { ErrorActions } from './error.action';

export {
    ErrorActions
};

export const STATE_ACTIONS = [
    { provide: ErrorActions, useClass: ErrorActions }
];