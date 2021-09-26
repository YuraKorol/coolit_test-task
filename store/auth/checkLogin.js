const checkLogin = (array, payload) => {
  const check = array.users.some(i => {
    const checkEmail = i.email === payload.email
    const checkPassword = i.password === payload.password
    if (!checkEmail) {
      array.error.message = 'This email is not registered'
      array.error.append = true
      return ''
    }
    if (!checkPassword) {
      array.error.message = 'Not the correct password'
      array.error.append = true
      return ''
    }

    return checkEmail && checkPassword
  })
  return check
}

export default checkLogin
