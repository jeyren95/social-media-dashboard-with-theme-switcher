const express = require("express");
const ejs = require("ejs")

const app = express();

const accounts = [{
    socialMediaIcon: "images/icon-facebook.svg",
    name: "@nathanf",
    count: "1987",
    follower: "FOLLOWERS",
    countChange: "12",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489",
    cardColor: "#198ff5"
  }, {
    socialMediaIcon: "images/icon-twitter.svg",
    name: "@nathanf",
    count:"1044",
    follower: "FOLLOWERS",
    countChange: "99",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489",
    cardColor: "#1ca0f2"
  }, {
    socialMediaIcon: "images/icon-instagram.svg",
    name: "@realnathanf",
    count: "11k",
    follower: "FOLLOWERS",
    countChange: "1099",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489",
    cardColor: "linear-gradient(to right, #fdc468, #df4996)"
  }, {
    socialMediaIcon: "images/icon-youtube.svg",
    name: "Nathan F.",
    count: "8239",
    follower: "SUBSCRIBERS",
    countChange: "144",
    changeIcon: "images/icon-down.svg",
    iconColor: "#dc414c",
    cardColor: "#c4032a"
  }];

const stats = [{
    statName: "Page Views",
    socialMediaIcon: "images/icon-facebook.svg",
    count: "87",
    percentChange: "3%",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489"
  }, {
    statName: "Likes",
    socialMediaIcon: "images/icon-facebook.svg",
    count: "52",
    percentChange: "2%",
    changeIcon: "images/icon-down.svg",
    iconColor: "#dc414c"
  }, {
    statName: "Likes",
    socialMediaIcon: "images/icon-instagram.svg",
    count: "5462",
    percentChange: "2257%",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489"
  }, {
    statName: "Profile Views",
    socialMediaIcon: "images/icon-instagram.svg",
    count: "52k",
    percentChange: "1375%",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489"
  }, {
    statName: "Retweets",
    socialMediaIcon: "images/icon-twitter.svg",
    count:"117",
    percentChange: "303%",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489"
  }, {
    statName: "Likes",
    socialMediaIcon: "images/icon-twitter.svg",
    count: "507",
    percentChange: "553%",
    changeIcon: "images/icon-up.svg",
    iconColor: "#1db489"
  }, {
    statName: "Likes",
    socialMediaIcon: "images/icon-youtube.svg",
    count: "107",
    percentChange: "19%",
    changeIcon: "images/icon-down.svg",
    iconColor: "#dc414c"
  }, {
    statName: "Total Views",
    socialMediaIcon: "images/icon-youtube.svg",
    count: "1407",
    percentChange: "12%",
    changeIcon: "images/icon-down.svg",
    iconColor: "#dc414c"
  }];

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("home", {
    accounts: accounts,
    stats: stats
  });
});

app.listen(3000, () => {
  console.log("Server successfully running on port 3000");
});
