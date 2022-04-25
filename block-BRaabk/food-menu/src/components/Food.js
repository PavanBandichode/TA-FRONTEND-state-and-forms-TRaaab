function Food(props) {
  return (
    <div>
      {props.map((x) => (
        <img src={x.img} alt={x.id} />
      ))}
    </div>
  );
}
export default Food;
