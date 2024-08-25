import {z} from "zod"
export const SignUpSchema = z.object({
    username: z.string().min(2).max(50),
    password: z
    .string()
    .min(8, {message: "Password Must Be 8 Characters long"}), 
    confirmPassword: z
    .string()
    .min(8, {message: "Password Must Be 8 Characters long"})
  
  
  }).refine ((data) => data.password === data.confirmPassword, { 
      message: "Password do not match",
      path: ["confirmPassword"] ,
  })