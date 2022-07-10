import express from "express"
import authorController from "../controllers/authorsController.js"

const router = express.Router()

router
    .get("/authors", authorController.listAuthors)
    .post("/authors", authorController.registerAuthors)
    .put("/authors/:id", authorController.updateAuthors)
    .get("/authors/:id", authorController.listAuthorsById)
    .delete("/authors/:id", authorController.deleteAuthors)

export default router