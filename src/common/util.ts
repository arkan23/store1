import {Models} from '../interface';

const requestBuilder = (method: string, requestData: any, headers: any) => {
    const sessionCode: string | undefined = sessionStorage.getItem('sessionCode')
    if (sessionCode && headers && typeof headers === 'object') {
        headers = {
            ...headers,
            session: sessionCode,
        }
    }
    switch (method) {
    case 'GET': {
        return {
            method: method,
            headers: {
                ...headers,
                'Cache-Control': 'no-store',
                'Pragma': 'no-cash',
                'Expires': '0',
            },
        }
    }
    default: {
        return {
            method: method,
            headers: headers,
            body: JSON.stringify(requestData), credentials: 'include' as RequestCredentials}
    }
    }
}

export const call = <T, TB>(
    url: string,
    success: (value: Models.IResponse<T>) => void,
    failure: (value: Models.IError) => void,
    converters: (data: any) => T,
    method = 'GET',
    mock: ((success: (response: Models.IResponse<T>) => void,
            failure: (response: Models.IError) => void) => void) | null,
    headers: any = {},
    requestData: TB | null,
    callbackTimeout?: () => any,
) => {
    // Use mock object
    if (mock) {
        mock(success, failure)
    }

    const requestDataToBuilder: any = requestData

    fetch(url, requestBuilder(method, requestDataToBuilder, headers))
        .then((response) => {
            switch (response.status) {
            case 200: {
                try {
                    const json = response.json()
                    return json
                } catch (error: any) {
                    throw {
                        type: 'JsonParserError',
                        code: '',
                        message: error.message ? error.message : error,
                        comment: '',
                    }
                }
            }
            default: {
                throw {
                    type: 'TechnicalError',
                    code: String(response.status),
                    message: '',
                    comment: '',
                }
            }
            }
        })
        .then((responseJson) => {
            try {
                if (responseJson) {
                    if (responseJson.error) {
                        throw responseJson.error
                    }
                    const body = responseJson.body || responseJson
                    const data = body // converter(body)
                    success(data)
                    return
                } else {
                    throw responseJson.error
                }
            } catch (error: any) {
                throw {
                    type: 'JsonFetchError',
                    code: error.code ? error.code.toString() : '',
                    message: error.message ? error.message : error,
                    comment: '',
                }
            }
        })
        .catch((error) => {
            failure(error)
        })
}

