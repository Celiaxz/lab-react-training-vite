function Idcard(props) {
  return (
    <div className="id-card">
      <div className="picture">
        <img src={props.picture} alt="" />
      </div>
      <div className="content">
        <div className="firstName"> First name: {props.firstName}</div>
        <div className="lastName">Last name: {props.lastName}</div>
        <div className="gender">Gender: {props.gender}</div>
        <div className="height">Height: {props.height}</div>
        <div className="birth">Birth: {props.birth}</div>
      </div>
    </div>
  );
}

export default Idcard;
