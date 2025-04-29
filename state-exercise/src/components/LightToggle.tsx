type Props = {
  onClick: () => void;
}

const LightToggle = (props: Props) => {
  return (
    <>
      <button onClick={props.onClick}>Toggle Lights</button>
    </>
  );
};

export default LightToggle;
