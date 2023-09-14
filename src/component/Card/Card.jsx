import Image from "./Image";
import Title from "./Title";
import Views from "./Views";

const Card = ({title,views}) => {
    // const {title,views} = props;
// console.log(props);
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
      <Image></Image>
      <Views views={views}></Views>
      <Title title = {title}></Title>
      </div>
    </>
  );
};

export default Card;
