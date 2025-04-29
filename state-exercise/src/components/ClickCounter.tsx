type Props = {
  onClick: () => void;
};

const ClickCounter = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>Increment Counter</button>
    </>
  );
};

export default ClickCounter;
