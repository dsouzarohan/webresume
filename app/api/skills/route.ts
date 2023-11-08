import mongoConnect from "@/app/models/database"
import { Skill, getSkills } from "@/app/models/skills";
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const skills = await getSkills();
        return NextResponse.json(skills);
    } catch(error) {
        return NextResponse.json({
            success: false,
            error
        });
    }
}