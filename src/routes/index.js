const express = require("express");
const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
  getContact,
} = require("../controller/contact");
const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
router.get("/:id", getContact);

module.exports = router;
