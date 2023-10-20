const constants = require('../constants')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    // switch (statusCode) {
    //     case constants.VALIDATION_ERROR:
    //         res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack })
    //         break;
    //     case constants.UNAUTHORIZED:
    //         res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack })
    //         break;
    //     case constants.FORBIDDEN:
    //         res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
    //         break;
    //     case constants.NOT_FOUND:
    //         res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
    //         break;
    //     case constants.SERVER_ERROR:
    //         res.json({ title: "Server error", message: err.message, stackTrace: err.stack })
    //         break;
    //     default:
    //         console.log('No Error, All good!');
    //         break;
    // }
    switch (statusCode) {
        case 400:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack })
            break;
        case 401:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack })
            break;
        case 403:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
            break;
        case 404:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
            break;
        case 500:
            res.json({ title: "Server error", message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log('No Error, All good!');
            break;
    }
};

module.exports = errorHandler;