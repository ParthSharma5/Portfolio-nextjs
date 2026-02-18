import Certification from "./Certification";

const CertificationSection = ({ filter }) => {
  return (
    <section className="px-4 py-10">
      <Certification filter={filter} />
    </section>
  );
};

export default CertificationSection;
