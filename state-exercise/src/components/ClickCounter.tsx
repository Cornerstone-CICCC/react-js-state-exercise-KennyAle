type Props = {
  onClick: () => void;

}

const ClickCounter = (props: Props) => {
  return (
    <>
      <button onClick={props.onClick}>Increment Counter</button>
    </>
  );
};

export default ClickCounter;
