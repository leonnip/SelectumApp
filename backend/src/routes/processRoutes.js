const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/processController");

router.post(
    "/process",
    controller.createProcess
);

router.get(
    "/process",
    controller.getProcesses
);

router.get(
    "/history",
    controller.getHistory
);

module.exports = router;