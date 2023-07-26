function Random(props) {
  const { min, max } = props;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  const arrow = "=>";
  return (
    <div>
      Random value between {min} and {max} {arrow} {num}
    </div>
  );
}

export default Random;
