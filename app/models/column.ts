import { model, Schema } from "mongoose";

interface IColumn {
  name: string;
  tasks: object[];
  boardId: object | string;
}

const columnSchema = new Schema<IColumn>(
  {
    name: { type: String, required: true },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    boardId: { type: Schema.Types.ObjectId, ref: "Board" },
  },
  { timestamps: true }
);

const Column = model<IColumn>("Column", columnSchema);

export default Column;
