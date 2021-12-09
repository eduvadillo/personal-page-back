const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const versionSchema = new Schema(
  {
    version: {
      type: Number,
      // unique: true -> Ideally, should be unique, but its up to you
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Version = model("Version", versionSchema);

module.exports = Version;
