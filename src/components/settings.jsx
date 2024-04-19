import styled from "styled-components";
import PandaIcon from "../icon/panda";
import OverviewIcon from "../icon/overview";
import Switch from "react-switch";
import ToastIcon from "../icon/toast";
import UnlimitedIcon from "../icon/unlimited";
import DiceIcon from "../icon/dices";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border-radius: 0 0 20px 0;
  height: 72px;

  padding: 2px 20px;

  :hover {
    background-color: #e6e6e6;
  }
`;

const Item = ({ onClick, label, checked, icon, tab, hidden }) => {
  return (
    <StyledItem onClick={onClick} tab={tab} hidden={hidden}>
      <StyledContainer>
        {icon} {label}
      </StyledContainer>
      {checked !== undefined && (
        <Switch checked={checked} onChange={() => {}} />
      )}
    </StyledItem>
  );
};

const Settings = ({ option, setOption, goHome }) => {
  const { is421NoLimitMode, isToasterEnable, isPandaMode, gridLayout } = option;

  const updateOption = (value) => {
    const updatedOption = {
      ...option,
      [value]: !option[value],
    };
    setOption(updatedOption);

    localStorage.setItem("option", JSON.stringify(updatedOption));
  };

  const itemsData = [
    {
      onClick: () => updateOption("gridLayout"),
      label: "Disposition en grille",
      checked: gridLayout,
      icon: <OverviewIcon />,
    },
    {
      onClick: () => updateOption("isPandaMode"),
      label: "Thème des pandas",
      checked: isPandaMode,
      icon: <PandaIcon />,
    },
    {
      onClick: () => updateOption("is421NoLimitMode"),
      label: "Variant du 421 : No limite",
      checked: is421NoLimitMode,
      icon: <UnlimitedIcon />,
    },
    {
      onClick: () => updateOption("isToasterEnable"),
      label: "Toaster",
      checked: isToasterEnable,
      icon: <ToastIcon />,
    },
    {
      onClick: goHome,
      label: "Changer de jeu",
      icon: <DiceIcon />,
    },
  ];

  return (
    <div>
      {itemsData.map((item, index) => (
        <Item
          key={index}
          onClick={item.onClick}
          label={item.label}
          checked={item.checked}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Settings;
