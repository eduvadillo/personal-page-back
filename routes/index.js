const router = require("express").Router();
const Version = require("../models/Version.model");

/* GET home page */
/* router.get("/version", (req, res, next) => {
  console.log(`he llegado al back`);
  Version.findById("61b1cc172b34fc1a17101e5c").then((web) => {
    console.log(`soy la version`, web.version);
  });
  res.json(web.version);
}); */

router.get("/version", (req, res, next) => {
  // Bet.find({ condition: { $elemMatch: "open" } })

  Version.find({ _id: ["61b1cc172b34fc1a17101e5c"] }).then((web) =>
    web[0].version === 1
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 2 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : web[0].version === 2
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 3 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : web[0].version === 3
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 1 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : res.json(`hola`)
  );
});

router.post("/version-back", (req, res, next) => {
  const { versionLess } = req.body;

  console.log(`soy el version less`, versionLess);

  Version.find({ _id: ["61b1cc172b34fc1a17101e5c"] }).then((web) =>
    web[0].version === 1
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 2 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : web[0].version === 2
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 3 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : web[0].version === 3
      ? Version.findOneAndUpdate({ _id: ["61b1cc172b34fc1a17101e5c"] }, { version: 1 })
          .then((web) => {
            res.json(web);
          })

          .catch((err) => res.json(err))
      : res.json(`hola`)
  );
});

module.exports = router;
