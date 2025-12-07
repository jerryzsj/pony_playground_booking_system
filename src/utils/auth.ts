export interface User {
  id: string
  name: string
  role: 'admin' | 'user'
  mobile?: string
}

export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('pony_user')
    return userStr ? JSON.parse(userStr) : null
  }
  return null
}

export const loginUser = (user: User) => {
  localStorage.setItem('pony_user', JSON.stringify(user))
  window.dispatchEvent(new Event('userLoggedIn'))
}

export const logoutUser = () => {
  localStorage.removeItem('pony_user')
}
