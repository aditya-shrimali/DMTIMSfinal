const SupportCapital = () => {
  const support = [
    { id: 0, name: "Rev. Fr. Santosh Varghese" },
    { id: 1, name: "Rev. Fr. Bijo Peedikayil" },
    { id: 2, name: "Ms.  Lija Sunil" },
    { id: 3, name: "Ms. Krupal Save" },
    { id: 4, name: "Mr. Vikas Narayan Gore" },
    { id: 5, name: "Ms. JayShree Sriramulu" },
    { id: 6, name: "Ms. Dinesh Singh" },
    { id: 7, name: "Mr. Kaustubh Sadare" },
    { id: 8, name: "Ms. Jancy Joseph" },
    { id: 9, name: "Mr. Threza Joseph" },
    { id: 10, name: "Ms. Sagar Samaya" },
    { id: 11, name: "Mr. Kanchan Gawari" },
    { id: 12, name: "Ms. Archana Shringarpure" },
    { id: 13, name: "Mr. Shantaram Paradkar" },
    { id: 14, name: "Mr. Sunil Vaydande " },
    { id: 15, name: "Mr. Shailaja Desai" },
    { id: 16, name: "Ms. Suraj Somade" },
    { id: 17, name: "Mr. Chandu Rathod" },
    { id: 18, name: "Mr. Atul Ramteke" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h2 id="Support-Capital" className="dmtims-title">
            Support Capital
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          {/* <div className="grid grid-cols-2 text-center md:grid-cols-3">
            {support.map(({ id, name }) => (
              <p key={id} className="dmtims-text font-normal text-white">
                <li>
                {name}
                  </li>
              </p>
            ))}
          </div> */}

          <div className="grid grid-cols-2  sm:px-20 md:grid-cols-3 ">
            {support.map(({ id, name }) => (
              <ul key={id} className="dmtims-text font-normal text-white
            ">
                <li>•  {name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCapital;
