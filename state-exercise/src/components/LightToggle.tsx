type Props = {
  onClick: () => void;
};

const LightToggle = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>Toggle Lights</button>
    </>
  );
};

export default LightToggle;
