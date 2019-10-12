import config from '../config';

const { baseURL } = config
export const fetchData = async () => {
    try {
        const response = await fetch("localhost:3000");
        const data = await response.json()
        return data;
    } catch (err) {
        return err
    }
}


const headers = (additionalHeaders = {}) => {
    const {
      accessToken,
      tokenId,
    } = authentication.getAuthDetails();
    const headersObj = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${accessToken}`,
      'Authorization1': `${tokenId}`,
      'TrackingId': `${AppTracking.id}`,
      ...additionalHeaders,
    } as any;

/**
* @description function to handle the time out error
* @param  {Promise} promise - promise
* @param  {number} timeout - millseconds
* @param  {string} error - errorcode
* @return
*/
function timeoutPromise(promise, timeout, error) {
    return new Promise((resolve, reject) => {
      const clearTimeOut = setTimeout(() => {
        const err = { status: error };
        reject(err);
      }, timeout);
      promise.then((data) => {
        clearTimeout(clearTimeOut);
        resolve(data);
      }, (data) => {
        clearTimeout(clearTimeOut);
        reject(data);
      });
    });
  }
function getUrlWithAuthDetails(url) {
    let urlWithAuthDetails = url.indexOf('?') > -1 ? `${url}&` : `${url}?`;
    urlWithAuthDetails = `${urlWithAuthDetails}`;
    return urlWithAuthDetails;
  }

/** @description calls a native fetch method and returns a promise Object*/
export const fetchURL = (url, urlPrefix = baseURL, additionalHeaders={}) => {
    const urlWithAuthDetails = getUrlWithAuthDetails(url);
    return timeoutPromise(fetch(
      urlPrefix.concat(urlWithAuthDetails),
      Object.assign({}, {
        headers: headers(additionalHeaders),
      }),
    ), TIMEOUT, 504);
  };

  
/** @description Sending a GET request to JSON API.
 * doGet method resolves or rejects the promise that is obtained
 */  
export const doGet = (url, urlPrefix = baseURL, additionalHeaders = {}) => {
    const fetchData = fetchURL(url, urlPrefix, additionalHeaders).then(statusCheck);
    return fetchData;
};


fetch("https://api.example.com/items")
.then(res => res.json())
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      items: result.items
    });
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  }
)