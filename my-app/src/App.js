import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
// function Card() {
//   return <div>Tar</div>;
// }

function Grid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20% 20%",
        alignItems: "center",
      }}
    >
      <div>
        <img
          alt="aaa"
          src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      <div>
        <p>Title</p>
        <p>sub Title</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ width: "50vw", margin: "20px auto" }}>
      <CardTwo />
      {/* <Card /> */}
      {/* <Grid /> */}
    </div>
  );
}

export default App;
