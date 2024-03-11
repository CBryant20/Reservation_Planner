const express = require("express");
const app = express();

const PORT = 3000;

// Body Parsing
app.use(express.json());
app.use(express.urlendcoded({ extended: true }));

// Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalURL}`);
  next();
});

// Routing
app.use("/reservations", require("./reservation.js"));

//Error handling
app.use((err, req, res, next) => {
  const status = err.status ?? 500;
  const message = err?.message ?? "Internal server error";
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
