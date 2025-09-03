import Projects from "./Projects";

const ProjectsSection = ({ filter }) => {
  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <Projects filter={filter} />
    </section>
  );
};

export default ProjectsSection;
