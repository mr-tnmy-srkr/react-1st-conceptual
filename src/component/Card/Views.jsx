// const views = "100k";
/* const views = {
  view: "100k",
}; */

const myResult = (a, b) => {
  return a + b;
};

const Views = (props) => {
  const { views: test } = props;
  // console.log(views);
  return (
    <>
      <p>
        Views : {test || "no views"} & {myResult(100, 200)}K
      </p>
    </>
  );
};

export default Views;
