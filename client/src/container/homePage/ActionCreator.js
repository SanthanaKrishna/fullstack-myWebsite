export const HOMEPAGE_CONTENT = "HOMEPAGE_CONTENT";
export const HOMEPAGE_CONTENT_SUCCESS = "HOMEPAGE_CONTENT_SUCCESS";
export const HOMEPAGE_CONTENT_FAILURE = "HOMEPAGE_CONTENT_FAILURE";


export function homePage() {
    return {
        type: HOMEPAGE_CONTENT,
    }
}

export function homePageSuccess(data) {
    return {
        type: HOMEPAGE_CONTENT_SUCCESS,
        payload: data
    }
}

export function homePageFailure(error) {
    return {
        type: HOMEPAGE_CONTENT_FAILURE,
        error
    }
}
