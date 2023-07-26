function Greetings(props) {
  let hello;
  if (props.lang === "de") {
    hello = "Hallo";
  } else if (props.lang === "en") {
    hello = "hello";
  } else if (props.lang === "es") {
    hello = "holla";
  } else hello = "bonjour";
  return (
    <div className="greetings">
      {hello} {props.children}
    </div>
  );
}

export default Greetings;
