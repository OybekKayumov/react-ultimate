import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

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

        <Button
          onClick={() => setShowForm(show => !show)}
        >
          Add New Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
