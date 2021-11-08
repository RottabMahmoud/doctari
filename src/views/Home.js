import React, { useEffect } from "react";
import Header from "../components/Header";
import UserList from "../components/UserList.js";
import axios from "axios";

function Home() {
  /**
   * Our list of Data **STATE, using React Hooks.
   */
  const [data, setData] = React.useState([
    {
      id: 0,
      name: "Alex Heinrich",
      address: "Plauener Weg 22",
      zip: "62000 Neustadt",
    },
    {
      id: 1,
      name: "Sandra Abendroth",
      address: "Fischerinsel 4",
      zip: "41063 Mönchengladbach Eicken",
    },
    {
      id: 2,
      name: "Janina Freytag",
      address: "Ziegelstr. 22",
      zip: "94149 Kößlarn",
    },
    {
      id: 3,
      name: "Frank Schuhmacher",
      address: "Güntzelstrasse 94",
      zip: "54668 Prümzurlay",
    },
    {
      id: 4,
      name: "Christin Finkel",
      address: "Eschenweg 45",
      zip: "98536 Zella-Mehlis",
    },
    {
      id: 5,
      name: "Daniela Hertz",
      address: "Grolmanstraße 82",
      zip: "82386 Huglfing",
    },
    {
      id: 6,
      name: "Dominik Koertig",
      address: "Karl-Liebknecht-Strasse 14",
      zip: "28832 Achim",
    },
    {
      id: 7,
      name: "Peter Schmidt",
      address: "Bleibtreustraße 87",
      zip: "79865 Grafenhausen",
    },
    {
      id: 8,
      name: "Mathias Lehrer",
      address: "Luebeckertordamm 43",
      zip: "82386 Huglfing",
    },
    {
      id: 9,
      name: "Tim Waechter",
      address: "Ziegelstr. 45",
      zip: "84389 Postmünster",
    },
    {
      id: 10,
      name: "Kristian Ehrlichmann",
      address: "Los-Angeles-Platz 61",
      zip: "23752 Oldenburg",
    },
    {
      id: 11,
      name: "Heike Berg",
      address: "Marseiller Strasse 91",
      zip: "82386 Huglfing",
    },
    {
      id: 12,
      name: "Christin Finkel",
      address: "Eschenweg 45, Invalidenstrasse 8",
      zip: "98536 Zella-Mehlis",
    },
    {
      id: 13,
      name: "Ulrich Herzog",
      address: "Postfach 12345",
      zip: "66919 Hermersberg",
    },
    {
      id: 14,
      name: "Dieter Kluge",
      address: "Inge Beisheim Platz 85",
      zip: "21727 Estorf",
    },
    {
      id: 15,
      name: "Anja Finkel",
      address: "Konstanzer Strasse 78",
      zip: "87725 Babenhausen",
    },
    {
      id: 16,
      name: "Felix Duerr",
      address: "Potsdamer Platz 68",
      zip: "85113 Böhmfeld",
    },
    {
      id: 17,
      name: "Stephan Schmid",
      address: "Kantstrasse 24",
      zip: "90453 Nürnberg",
    },
    {
      id: 18,
      name: "Tina Tester",
      address: "Testweg 123",
      zip: "123456 Teststadt",
    },
  ]);

  const setDataWithNewGeoLocation = (x) => {
    // let temp = [];
    const headers = {
      address: "94149 Kößlarn",
      key: "AIzaSyBIHWg56dGw3SWOMH-8k9_NPa_wyFVoPuo",
    };
    axios({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${headers.address}&key=${headers.key}`,
      method: "get",
      // headers: {
      // address: "62000 Neustadt",
      // "Content-Type": "application/json",
      // },
    })
      .then((response) => {
        console.log(response.data.results);
        // [0].formatted_address
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Use effect to fetch the data once the component is rendered
   */
  useEffect(() => {
    setDataWithNewGeoLocation(data);
  }, [data]);

  return (
    <div>
      {/* Our Header */}
      <Header />
      {/* Our Product List */}
      <UserList data={data} />
    </div>
  );
}

export default Home;
