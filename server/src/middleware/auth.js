const jwt = require('jsonwebtoken');
// const config = require('config');

// module.exports = (req, res, next) => {
//     //get token from header
//     const token = req.header('x-auth-token');
//     //check if not token
//     if (!token) {
//         return res.status(401).json({ msg: 'No token, authorization denied' })
//     }
//     //verify token
//     try {
//         const decoded = jwt.verify(token, 'mysecrettoken');
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json({ msg: 'Token is not vaild' });
//     }

// }

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}