import Modal from "./modal";

function ResetModal({ showResetModal, setShowResetModal, resetPlayers }) {
  return (
    <Modal
      isShowing={showResetModal}
      cancel={() => setShowResetModal(false)}
      text="Souhaitez vous réinitialiser la partie ?"
      confirm={() => {
        resetPlayers();
        setShowResetModal(false);
      }}
    />
  );
}

export default ResetModal;
