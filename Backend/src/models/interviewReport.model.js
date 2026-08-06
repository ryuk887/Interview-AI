const mongoose = require("mongoose");

/**
 * - Job description Schema: string
 * - resume text: string
 * - Self description: string
 *
 * - matchScore: number
 *
 * - Technical questions:[
 *      {
 *          question: "",
 *          intention: "",
 *          answer: "",
 *      }
 * ]
 *
 * - Behavioral questions:[
 *      {
 *          question: "",
 *          intention: "",
 *          answer: "",
 *      }
 * ]
 *
 * - Skill gaps: [{
 *      skill: "",
 *      severity:{
 *          type: string,
 *          enum: ["low", "medium", "high"]
 * }
 * }]
 *
 * -Preparation plan: [{
 *      day: number,
 *      focus: string,
 *      tasks: [string]
 * }]
 */

const technicalQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "techniacal question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behavioralQuestionsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "techniacal question is required"],
    },
    intention: {
      type: String,
      required: [true, "intention is required"],
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const preperationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day is required"],
    },
    focus: {
      type: String,
      required: [true, "Focus is required"],
    },
    tasks: [
      {
        type: String,
        required: [true, "task is required"],
      },
    ],
  },
  {
    _id: false,
  },
);

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },
    resume: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalQuestions: [technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillGaps: [skillGapSchema],
    preperationPlan: [preperationPlanSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  },
);

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema,
);

module.exports = interviewReportModel;
