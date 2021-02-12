const validator = require('validator')
class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

describe('Email Validator', () => {
  test('Should return true id validator returns true', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false id validator returns false', () => {
    const sut = new EmailValidator()
    validator.isEmailValid = false
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
})
