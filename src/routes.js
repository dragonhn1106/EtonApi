import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Introduction from "./components/common/Introduction/Introduction";
import Authentication from "./components/common/Authentication/Authentication";
const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/introduction",
        exact: true,
        main: ()=> <Introduction />
    },
    {
        path: "/authorization",
        exact: true,
        main: ()=> <Authentication />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;