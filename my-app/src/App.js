import Card from "./components/Card";
import CardTwo from "./components/CardTwo";
import testImage from "./assets/test-image.jpg";
import TestCondition from "./components/Conditional-Rendering";
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
      {/* <img
        src={testImage}
        alt="aaa"
        style={{ width: "90px", height: "90px" }}
      />
      <CardTwo
        cardContent="Test Content1"
        cardImage="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
      />
      <CardTwo
        cardContent="Test Content2"
        cardImage="https://camo.githubusercontent.com/95e6d1733ff210918503348ec0a8646d376ade430501c1f670a652367702fc52/68747470733a2f2f63646e2e7261776769742e636f6d2f7075626b65792f727864622f62613763396238302f646f63732f66696c65732f6c6f676f2f6c6f676f5f746578742e737667"
      /> */}
      {/* <Card /> */}
      {/* <Grid /> */}
      <TestCondition testNumber={2} bgColor={"orange"} />
      <TestCondition testNumber={3} bgColor={"red"} />
    </div>
  );
}

export default App;
