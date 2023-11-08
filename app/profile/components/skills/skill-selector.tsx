"use client";

import { ISkill, transformSkillsToMap } from '@/app/types/resume'
import React, { useState } from 'react'
import { useProfileContext } from '../../../contexts/profile-context';

type SkillSelectorProps = {
    skills: ISkill[]
}

const SkillSelector: React.FC<SkillSelectorProps> = ({ skills }) => {
    const skillMap = transformSkillsToMap(skills);
    const skillCategories = Object.keys(skillMap);
    const [category, setSelectedCategory] = useState<string>(skillCategories[0]);
    const { updateSelectedSkill } = useProfileContext();

    return (
        <div className='flex'>
            <select defaultValue={category}
            onChange={e => setSelectedCategory(e.target.value)}>
                {
                    skillCategories.map((category) => (
                        <option className='text-black' value={category} key={category}>{category}</option>
                    ))
                }
            </select>
            <div className="flex gap-2">
                {
                    skillMap[category].map(skill => {
                        return (
                            <span key={skill.name} onClick={() => {
                                updateSelectedSkill(skill);
                            }}>{skill.displayName}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillSelector