import { z } from 'zod';
export const schema = z.object({
  login: z.string({required_error:"Login is required"}),
  password: z.string().min(5, 'Password must be at least 8 characters long'),
})

export type FormData = z.infer<typeof schema>