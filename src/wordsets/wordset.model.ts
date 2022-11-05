import { model } from "mongoose";
import IWordset from "./wordset.interface";
import wordsetSchema from "./wordset.schema";


const WordsetModel = model<IWordset>('wordsets', wordsetSchema);

export default WordsetModel;