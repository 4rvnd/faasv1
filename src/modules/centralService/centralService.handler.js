
async function executeFunction(req) {
    const _b = req.body;
    try {
        let fun = _b.function;
        let response = eval('(' + fun + ')()');

        return {
            code: 200,
            data: {
                status: true,
                response: response
            }
        }
    } catch (err) {
        console.error(err);
        return {
            code: 400,
            data: {
                status: false,
                message: err.message
            }
        }
    }
};

async function executeFunctionX100(req) {
    const _b = req.body;
    try {
        let fun = _b.function;
        let response = eval('(' + fun + ')()');
        return {
            code: 200,
            data: {
                status: true,
                response: response
            }
        }
    } catch (err) {
        console.error(err);
        return {
            code: 400,
            data: {
                status: false,
                message: err.message
            }
        }
    }
};

exports.executeFunction = executeFunction;


