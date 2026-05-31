import { createBrowserRouter } from "react-router";
import { lazy } from "react";

// Auth pages - loaded immediately for fast startup
import { Splash } from "./pages/Splash";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { InitialSetup } from "./pages/InitialSetup";
import { NotFound } from "./pages/NotFound";

// App pages - lazy loaded for better initial performance
const MainLayout = lazy(() => import("./layouts/MainLayout").then(m => ({ default: m.MainLayout })));
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Mark = lazy(() => import("./pages/Mark").then(m => ({ default: m.Mark })));
const Analytics = lazy(() => import("./pages/Analytics").then(m => ({ default: m.Analytics })));
const Students = lazy(() => import("./pages/Students").then(m => ({ default: m.Students })));
const Profile = lazy(() => import("./pages/Profile").then(m => ({ default: m.Profile })));
const Timetable = lazy(() => import("./pages/Timetable").then(m => ({ default: m.Timetable })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/setup",
    Component: InitialSetup,
  },
  {
    path: "/app",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "mark", Component: Mark },
      { path: "analytics", Component: Analytics },
      { path: "students", Component: Students },
      { path: "timetable", Component: Timetable },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
