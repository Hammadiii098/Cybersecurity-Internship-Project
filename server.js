const cookieParser = require("cookie-parser");
const csrf = require("csurf");

app.use(cookieParser());

const csrfProtection = csrf({
  cookie: true
});

app.use(csrfProtection);

app.get("/csrf-token", (req, res) => {
  res.json({
    csrfToken: req.csrfToken()
  });
});
