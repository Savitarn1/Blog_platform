import { z } from 'zod';

export const schema = z.object({
  login: z
    .string({
      required_error: 'Login is required',
      invalid_type_error: 'Login must be a string',
    })
    .min(5, { message: 'Login must be at least 5 characters long' }),

  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(5, { message: 'Password must be at least 5 characters long' }),
});


export type FormData = z.infer<typeof schema>