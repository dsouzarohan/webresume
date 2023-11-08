import mongoose from "mongoose";
import mongoConnect from "./database";
import { ISkill } from "../types/resume";
const { Schema, Model } = mongoose; 

const skillSchema = new Schema({
    name: String,
    displayName: String,
    proficiency: Number,
    category: String,
    order: Number
});

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

export const getSkills = async () => {
    try {
        await mongoConnect();
        let skills = await Skill.find({}).lean()
        return JSON.parse(JSON.stringify(skills)) as ISkill[];
    } catch (error) {
        throw new Error("Error fetching skills from Mongo")
    }
}