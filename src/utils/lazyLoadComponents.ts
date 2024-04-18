import React from 'react'

const Home = React.lazy(() => import('../pages/home/Home'))
const NotFound = React.lazy(() => import('../pages/404/NotFound'))
const Register = React.lazy(() => import('../pages/auth/Register'))
const ForgotPassword = React.lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = React.lazy(() => import('../pages/auth/ResetPassword'))
const LoginWithCode = React.lazy(() => import('../pages/auth/LoginWithCode'))
const Verify = React.lazy(() => import('../pages/auth/Verify'))
const RequestLeave = React.lazy(() => import('../pages/dashboard/RequestLeave'))
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'))
const Profile = React.lazy(() => import('../pages/dashboard/Profile'))

export {
  Home,
  NotFound,
  Register,
  ForgotPassword,
  ResetPassword,
  LoginWithCode,
  Verify,
  RequestLeave,
  Dashboard,
  Profile,
}
