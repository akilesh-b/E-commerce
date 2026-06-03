const Dashboard = () => {

  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Welcome {user?.name}
      </h1>

    </div>
  );
};

export default Dashboard;