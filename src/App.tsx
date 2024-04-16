import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Loading } from './components/common';
import ErrorBoundary from './utils/ErrorBoundary';
import Layout from './components/common/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import {
  Dashboard,
  ForgotPassword,
  Home,
  LoginWithCode,
  NotFound,
  Profile,
  Register,
  RequestLeave,
  ResetPassword,
  Verify,
} from './utils/lazyLoadComponents';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/login-with-code"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <LoginWithCode />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/register"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <Register />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <ForgotPassword />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/reset-password/:id"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <ResetPassword />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/verify"
            element={
              <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading />}>
                  <Verify />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <ErrorBoundary fallback={<Error />}>
                  <Suspense fallback={<Loading />}>
                    <Dashboard />
                  </Suspense>
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
          <Route
            path="/request-leave"
            element={
              <DashboardLayout>
                <ErrorBoundary fallback={<Error />}>
                  <Suspense fallback={<Loading />}>
                    <RequestLeave />
                  </Suspense>
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <ErrorBoundary fallback={<Error />}>
                  <Suspense fallback={<Loading />}>
                    <Profile />
                  </Suspense>
                </ErrorBoundary>
              </DashboardLayout>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
