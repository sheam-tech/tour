const Tours = require("../../models/Tours");

const createTour = async (req, res, next) => {
  try {
    const data = req.body;
    const tour = new Tours(data);
    const result = await tour.save();
    if (!result._id) {
      return res.status(500).json({ success: false, error: "internal error" });
    }

    res.status(201).json({ success: true, message: "Tour is posted" });
  } catch (error) {
    next(error);
    
  }
};

module.exports = createTour;