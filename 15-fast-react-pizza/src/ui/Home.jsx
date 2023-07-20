import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    // mb-10 mt-10 = my-10
    <div className="my-10 sm:my-16 text-center"> 
      <h1 className="text-xl font-semibold mb-8">
        The best pizza.
        <br />
        <span className="text-emerald-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
