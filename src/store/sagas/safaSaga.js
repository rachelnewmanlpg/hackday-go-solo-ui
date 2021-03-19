import React from 'react';
import Router from 'next/router';
import { HttpStatus } from '../../enums/HttpStatus';

export function* runSaga(args, func) {
    try {
        yield* func(args);
    } catch (error) {
        console.warn('ERROR', error);
        // The request was made and the server responded with a status code
        const { status = HttpStatus.TEAPOT, data = {} } = error;
        const { errorCode = '', errorMessage = '' } = data;

        switch (status) {
            case HttpStatus.UNAUTHORIZED:
                break;
            case HttpStatus.FORBIDDEN:
                break;
            case HttpStatus.INTERNAL_SERVER_ERROR:
                break;
            case HttpStatus.BAD_REQUEST:
                break;
            case HttpStatus.TIMEOUT:
                break;
            case HttpStatus.NOTFOUND:
                break;
            default:
        }
    }
}

export default function safeSaga(func) {
    return function* runSagas(args) {
        yield runSaga(args, func);
    };
}
