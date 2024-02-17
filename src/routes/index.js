import express from "express";
import users from "./userRouter.js";
import list from "./listRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("todo_lists"));

  app.use(express.json(), users, list);
};

export default routes;
