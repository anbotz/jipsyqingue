import Settings from "../components/settings";

const OptionScreen = ({ option, setOption, goHome }) => {
  return <Settings {...{ option, setOption, goHome }} />;
};

export default OptionScreen;
