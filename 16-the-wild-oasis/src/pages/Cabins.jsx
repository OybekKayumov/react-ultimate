/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {

  // get cabins from supabase
  // useEffect(function () {
  //   getCabins().then(data => console.log('cabins data: ', data ))
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>

        {/* <img src="https://ffglytqkuxpsyimghhhi.supabase.co/storage/v1/object/?public/cabin-omages/cabin-001.jpg" alt="cabin img" /> */}
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
