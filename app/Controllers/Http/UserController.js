'use strict'

const Token = use('App/Models/Token')
const User = use('App/Models/User')

class UserController {
  async signUp({ request, auth }) {
    const data = request.post()
    data.profile_picture = `https://ui-avatars.com/api/?name=${data.email}`

    const user = await User.create(data)
    user.token = await auth.generate(user)

    const token = new Token()
    token.user_id = user.id
    token.type = user.token.type
    token.token = user.token.token
    await token.save()

    return user
  }

  async signIn({ request, auth }) {
    const { email, password } = await request.post()

    return await auth.attempt(email, password)
  }
}

module.exports = UserController
