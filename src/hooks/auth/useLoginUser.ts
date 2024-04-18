import { loginUser } from '@/services/auth/loginUser'
import { useMutation } from '@tanstack/react-query'

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
  })
}
