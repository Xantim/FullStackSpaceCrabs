const CrabController = require('../controllers/crab.controller');


module.exports = (app) => {
    app.get("/api/crabs",CrabController.index);
    app.post("/api/create/crab",CrabController.create);
    app.get("/api/crab/:id",CrabController.show);
    app.put("/api/update/crab/:id",CrabController.update);
    app.delete("/api/destroy/crab/:id",CrabController.destroy);
}