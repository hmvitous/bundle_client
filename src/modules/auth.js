import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  // host: "https://bundleup-api.herokuapp.com/",
  prefixUrl: "/api"
});

export default auth;
