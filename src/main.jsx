import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { ClerkProvider } from '@clerk/clerk-react'

//import App from "./app";
import './index.css'
import MainLayout from './layouts/main.layout';
import HomePage from './pages/home.page'
import AttendancePage from './pages/attendance.page';
import SignInPage from './pages/Sign.page';
import SignUpPage from './pages/SignUp.page';
import News from './pages/news.page';
import Study from './pages/selfstudy.page';
import Kaizan from './pages/Kaizen.page';
import Sop from './pages/Sop.page';
import Event from './pages/Event.page';
import { store } from "./lib/api/store";
import { Provider } from "react-redux";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <Provider store={store}>
     <BrowserRouter>
   <Routes>
     <Route element={<MainLayout />}>
      {/*<Route path="/" element={<App />} />*/}
      <Route path="/" element={<HomePage />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/selfstudy" element={<Study />} />
      <Route path="/Kaizan" element={<Kaizan />} />
      <Route path="/Sop" element={<Sop />} />
      <Route path="/Event" element={<Event />} />
      
</Route>
     </Routes>
</BrowserRouter>
</Provider>
</ClerkProvider>
  </StrictMode>
 
)
