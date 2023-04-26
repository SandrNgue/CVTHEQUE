import Route from '@ioc:Adonis/Core/Route'

Route.get('/signup', 'AuthController.signupShow').as('signupShow')
Route.post('/signup', 'AuthController.signup').as('signup')
Route.get('/', ({view}) => {
    return view.render('welcome')
})

Route.delete('/signout', 'AuthController.signout').as('signout')

Route.get('/signin', 'AuthController.signinShow').as('signinShow')
Route.post('/signin', 'AuthController.signin').as('signin')
