import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  user: Types.ObjectId; // Reference to the User model
  id: Types.ObjectId; // This can be a Question or Answer ID
  type: "question" | "answer"; // Specify the type of vote
  voteType: "upvote" | "downvote"; // Type of vote
}

const VoteSchema = new Schema<IVote>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: Schema.Types.ObjectId, required: true }, // This can be a Question or Answer ID
    type: {
      type: String,
      enum: ["question", "answer"], // Specify the type of vote
      required: true,
    },
    voteType: {
      type: String,
      enum: ["upvote", "downvote"],
      required: true,
    },
  },
  { timestamps: true },
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
