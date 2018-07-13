let Auth = {
  /**
   * Check if user authenticated in app
   * @return {Bool}
   */
  isAuthenticated () {
    const user = window.localStorage.getItem('user')
    return user !== null
  },

  /**
   * Get headers required for api authentication
   * @return {Object}
   */
  getJWTAuthHeaders () {
    let token = window.localStorage.getItem('token')
    return {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }
}

export default Auth
