const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJob).put(updateJob);

// router.get("/test", (req, res) => res.send("<h1>test page</h1>"))
// .get("/", (req, res) => res.send("<h1>Job API</h1>"))

module.exports = router;