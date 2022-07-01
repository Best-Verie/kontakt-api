const Contact = require("../model/contact");

exports.createContact = (req, res) => {
  const contact = new Contact(req.body);
  contact.save((err, contact) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send(contact);
  });
};

exports.getContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(contacts);
  });
};

exports.updateContact = (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(contact);
  });
};

exports.deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, contact) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(contact);
  });
};

exports.getContact = (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(contact);
  });
};
