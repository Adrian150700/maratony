const express = require("express")
const router = express.Router()
const wydarzenieController = require("../controllers/WydarzenieController")

/**
 * @swagger
 * /wydarzenia:
 *   post:
 *     summary: Tworzy nowe wydarzenie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nazwa
 *             properties:
 *               nazwa:
 *                 type: string
 *                 description: Nazwa wydarzenia
 *     responses:
 *       201:
 *         description: Wydarzenie zostało stworzone
 */
router.post("/wydarzenia", wydarzenieController.createWydarzenie)
/**
 * @swagger
 * /wydarzenia:
 *   get:
 *     summary: Pobiera wszystkie wydarzenia
 *     responses:
 *       200:
 *         description: Lista wszystkich wydarzeń
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID wydarzenia
 *                   nazwa:
 *                     type: string
 *                     description: Nazwa wydarzenia
 */
router.get("/wydarzenia", wydarzenieController.getAllWydarzenia)
/**
 * @swagger
 * /wydarzenia/{id}:
 *   get:
 *     summary: Pobiera wydarzenie po ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID wydarzenia
 *     responses:
 *       200:
 *         description: Szczegóły wydarzenia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nazwa:
 *                   type: string
 */
router.get("/wydarzenia/:id", wydarzenieController.getWydarzenieById)
/**
 * @swagger
 * /wydarzenia/{id}:
 *   get:
 *     summary: Aktualizuje wydarzenie po ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID wydarzenia
 *     responses:
 *       200:
 *         description: Szczegóły wydarzenia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nazwa:
 *                   type: string
 */
router.put("/wydarzenia/:id", wydarzenieController.updateWydarzenie)
/**
 * @swagger
 * /wydarzenia/{id}:
 *   get:
 *     summary: Usuwa wydarzenie po ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID wydarzenia
 *     responses:
 *       200:
 *         description: Szczegóły wydarzenia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nazwa:
 *                   type: string
 */
router.delete("/wydarzenia/:id", wydarzenieController.deleteWydarzenie)

module.exports = router
