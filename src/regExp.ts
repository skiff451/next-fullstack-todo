export const regExp = {
  basic: /[a-zA-Z]{3}/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
}
