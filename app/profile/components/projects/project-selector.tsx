"use client";

import { useProfileContext } from '@/app/contexts/profile-context';
import React, { useEffect } from 'react'

type ProjectSelectorProps = {
    projects: any[];
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ projects }) => {
    
const { skill } = useProfileContext();

useEffect(() => {
    const reactToSkillChange = () => {
        console.log("Skill changed to ", skill)
    }
    if(skill) reactToSkillChange();

}, [skill]);

  return (
    <div>Loaded some projects... {projects.length} 
        <p>Selected skill {skill?.displayName}</p>
    </div>
  )
}

export default ProjectSelector