export default [
    {
        path: "/",
        name: "home",
        redirect: "/report",
    },
    {
        path: "/report",
        name: "report",
        component: () => import("@/views/Report"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        redirect: "/report",
    },
]
