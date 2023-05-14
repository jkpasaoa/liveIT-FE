import NewSnack from "../Components/NewSnack";

function New() {
  return (
    <div className="New" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>New Snacks to Eat</h2>
      <NewSnack />
    </div>
  );
}

export default New;
