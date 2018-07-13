import Auth from '../utils/auth'

export function FreeAccessGuard (to, from, next) {
  if (Auth.isAuthenticated()) {
    next()
  } else {
    next('/dashboard')
  }
}

export function RestrictedAccessGuard (to, from, next) {
  if (Auth.isAuthenticated()) {
    next()
  } else {
    next('/login')
  }
}
