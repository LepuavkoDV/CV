export function getValidationClass ($v, fieldname) {
  const field = $v[fieldname]
  if (field) {
    return {
      'invalid': field.$invalid && field.$dirty
    }
  }
}
