const TechnicalDomainSkills = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl">
          <h3
            id="Technical-Domain-Skills"
            className="dmtims-subtitle py-2 lg:py-6"
          >
            Technical / Domain Skills
          </h3>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Entrepreneurship Management
              </p>
              <p className="dmtims-text font-normal text-white">SQL & Coding</p>
              <p className="dmtims-text font-normal text-white">
                Banking & Finance Management
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Artificial Intelligence
              </p>
              <p className="dmtims-text font-normal text-white">Blockchain </p>
              <p className="dmtims-text font-normal text-white">
                Supply Chain Management
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                HR Analytics{" "}
              </p>
              <p className="dmtims-text font-normal text-white">
                Digital Marketing
              </p>
              <p className="dmtims-text font-normal text-white">
                Machine Learning
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Big Data Analysis{" "}
              </p>
              <p className="dmtims-text font-normal text-white">
                Design Thinking{" "}
              </p>
              <p className="dmtims-text font-normal text-white">
                Advanced Excel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDomainSkills;
