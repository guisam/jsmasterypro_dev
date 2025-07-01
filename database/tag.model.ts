import { model, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  description?: string;
  usageCount: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },

    usageCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
