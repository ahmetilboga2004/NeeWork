export const loginPage = (req, res) => {
  res.render("login");
};

export const registerPage = (req, res) => {
  res.render("register");
};

export const notFoundPage = (req, res) => {
  res.render("404");
};

export const chatPage = (req, res) => {
  res.render("chat");
};
