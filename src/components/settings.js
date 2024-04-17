import styled from "styled-components";
import PandaIcon from "../icon/pandaIcon";
import OverviewIcon from "../icon/overviewIcon";
import QuestionIcon from "../icon/questionIcon";
import Switch from "react-switch";
import ToastIcon from "../icon/toastIcon";
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

const Item = ({ onClick, label, checked, icon }) => {
  return (
    <StyledItem onClick={onClick}>
      <StyledContainer>
        {icon} {label}
      </StyledContainer>
      {checked !== undefined && (
        <Switch checked={checked} onChange={() => {}} />
      )}
    </StyledItem>
  );
};

const Settings = ({
  onLayoutClick,
  onPandaClick,
  onQuestionClick,
  grid,
  isPandaMode,
  is421Mode,
  on421Click,
  isToasterEnable,
  onEnableToasterClick,
}) => {
  const itemsData = [
    {
      onClick: onLayoutClick,
      label: "Disposition en grille",
      checked: !grid,
      icon: <OverviewIcon />,
    },
    {
      onClick: onPandaClick,
      label: "Thème des pandas",
      checked: isPandaMode,
      icon: <PandaIcon />,
    },
    {
      onClick: on421Click,
      label: "Mode 421",
      checked: is421Mode,
      icon: <DiceIcon />,
    },
    {
      onClick: onEnableToasterClick,
      label: "Toaster",
      checked: isToasterEnable,
      icon: <ToastIcon />,
    },
    {
      onClick: onQuestionClick,
      label: "Règles",
      icon: <QuestionIcon />,
    },
  ];
  return (
    <div>
      {itemsData.map((item, index) => (
        <Item
          key={index} // Utilisation de l'index comme clé (peut être amélioré si les données sont uniques)
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
