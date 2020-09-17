const express = require("express");
const R = require("ramda");
const { promisify } = require("util");
const { trycatch } = require("../utils/util");
const router = express.Router();

router.post("/", (req, res, next) => {
  const { useEnrichId, user } = req.body;
  const { id, firstName, lastName, email, displayName } = user;
  const name = { firstName, lastName };
  let provider = "ADFS";
  console.log("yaas");
  return res.json({
    id,
    name,
    email,
    displayName,
    provider,
    something: "something",
  });
});

module.exports = router;
