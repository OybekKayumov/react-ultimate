/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({order}) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        Make Priority
      </Button>
    </fetcher.Form>
  )
}

export async function action({request, params }) {
  // console.log('update: ', );

  const data = {priority : true };

  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder