type Props = {
  onClick: () => void;
};

const LottoNumbers = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>Generate Lotto Numbers</button>
    </>
  );
};

export default LottoNumbers;
