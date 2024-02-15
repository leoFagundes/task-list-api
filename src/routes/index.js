import express from "express";
import user from '../controller/userController.js'
import list from '../controller/listController.js'

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("todo_lists"));

  app.use(express.json(), user, list);
};

export default routes;
