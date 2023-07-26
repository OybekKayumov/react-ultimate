import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

function Cabins() {

  // get cabins from supabase
  // useEffect(function () {
  //   getCabins().then(data => console.log('cabins data: ', data ))
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>

        {/* <img src="https://ffglytqkuxpsyimghhhi.supabase.co/storage/v1/object/?public/cabin-omages/cabin-001.jpg" alt="cabin img" /> */}
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
