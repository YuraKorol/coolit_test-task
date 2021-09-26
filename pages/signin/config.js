export const config = {
  title: 'Sign In'
}

export const schema = [
  {
    _id: 1,
    type: 'email',
    label: 'Email:',
    placeholder: 'Enter email',
    model: 'email'
  },
  {
    _id: 2,
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    model: 'password'
  }
]

export const data = {
  email: '',
  password: ''
}
