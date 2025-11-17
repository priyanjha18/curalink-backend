const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    specialties: {
      type: [String],
      default: [],
    },

    customConditions: {
      type: [String],
      default: [],
    },

    location: {
      type: String,
      default: "",
    },
    university: {
  type: String,
  trim: true,
},
graduation: {
  type: String,
  trim: true,
},
researchGate: {
  type: String,
  trim: true,
},
orcid: {
  type: String,
  trim: true,
},

    /* ---------------------------
       YOUR NEW FIELDS (name-based)
    ---------------------------- */
 connectionRequests: {
      type: [mongoose.Schema.Types.Mixed], // <-- ANY object
      default: [],
    },

    followedExperts: {
      type: [mongoose.Schema.Types.Mixed], // <-- ANY object
      default: [],
    },

    favoritePublications: {
      type: [mongoose.Schema.Types.Mixed], // <-- ANY object
      default: [],
    },

    interestedTrials: {
      type: [mongoose.Schema.Types.Mixed], // <-- ANY object
      default: [],
    },

    meetings: {
      type: [mongoose.Schema.Types.Mixed], // <-- ANY object
      default: [],
    },
  },
  { timestamps: true }
);

/* ------------------------------------------
   GENERIC ADD / REMOVE FUNCTIONS (name-based)
------------------------------------------- */

userSchema.methods.addToArray = async function (field, obj) {
  const exists = this[field].some((item) => item.name === obj.name);
  if (!exists) this[field].push(obj);
  return this.save();
};

userSchema.methods.removeFromArray = async function (field, name) {
  this[field] = this[field].filter((item) => item.name !== name);
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
