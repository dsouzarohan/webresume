import { ISkill, transformSkillsToMap } from '@/app/types/resume';
import { getSkills } from '@/app/models/skills';
import SkillSelector from './skill-selector';
// import { Suspense } from 'react';
// import Loading from './loading';

const Skills = async () => {

    const skills = await getSkills();

    return (
        <div className="bg-eerie p-8 border-l-8 border-l-carrot">
            <h2>Skills Component</h2>
            <h2>Some Skills heading here...</h2>
            <p>Loaded {skills.length} skills</p>
            <SkillSelector skills={skills}></SkillSelector>
        </div>
    )
}

export default Skills