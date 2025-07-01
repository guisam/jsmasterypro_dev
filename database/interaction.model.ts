import { model, models, Schema, Types } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: {
      type: String,
      enum: ["question", "answer"],
      required: true,
    },
    // id: { type: Schema.Types.ObjectId, refPath: "type", required: true },
    // type: {
    //   type: String,
    //   enum: ["Question", "Answer", "User"], // Specify the type of interaction
    //   required: true,
    // },
    // action: { type: String, required: true },
    // actionType: { type: String, enum: ["question", "answer"], required: true }, // Type of action
  },
  { timestamps: true },
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
