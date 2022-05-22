const axios = require("axios").default;
const RemoteHelpers = {
    request: async (method, path, body = null, headers = null,) => {
        const response = await axios.request({
            method,
            headers: headers, // we can add app level headers here like auth tokem but it is not required here
            url: path,
            body,
        }).catch(err => {
            throw new Error(JSON.stringify({
                code: err.code,
                message: `Remote: ${err.message}`,
                status: err.response.status
            }));
        });
        return response.data;
    }
}
module.exports = RemoteHelpers;