export default function ({ store, redirect }) {
  if (store.state.login.user === null) {
    return redirect('http://localhost:3000/signin')
  }
}
