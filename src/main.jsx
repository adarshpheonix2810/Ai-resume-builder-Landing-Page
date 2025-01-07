import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./dashboard/index.jsx";
import Home from "./home/index.jsx";
import SignInPage from "./auth/sign-in/index.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import EditResume from "./dashboard/resume/[resumeId]/edit/index.jsx";
import ViewResume from "./my-resume/[resume-Id]/view/index.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }
      
    ]
  },
 ,
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  }
  
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
