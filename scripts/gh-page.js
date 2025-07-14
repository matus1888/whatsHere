import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    repo: "https://github.com/matus1888/whatsHere.git",
  },
  function (err) {
    console.log(err)
  },
);
