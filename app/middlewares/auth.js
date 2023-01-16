const auth = (req, res, next) => {
    const {username, password} = req.body;
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [user, pass] = credentials.split(':');
    if (user === username && pass === password) {
        next();
    } else {
        return res.status(401).send('Invalid Authentication Credentials');
    }
};

module.exports = auth;