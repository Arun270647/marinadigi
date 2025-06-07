import React from "react";
import { useRoutes } from 'react-router-dom';


import HomePage6 from "../Pages/index6/Index"; // Your main homepage
import Service1Page from "../Pages/service1/index.tsx";
import Service2Page from "../Pages/service2/index.tsx";
import Service3Page from "../Pages/service3/index.tsx";
import Service4Page from "../Pages/service4/index.tsx";
import Service5Page from "../Pages/service5/index.tsx";
import About from "../Pages/About/Index";
import BlogLeft from "../Pages/Blog left/index";
import CasePage from "../Pages/Case/Index";           // Case Study listing page
import TeamPage from "../Pages/Team/Index";             // Our Team page
import FAQPage from "../Pages/Faq/Index"; 
import PricingPage from "../Pages/Pricing/Index";       // [cite: marina-digi-gemini/src/Pages/Pricing/Index.tsx]
import Contact from "../Pages/Contact/Index";
import TestimonialsPage from "../Pages/Testimonials/Index";
import NotFoundPage from "../Pages/404/Index.tsx";// Optional: If Header6 or Footer3 links directly to a specific service or blog page
// and you want to keep just ONE example of those, import them here.
// For this cleanup, we'll assume they are not kept unless specified.
// e.g., import Service1Page from "../Pages/service1/Index";
// e.g., import BlogPage from "../Pages/Blog/Index";
// e.g., import BlogSingle from "../Pages/Blog Single/Index";


const routesConfig = [
  // Set HomePage6 as the root/main page
  { path: "/", element: <HomePage6 /> },
  // Explicit path for HomePage6 (optional, but good for clarity if linked directly)
  { path: "/index6", element: <HomePage6 /> },
  { path: "/service1", element: <Service1Page /> },
  { path: "/service2", element: <Service2Page /> },
  { path: "/service3", element: <Service3Page /> },
  { path: "/service4", element: <Service4Page /> },
  { path: "/service5", element: <Service5Page /> },
  { path: "/about", element: <About /> },
  { path: "/blog-left", element: <BlogLeft /> },
  { path: "/case", element: <CasePage /> },
  { path: "/team", element: <TeamPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/pricing", element: <PricingPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/404", element: <NotFoundPage /> },
  { path: "/contact", element: <Contact /> },// Other essential routes you want to keep
  // { path: "/about", element: <AboutPage /> },

  // Optional: If you decided to keep one example service/blog page
  // { path: "/service1", element: <Service1Page /> },
  // { path: "/blog", element: <BlogPage /> },
  // { path: "/blog-single", element: <BlogSingle /> },


  // Not found routes (KEEP THESE)
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routesConfig);
  return <>{element}</>;
};

export default AppRoutes;
