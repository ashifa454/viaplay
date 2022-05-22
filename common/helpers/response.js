const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ResponseHandler = {
    send: (res, payload = {}) => {
        return res.status(payload.status || StatusCodes.OK).json({
            status: payload.status || StatusCodes.OK,
            data: payload.data || ReasonPhrases.OK
        });
    },
    error: (res, payload = {}) => {
        let parsePayload = null;
        try {
            parsePayload = JSON.parse(payload.data);
        } finally {
            return res.status((parsePayload || {}).status || payload.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: (parsePayload || {}).status || payload.status || StatusCodes.INTERNAL_SERVER_ERROR,
                data: (parsePayload || {}).message || payload.data || ReasonPhrases.INTERNAL_SERVER_ERROR
            })
        }
    }
}
module.exports = {
    ResponseHandler
}