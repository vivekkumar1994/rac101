import React,{useEffect} from "react";
import Data from "./Data";

const Showdata = ({ Name, age, Location, dept, marry, Salary,setempData }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(` http://localhost:8000/employee`);
        let data = await res.json();
        setempData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <tr>
      <td>{Name}</td>
      <td>{age}</td>
      <td>{Location}</td>
      <td>{dept}</td>
      <td>{Salary}</td>
      <td>{marry ? "Married" : "Not Married"}</td>
    </tr>
  );
};

export default Showdata;