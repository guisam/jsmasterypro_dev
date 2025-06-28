const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  JOBS: "/find-jobs",
  COMMUNITIES: "/communities",
  TAGS: "/tags",
  TAG: (id: number) => `/tags/${id}`,
  PROFILE: (id: number) => `/profile/${id}`,
  QUESTION: (id: number) => `/question/${id}`,
  ASK_QUESTION: "/ask-a-question",
};
export default ROUTES;
