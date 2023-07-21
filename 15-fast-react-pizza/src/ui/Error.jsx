/* eslint-disable no-unused-vars */
import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  // const navigate = useNavigate();
  const error = useRouteError();
  console.log('err: ',error );

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
