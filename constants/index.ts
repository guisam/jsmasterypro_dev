import ROUTES from "./routes";

export const sidebarLinks = [
  {
    imgUrl: "/icons/home.svg",
    label: "Home",
    route: ROUTES.HOME,
  },
  {
    imgUrl: "/icons/users.svg",
    label: "Community",
    route: ROUTES.COMMUNITY,
  },
  {
    imgUrl: "/icons/star.svg",
    label: "Collections",
    route: ROUTES.COLLECTIONS,
  },
  {
    imgUrl: "/icons/suitcase.svg",
    label: "Find Jobs",
    route: ROUTES.JOBS,
  },
  { imgUrl: "/icons/tag.svg", label: "Tags", route: ROUTES.TAGS },
  {
    imgUrl: "/icons/user.svg",
    label: "Profile",
    route: ROUTES.PROFILE,
  },
  {
    imgUrl: "/icons/question.svg",
    label: "Ask a Question",
    route: ROUTES.ASK_QUESTION,
  },
];
