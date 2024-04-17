import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string({
      required_error: 'Please enter your password',
    })
    .min(1, 'Please enter password.'),
});
