import { loginWithCode } from '@/services/auth/loginWithCode'
import { useMutation } from '@tanstack/react-query'

export const useLoginWithCode = () => {
  return useMutation({
    mutationKey: ['loginWithCode'],
    mutationFn: loginWithCode,
  })
}
