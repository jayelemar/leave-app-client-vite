// import axios from 'axios'
// import { BACKEND_URL } from '@/utils/secrets'

// export const logoutUser = async () => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/api/users/logout`)
//     return response.data
//   } catch (error) {
//     const message = axios.isAxiosError(error)
//       ? error.response?.data?.message || error.message || 'An expected error occurred during registration.'
//       : 'An unexpected error occurred'
//     console.error('Server Response:', message)
//   }
// }
