import ROUTES from "./routes";

export type NavLinkType = { imgUrl: string; label: string; route: string };
type LinksArrayType = NavLinkType[];

export const sidebarLinks: LinksArrayType = [
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
