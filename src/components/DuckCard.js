import '../App.css';
import up from '../up.png';
import down from '../down.png';

const DuckCard = ({data, loggedIn, setmodOpen}) => {
  return (
    <div className="duck_card">
      <h3>{data.headline}</h3>
      <img className="duck_image" src={data.image} alt="duckie" />
      <div className="stats">
        <button onClick={() => !loggedIn ? setmodOpen(true) : console.log('Vote!')} className="arrow_button">
          <img className="arrow" src={up} alt="up" />
        </button>
        <p>{data.upvotes}</p>
        <button disabled={!loggedIn} className="arrow_button">

          <img className="arrow" src={down} alt="down" />
        </button>
      </div>
    </div>
  )
};

export default DuckCard;