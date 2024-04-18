import z from 'zod'

export const AccessCodeSchema = z.object({
  loginCode: z
    .string({
      required_error: 'Please 6 digit access code',
    })
    .min(1, 'Please provide access code.'),
})
