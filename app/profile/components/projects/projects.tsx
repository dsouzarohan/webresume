import ProjectSelector from "./project-selector";
import { getSkills } from "@/app/models/skills";

export const dynamic = 'force-dynamic';

const Projects = async () => {

  const skills = await getSkills();
  return (
    <div>
      <h2>Projects Component</h2>
      <p>Loaded {skills.length} projects</p>
      <ProjectSelector projects={skills}></ProjectSelector>
      {/* <h1>My Projects Component</h1>
      <p>Current Skill selected: {skill?.displayName}</p> */}
    </div>
  )
}

export default Projects