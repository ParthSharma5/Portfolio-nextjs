import Certification from "./Certification";

const CertificationSection = ({ filter }) => {
  return (
    <section className="px-4 py-10">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2> */}
      <Certification filter={filter} />
    </section>
  );
};

export default CertificationSection;
