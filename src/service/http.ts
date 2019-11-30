const enum Method {
    Get = 'GET'
}

class Http {
    private request = (url: string, method: Method) => {
        const options = {
            method
        };
        return fetch(url, options);
    }

    public get = (url: string) => {
        return this.request(url, Method.Get);
    }
}

export const http = new Http();
