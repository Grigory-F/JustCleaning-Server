import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, process.env.TOKEN_KEY, { expiresIn: '15h' })
}

class AuthController {
    async signIn(req, res) {
        /* try {
            const { login, password } = req.body
            console.log(login, password);
            if (!login && !password) {
                console.log(login, password)
                return res.status(400).send({ 'messageError': 'Пустое значение не приветствуется!' })
            }
            const candidate = await database.Users.findOne({ where: { login: login } })
            if (!candidate) {
                return res.status(400).json({ 'messageError': `Пользователь с таким логином не найден!` })
            }
            const validPassword = bcrypt.compareSync(password, candidate.password)
            if (!validPassword) {
                return res.status(400).json({ 'messageError': `Неверный пароль!` })
            }
            const token = generateAccessToken(candidate.id);
            return res.status(200).json({ token })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        } */
    }
    async signUp(req, res) {
        /* try {
            const { login, password } = req.body
            if (!login) {
                return res.status(400).send({ 'messageError': 'Пустое значение не приветствуется!' })
            }
            const candidate = await database.Users.findOne({ where: { login: login } })
            console.log(candidate)
            if (candidate) {
                return res.status(401).json({ 'messageError': `Пользователь с таким логином уже существует!` })
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            await database.Users.create({
                login: login,
                password: hashPassword,
            })
            return res.status(200).json({ "messageSucsess": "Пользователь успешно зарегистрирован!" })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }*/
    } 
}

export default new AuthController()