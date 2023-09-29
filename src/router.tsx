import {
  Outlet,
  RouteObject,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { Footer, Header } from "./components";
import {
  CelebrityPage,
  CreateOwnSongPage,
  GalleryPage,
  MainPage,
  Songs,
  MusicStudio,
} from "./pages";
import { useEffect } from "react";

const ROUTES: RouteObject[] = [
  { path: "/create-own-song", element: <CreateOwnSongPage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/celebrity-partnerships", element: <CelebrityPage /> },
  { path: "/music-studio", element: <MusicStudio /> },
  { path: "/songs", element: <Songs /> },
];

export const routes = [
  {
    path: "/create-own-song",
    name: "Create Your Own Song",
  },
  {
    path: "/gallery",
    name: "Media Gallery",
  },
  {
    path: "/celebrity-partnerships",
    name: "Celebrity Partnerships",
  },
  {
    path: "/music-studio",
    name: "Music Studio",
  },
  {
    path: "/songs",
    name: "Songs",
  },
];

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      ...ROUTES,
    ],
  },
]);
