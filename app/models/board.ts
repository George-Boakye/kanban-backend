import { model, Schema } from "mongoose";

interface IBoard {
  name: string;
  columns: string[];
}

const boardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    columns: [
      {
        type: Schema.Types.ObjectId,
        ref: "Column",
      },
    ],
  },
  { timestamps: true }
);

const Board = model<IBoard>("Board", boardSchema);

export default Board;
