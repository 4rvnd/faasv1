exports.get = function (req, res, next) {
    res.render('index', { title: 'Multiplayer Quiz Application' });
}

const user = require("../modules/user/user.handler")

exports.getMergedTable = async (req, res) => {
    let ret = await user.removeRoom(req)
    res.status(ret.code).send(ret.data)
}