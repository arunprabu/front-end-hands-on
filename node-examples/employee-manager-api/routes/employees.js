var express = require('express');
var router = express.Router();

// POST employees 
router.post('/', function(req, res, next) {
  
  console.log(req.body);
  res.json({
    ...req.body,
    id:100,
    status: 'Saved Successfully'
  });  
});

/* GET employees listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1, 
      name: 'John',
      city: 'Hyd'
    },
    {
      id: 2, 
      name: 'Peter',
      city: 'Pune'
    }
  ])
});

// GET employee by Id -- URL Params
router.get('/:empId', function(req, res, next) {
  console.log(req.params.empId); // reading URL params
  console.log(req.query); // reading query params if anything is passed
  res.json({
    id: parseInt(req.params.empId), 
    name: 'John',
    city: 'Hyd'
  });
});

// TODO: Handle PUT Request 

// TODO: Handle DELETE Req 






module.exports = router;
