const Job = require("../models/Job")

const getAllJobs = async (req, res) => {
  const { company, position, status, createdBy, timeStamp } = req.query;
  let queryObject = {};

  if(company){
    queryObject.company = company;
  }
  if(position){
    queryObject.position = position;
  }
  if(status){
    queryObject.status = status;
  }
}

