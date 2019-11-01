export const SHOPPNG_DATA = 'SHOPPNG_DATA';
export const SHOPPNG_DATA_SUCCESS = 'SHOPPNG_DATA_SUCCESS';
export const SHOPPNG_DATA_FAILURE = 'SHOPPNG_DATA_FAILURE';


export function shoppingPage() {
    return {
        type: SHOPPNG_DATA
    }
}

export function shoppingPageSuccess(data) {
    return {
        type: SHOPPNG_DATA_SUCCESS,
        payload: data
    }
}

export function shoppingPageFailure(error) {
    return {
        type: SHOPPNG_DATA_FAILURE,
        payload: error
    }
}