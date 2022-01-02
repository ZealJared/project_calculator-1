import jwt from "jsonwebtoken"

export default function verifytoken (req,res,next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}