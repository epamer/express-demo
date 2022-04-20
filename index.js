const express = require("express");

const months = {
  1: "january",
  2: "february",
  3: "march",
  4: "april",
  5: "may",
  6: "june",
  7: "july",
  8: "august",
  9: "september",
  10: "october",
  11: "november",
  12: "december",
};

const data = {
  courses: {
    1: {
      id: 1,
    },
    2: {
      id: 2,
    },
    3: {
      id: 3,
    },
    4: {
      id: 4,
    },
    5: {
      id: 5,
    },
    6: {
      id: 6,
    },
  },
};

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:year/:month", (req, res) => {
  res.send(
    `All courses since ${months[req.params.month]} of ${req.params.year}`
  );
});

app.get("/api/courses/", (req, res) => {
  if (req.query.orderBy === "asc") {
    res.send(data.courses);
  }
  res.send(data.courses);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Lestening of port 3000..."));
