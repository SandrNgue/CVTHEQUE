import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController{
    context: HttpContextContract
    public async signupShow( context : HttpContextContract){
        return context.view.render('auth/signup')
    }

    public async signup({ request, response, auth}: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        const user= await User.create({
            email,
            password,
        })
        await auth.use('web').login(user)
        return response.redirect('/')
    }

    public async signout({auth, response}: HttpContextContract) {
           await auth.logout()
            return response.redirect()
    } 

    public async signinShow( context : HttpContextContract){
        return context.view.render('auth/signin')
    }

    public async signin({ request, response, auth}: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        await auth.use('web').attempt(email, password)
        return response.redirect('/')
    }

}