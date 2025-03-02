import { ConfigProps } from "./types/config";

const config = {
  appName: "ByteMason",
  appDescription: "AI code agent",
  domainName: "bytemason.com",

  auth: {
    loginUrl: "/signin",
    callbackUrl: "/dashboard",
  },

  theme: {
    primary: "#f37055",
  }
} as ConfigProps;

export default config;
