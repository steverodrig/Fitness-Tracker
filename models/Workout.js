const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type: {
                type: String,
                required: "Type is required"
            },
            name: {
                type: String,
                required: "Workout name is required"
            },
            duration: {
                type: Number,
                required: "Duration is required"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
}, {
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;