import "./Title.css";
const Title = ({title}) => {
//   const { title } = props;
//   console.log(title);
  const myStyle = {
    color: "blue",
    fontSize: "25px",
  };

  return (
    <>
      <div className="card-body">
        <h2 className="card-title my-custom-class">{title ? title : "No Title"}</h2>
        <p style={myStyle}>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Title;
