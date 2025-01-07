import './App.css'
import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Headers from './components/custom/Headers.jsx';
import { useUser } from '@clerk/clerk-react';
import { Toaster } from './components/ui/sonner';
import Chatbot from './bot/Chatbot';



function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <Headers/>
      <Outlet/>
      <Toaster/>
      <Chatbot/>

    </>
  )
}

export default App
