import DuckCard from "./DuckCard";



const Ducks = (props) => {
  const {images} = props;
  const imgArr = images && Object.entries(images).sort((a, b) => b[1].upvotes - a[1].upvotes);
  return (
    imgArr && imgArr.length > 0 ? imgArr.map((i) => {
    return (<DuckCard data={i[1]} key={i[0]} {...props} id={i[0]}/>)
  }) : null
  );
}

export default Ducks;