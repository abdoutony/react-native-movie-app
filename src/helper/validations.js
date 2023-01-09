import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
export const registerSchema = yup.object({
    name:yup.string().required(),
    email:yup.string().email().required(),
    password: yup.string().min(8).matches(/[a-zA-Z]/, 'Password can only contain Latin letters.').required(),
   passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
})

export const profileInfoSchema = yup.object({
  name:yup.string().required(),
  email:yup.string().email().required(),
  password: yup.string().min(8).matches(/[a-zA-Z]/, 'Password can only contain Latin letters.').required(),
})