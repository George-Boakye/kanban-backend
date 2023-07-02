import { model, Schema } from "mongoose";

interface ISubtask {
  name: string;
  status: boolean | null;
}

interface ITask {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[];
  column: Schema.Types.ObjectId;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: false },
    subtasks: [
      {
        name: { type: String, required: true },
        status: { type: Boolean, required: true },
      },
    ],
  column: {type: Schema.Types.ObjectId, ref: "Column"}
  },
  { timestamps: true }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;
