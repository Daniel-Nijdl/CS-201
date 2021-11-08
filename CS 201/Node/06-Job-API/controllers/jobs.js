const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  const { company, position, status, createdBy, timeStamp, jobID } = req.query;

  if (company) {
    queryObject.company = company;
  }
  if (position) {
    queryObject.position = position;
  }
  if (status) {
    queryObject.status = status;
  }
  if (createdBy) {
    queryObject.createdby = createdBy;
  }
  if (timeStamp) {
    queryObject.timeStamp = timeStamp;
  }
  // if(jobID){
  //   queryObject.jobID = jobID
  // }

  // res.json({ company: company, position: position, status: status, createdBy: createdBy, timeStamp: timeStamp, jobID: jobID  })

  res.json({
    company: company,
    position: position,
    status: status,
    createdBy: createdBy,
    timeStamp: timeStamp,
  });
};

const createJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.json({ method: req.method, job: job, body: req.body });
};

const getJob = async (req, res) => {
  // const { jobID } = req.params
  try {
    const job = await Job.findById(jobID);
    if (!job) {
      res.json({ msg: `no items with id : ${jobID}` });
    }
    res.json({ method: req.method, job: job, jobID: jobID });
  } catch (err) {
    res.json({ msg: `no items with id : ${jobID} ` });
  }
};

const deleteJob = async (req, res) => {
  try{
    const job = await Job.findByIdAndDelete(jobID)
    if(!job){
      res.json({msg: `no items with id : ${jobID}`})
    }
    res.json({method: req.method, job: job, jobID: jobID})
  } catch (err) {
    res.json({msg: `no items with id : ${jobID}`})
  }
}

const updateJob = async (req, res) => {
  const { id } = req.params;
  try{
    const job = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    if(!job){
      return res.json({msg: `no job with id : ${id}`})
    }

    res.json({
      company: company,
      position: position,
      status: status,
      createdBy: createdBy,
      timeStamp: timeStamp,
    })
  } catch (err) {
    res.json({msg: err})
  }
}

module.exports = { getAllJobs, createJob, getJob, deleteJob, updateJob };
