import { reactive } from 'vue'

export const auth = reactive({
  isAuthenticate: localStorage.getItem('auth') == 'true',
  credentials: {
    email: 'camattamichel@gmail.com',
    password: '123456',
  },
  login(request) {
    if (JSON.stringify(this.credentials) === JSON.stringify(request)) {
      localStorage.setItem('auth', true)
      this.isAuthenticate = true
      return true
    }
    return false
  },
  logout() {
    localStorage.removeItem('auth')
    this.isAuthenticate = false
  }
})