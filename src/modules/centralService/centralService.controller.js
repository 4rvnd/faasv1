const handler = require("./centralService.handler")
exports.executeFunction = async (req, res) => {
    let ret = await handler.executeFunction(req)
    res.status(ret.code).send(ret.data)
};