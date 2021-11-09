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


module.exports = router;