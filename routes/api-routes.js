const db = require("../models");
const router = require("express").Router();


// Pull all data from workouts collection
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbItem => {
            res.json(dbItem);
        })
        .catch(err => {
            res.json(err);
        })
}
)

// Pull last 7 days of exercises
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbItem => {
            res.json(dbItem);
        })
        .catch(err => {
            res.json(err);
        })
})

// Add new workouts
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbItem => {
            res.json(dbItem);
        })
        .catch(err => {
            res.json(err);
        })

})

// Update existing workout plan
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbItem => {
            res.json(dbItem);
        })
        .catch(err => {
            res.json(err);
        })

})

// Delete collection entry
router.delete("/api/workouts", ({ body }, res) => {
    db.Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router;
