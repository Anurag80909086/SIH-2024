import "./Festivals.css";
import FestivalCard from "../../components/festivalCard/FestivalCard";
const Festivals = () => {
  const Festivals = {
    January: [
      {
        name: "Lohri",
        date: "13 January",
        src: "/Festivals/Lohri.jpg",
      },
      {
        name: "Makar Sankranti",
        date: "15 January",
        src: "/Festivals/Makar Sakranti.jpg",
      },
      {
        name: "Pongal",
        date: "15 January",
        src: "/Festivals/Pongal.jpg",
      },
      {
        name: "Guru Gobind Singh Jayanti",
        date: "17 January",
        src: "/Festivals/Guru Gobind Singh Jayanti.jpg",
      },
      {
        name: "Basant Panchami",
        date: "25 January",
        src: "/Festivals/Vasant Panchmi.jpg",
      },
      {
        name: "Republic Day",
        date: "26 January",
        src: "/Festivals/Repblic Day.jpg",
      },
    ],
    February: [
      {
        name: "Vasant Panchami",
        date: "14 February",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Maha Shivaratri",
        date: "29 February",
        src: "/Festivals/Diwali.webp",
      },
    ],
    March: [
      {
        name: "Holi",
        date: "25 March",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Shab-e-Barat",
        date: "31 March",
        src: "/Festivals/Diwali.webp",
      },
    ],
    April: [
      {
        name: "Ram Navami",
        date: "17 April",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Mahavir Jayanti",
        date: "21 April",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Good Friday",
        date: "26 April",
        src: "/Festivals/Diwali.webp",
      },
    ],
    May: [
      {
        name: "Eid-ul-Fitr",
        date: "10 May",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Buddha Purnima",
        date: "23 May",
        src: "/Festivals/Diwali.webp",
      },
    ],
    June: [
      {
        name: "Ganga Dussehra",
        date: "17 June",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Rath Yatra",
        date: "28 June",
        src: "/Festivals/Diwali.webp",
      },
    ],
    July: [
      {
        name: "Guru Purnima",
        date: "21 July",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Eid-ul-Adha (Bakrid)",
        date: "28 July",
        src: "/Festivals/Diwali.webp",
      },
    ],
    August: [
      {
        name: "Independence Day",
        date: "15 August",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Raksha Bandhan",
        date: "19 August",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Janmashtami",
        date: "26 August",
        src: "/Festivals/Diwali.webp",
      },
    ],
    September: [
      {
        name: "Ganesh Chaturthi",
        date: "7 September",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Anant Chaturdashi",
        date: "16 September",
        src: "/Festivals/Diwali.webp",
      },
    ],
    October: [
      {
        name: "Gandhi Jayanti",
        date: "2 October",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Navratri Begins",
        date: "3 October",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Dussehra",
        date: "12 October",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Karva Chauth",
        date: "20 October",
        src: "/Festivals/Diwali.webp",
      },
    ],
    November: [
      {
        name: "Diwali",
        date: "1 November",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Govardhan Puja",
        date: "2 November",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Bhai Dooj",
        date: "3 November",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Chhath Puja",
        date: "9 November",
        src: "/Festivals/Diwali.webp",
      },
      {
        name: "Guru Nanak Jayanti",
        date: "15 November",
        src: "/Festivals/Diwali.webp",
      },
    ],
    December: [
      {
        name: "Christmas",
        date: "25 December",
        src: "/Festivals/Diwali.webp",
      },
    ],
  };

  return (
    <div className="festivalsContainer">
      <h3 className="pageHeading">Indian Festivals</h3>
      <section>
        <div className="monthContainer">
          <span className="monthName">January</span>
          <div className="cardWrapper">
            {Festivals.January.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">February</span>
          <div className="cardWrapper">
            {Festivals.February.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">March</span>
          <div className="cardWrapper">
            {Festivals.March.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">April</span>
          <div className="cardWrapper">
            {Festivals.April.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">May</span>
          <div className="cardWrapper">
            {Festivals.May.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">June</span>
          <div className="cardWrapper">
            {Festivals.June.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">July</span>
          <div className="cardWrapper">
            {Festivals.July.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">August</span>
          <div className="cardWrapper">
            {Festivals.August.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">September</span>
          <div className="cardWrapper">
            {Festivals.September.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">October</span>
          <div className="cardWrapper">
            {Festivals.October.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">November</span>
          <div className="cardWrapper">
            {Festivals.November.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
        <div className="monthContainer">
          <span className="monthName">December</span>
          <div className="cardWrapper">
            {Festivals.December.map((elem) => {
              return (
                <FestivalCard
                  img={elem.src}
                  name={elem.name}
                  date={elem.date}
                  key={elem.name}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festivals;
