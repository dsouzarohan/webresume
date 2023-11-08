export interface IPoint {
    text: string
}

export interface ISection {
    type: string
    startDate: Date
    endDate: Date
    description?: string
    designation: string
    location: string
    organization: string
    organizationLink: string
    points: IPoint[]
    skills?: string[]
}

export interface ISkill {
    name: string
    displayName: string
    proficiency: number
    category: string
    order: number
}

export interface ISkillsMap {
    [key: string]: ISkill[]
}

export interface IProject {
    
}

export const transformSkillsToMap = (skills: ISkill[]): ISkillsMap => {
    let skillMap: ISkillsMap = {};

    for (let skill of skills) {
        let skillObj: ISkill = {
            name: skill.name,
            category: skill.category,
            displayName: skill.displayName,
            proficiency: skill.proficiency,
            order: skill.order
        };

        if (skillMap[skill.category]) {
            skillMap[skill.category].push(skillObj);
        } else {
            skillMap[skill.category] = [skillObj];
        }
    }

    return skillMap
}