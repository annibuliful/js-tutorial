function TestConditionalComponent(props) {
  const isEven = props.testNumber % 2 === 0;

  //   if (isEven) {
  //     return <p>{props.number} is Even Number</p>;
  //   } else {
  //     return <p>{props.number} is Odd Number</p>;
  //   }

  const isRed = props.bgColor === "red";

  const textColor = isRed ? "white" : "black";

  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <p style={{ color: textColor }}>
        {props.testNumber} is {isEven ? "Even" : "Odd"} Number
      </p>
    </div>
  );
}

export default TestConditionalComponent;
