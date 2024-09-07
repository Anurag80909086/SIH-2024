import "./Footer.css";
const Footer = () => {
  const states1 = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
  ];
  const states2 = [
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
  ];
  const states3 = [
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const unionTerritories = [
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];

  return (
    <div className="footer">
      <div className="allStates">
        <div className="state">
          <h2 className="footerHeading">States</h2>
          <div className="wrapper">
            <ul>
              {states1.map((state) => {
                return <li key={state}>{state}</li>;
              })}
            </ul>
            <ul>
              {states2.map((state) => {
                return <li key={state}>{state}</li>;
              })}
            </ul>
            <ul>
              {states3.map((state) => {
                return <li key={state}>{state}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="unionTeritory">
          <h2 className="footerHeading">Union Teritorry</h2>
          <div className="wrapper">
            <ul>
              {unionTerritories.map((state) => {
                return <li key={state}>{state}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <section className="shortNotes">
        <h1 className="footerHeading">Indian Cultural and Teritorry</h1>
        <p className="textFont">
          India has a myriad of landscapes, great heritage and culture, varied
          flora and fauna. The country is the most preferred tourist
          destinations for tourists from all across the world for its
          picturesque landscapes, spectacular waterfalls, habitat of the country
          largest tiger reserve and home to the warmest people on earth.
        </p>
      </section>

      <hr />

      <section className="copyRightArea">
        <p className="textCenter textFont">
          Privacy Policy | Terms of Platform Use | Important Links | Emergency
        </p>
        <h3 className="textCenter textFont">
          © Ministry of Tourism. Government of India
        </h3>
      </section>
    </div>
  );
};

export default Footer;
