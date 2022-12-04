import Modal from "./modal";

function RulesModal({
  showInstructionModal,
  setShowInstructionModal,
}) {
  return (
    <Modal
      isShowing={showInstructionModal}
      title="Règles"
      text={
        <>
          <h3>Principes</h3>
          <div>Garder au moins 1 dé par lancer</div>
          <div>
            <b>Objectifs:</b> faire moins de 10 ou plus de 25
          </div>
          <h4>la somme totale des dés est entre 10 et 25 (non compris)</h4>
          <div>
            Le joueur perd un nombre de PV égal à la différence entre la somme
            des 5 dés et l'objectif le plus proche
          </div>
          <hr />
          <i>
            <b>Ex:</b> Titouan fait 23 (6 + 6 + 6 + 2 + 3), il perd 2PV (25 -
            23)
          </i>
          <h4>
            la somme totale des dés est supérieure ou égale à 25 ou inférieur ou
            égale à 10
          </h4>
          <div>
            Le joueur gagne un nombre de PV égal à la différence entre la somme
            des 5 dés et l'objectif le plus proche. Il choisit ensuite qui
            attaquer et lance les dés. Tant qu'il obtient des dés avec le
            résultat obtenu, il les garde et relance les autres. Si il n'obtient
            pas de dé avec le résultat, son attaque s'arrête. L'attaqué perd la
            somme des dés obtenus.
          </div>
          <hr />
          <i>
            <b>Ex:</b> Titouan fait 8 (1 + 2 + 1 + 2 + 2), il gagne 2PV (10 -
            8). Il décide d'attaquer Spiruline. Son premier lancer est (5 + 4 +
            2 + 3 + 4). Il garde alors le (2) et relance les 4 autres dés. Il
            obtient (2 + 4 + 6 + 6). Il garde un (2) supplémentaire et relance.
            Il n'obtient pas de 2 sur son troisième lancer, son attaque s'arrête
            donc et Spiruline perd 4PV (2 x 2).
          </i>
          <hr />
          <i>
            <b>NB:</b> Si Titouan avait réussi à faire 5 dés à 2, il pouvait
            alors continuer à relancer le dernier dé et continuer à enlever des
            PV à Spiruline tant qu'il faisait des 2
          </i>

          <h3>Figures</h3>
          <div>
            <b>Suite sèche:</b> +3PV et attaques aux 3
          </div>
          <div>
            <b>Yams:</b> +5PV et attaques aux 5
          </div>
          <div>
            <b>Full sec:</b> +1PV et attaques aux 1 tous les autres
          </div>
        </>
      }
      confirm={() => setShowInstructionModal(false)}
    />
  );
}

export default RulesModal;
