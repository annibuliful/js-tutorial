import "./style.css";

// https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png
function CardTwo(properties) {
  console.log(properties);
  return (
    <div
      className="card-container"
      style={{ backgroundColor: properties.bgColor }}
    >
      <div className="card-header">
        <img alt="aaa" src={properties.cardImage} className="image-center" />
      </div>

      <div className="card-content">{properties.cardContent}</div>
    </div>
  );
}
export default CardTwo;
