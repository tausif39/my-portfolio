import { DiReact, DiNodejs, DiDocker } from "react-icons/di";

const Skills = () => {
  return (
    <div id="#skills" className="bg-white py-10">
      <div className="max-w-7xl text-center mx-auto px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Skills</h1>
        <p className="text-lg text-black mb-8 text-center">
          Building exceptional digital experiences with the power of MERN stack
          and DevOps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="flex flex-col items-center">
            <DiReact className="text-4xl mb-2 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2">Frontend</h2>
            <ul className="text-black">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux Toolkit</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              

              {/* Add more frontend skills */}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col items-center">
            <DiNodejs className="text-4xl mb-2 text-green-500" />
            <h2 className="text-xl font-semibold mb-2">Backend</h2>
            <ul className="text-black">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Next.js</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>FastAPI</li>
              {/* Add more backend skills */}
            </ul>
          </div>

          {/* DevOps Skills */}
          <div className="flex flex-col items-center">
            <DiDocker className="text-4xl mb-2 text-purple-500" />
            <h2 className="text-xl font-semibold mb-2">DevOps</h2>
            <ul className="text-black">
              <li>Linux</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Kubernetes</li>
              <li>GitHub Actions</li>
              <li>Jenkins</li>
              <li>Bash Scripting</li>
              <li>Terraform</li>
              {/* <li>Nginx</li> */}
              {/* Add more DevOps skills */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
