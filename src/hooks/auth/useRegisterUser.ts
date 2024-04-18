import { registerUser } from '@/services/auth/registerUser'
import { useMutation } from '@tanstack/react-query'

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: registerUser,
  })
}
