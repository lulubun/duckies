import DuckCard from "./DuckCard";



const Ducks = (props) => {
  const {images} = props;
  const imgArr = Object.keys(images)
  return (
    imgArr.length > 0 ? imgArr.map((i) => {
    return (<DuckCard data={images[i]} key={i} {...props} />)
  }) : null
  );
}

export default Ducks;