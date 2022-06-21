import Home from "pages/Home";
import NavBar from "pages/NavBar";

interface IRoute {
  path: string;
  name: string;
  component: any;
}

interface IRouteObject {
  routes: IRoute[];
  redirect: IRoute;
}

const routes: IRoute[] = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/navbar",
    name: "NavBar",
    component: NavBar,
  },
];

const guestRoute: IRouteObject = {
  routes: routes,
  redirect: {
    path: "/",
    name: "Home",
    component: Home,
  },
};

export default guestRoute;
