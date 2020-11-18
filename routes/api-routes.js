const db = require("../models");
const router = require("express").Router();

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
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbItem => {
        res.json(dbItem);
    })
    .catch(err => {
        res.json(err);
    })
})

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbItem => {
        res.json(dbItem);
    })
    .catch(err => {
        res.json(err);
    })

})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body }}, { new: true, runValidators: true })
    .then(dbItem => {
        res.json(dbItem);
    })
    .catch(err => {
        res.json(err);
    })

})

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
