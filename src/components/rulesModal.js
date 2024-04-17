import Modal from "./modal";
import Dice from "./dice";

const JipsyText = () => (
  <>
    <h3>Principes</h3>
    <div>Garder au moins 1 dé par lancer</div>
    <div>
      <b>Objectifs:</b> faire moins de 10 ou plus de 25
    </div>
    <h4>la somme totale des dés est entre 10 et 25 (non compris)</h4>
    <div>
      Le joueur perd un nombre de PV égal à la différence entre la somme des 5
      dés et l'objectif le plus proche
    </div>
    <hr />
    <i>
      <b>Ex:</b> Titouan fait 23 (6 + 6 + 6 + 2 + 3), il perd 2PV (25 - 23)
    </i>
    <h4>
      la somme totale des dés est supérieure ou égale à 25 ou inférieur ou égale
      à 10
    </h4>
    <div>
      Le joueur gagne un nombre de PV égal à la différence entre la somme des 5
      dés et l'objectif le plus proche. Il choisit ensuite qui attaquer et lance
      les dés. Tant qu'il obtient des dés avec le résultat obtenu, il les garde
      et relance les autres. Si il n'obtient pas de dé avec le résultat, son
      attaque s'arrête. L'attaqué perd la somme des dés obtenus.
    </div>
    <hr />
    <i>
      <b>Ex:</b> Titouan fait 8 (1 + 2 + 1 + 2 + 2), il gagne 2PV (10 - 8). Il
      décide d'attaquer Spiruline. Son premier lancer est (5 + 4 + 2 + 3 + 4).
      Il garde alors le (2) et relance les 4 autres dés. Il obtient (2 + 4 + 6 +
      6). Il garde un (2) supplémentaire et relance. Il n'obtient pas de 2 sur
      son troisième lancer, son attaque s'arrête donc et Spiruline perd 4PV (2 x
      2).
    </i>
    <hr />
    <i>
      <b>NB:</b> Si Titouan avait réussi à faire 5 dés à 2, il pouvait alors
      continuer à relancer le dernier dé et continuer à enlever des PV à
      Spiruline tant qu'il faisait des 2
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
);

const FourTwentyOneText = () => {
  const figures = [
    { dice1: 4, dice2: 2, dice3: 1, tokens: "10 jetons" },
    { dice1: 1, dice2: 1, dice3: 1, tokens: "7 jetons" },
    { dice1: 6, dice2: 1, dice3: 1, tokens: "6 jetons" },
    { dice1: 6, dice2: 6, dice3: 6, tokens: "6 jetons" },
    { dice1: 5, dice2: 1, dice3: 1, tokens: "5 jetons" },
    { dice1: 5, dice2: 5, dice3: 5, tokens: "5 jetons" },
    { dice1: 4, dice2: 1, dice3: 1, tokens: "4 jetons" },
    { dice1: 4, dice2: 4, dice3: 4, tokens: "4 jetons" },
    { dice1: 3, dice2: 1, dice3: 1, tokens: "3 jetons" },
    { dice1: 3, dice2: 3, dice3: 3, tokens: "3 jetons" },
    { dice1: 2, dice2: 1, dice3: 1, tokens: "2 jetons" },
    { dice1: 2, dice2: 2, dice3: 2, tokens: "2 jetons" },
    { dice1: 6, dice2: 5, dice3: 4, tokens: "2 jetons" },
    { dice1: 5, dice2: 4, dice3: 3, tokens: "2 jetons" },
    { dice1: 4, dice2: 3, dice3: 2, tokens: "2 jetons" },
    { dice1: 3, dice2: 2, dice3: 1, tokens: "1 jeton" },
  ];

  return (
    <>
      <h3>Combinaisons</h3>
      <></>
      La combinaison la plus faible 2,2,1 est nommée « nénette ». Peu importe la
      meilleure combinaison faite ou pas, celui qui fait une « nénette » reçoit
      d'office 2 jetons.
      <hr />
      Ordre des valeurs du 421 : as, six, cinq, quatre, trois et deux. L'as
      étant le plus fort.
      <hr />
      Combinaisons du 421 par ordre de valeur. De la meilleure à la moins bonne
      :
      <table>
        <tbody>
          {figures.map((f) => (
            <tr>
              <td>
                <Dice number={f.dice1} />
              </td>
              <td>
                <Dice number={f.dice2} />
              </td>
              <td>
                <Dice number={f.dice3} />
              </td>
              <td>{f.tokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
      Autres combinaisons du + au -: 1 jeton
      <h3>Comment jouer au 421</h3>
      On joue au 421 en deux manches, la « charge » et la « décharge ».
      L'ensemble des jetons est appelé le « pot ». Au début de la première
      partie, (la charge), les joueurs vont se répartir les 21 jetons avec
      l'espoir d'en récupérer le moins possible. Lors de la deuxième partie, (la
      décharge), les joueurs devront se débarrasser du plus possible de jetons.
      Le joueur démarrera la partie en lançant les trois dés. Pour chacun des
      trois dés il peut choisir de relancer ou non. S'il décide de ne pas
      relance il aura effectué qu'un seul lancer. Le joueur peut, si il le
      désire, relancer une deuxième et une troisième fois tout ou une partie des
      trois dés. Les autres joueurs devront effectuer le même nombre de lancers
      que le premier joueur.
      <hr />
      Si le deuxième joueur réussis un 421 au premier lancer, il devra relancer
      tout de même les dés afin de respecter les trois lancers. Dans certaines
      variantes cette règle peuvent être assouplie. Quand un joueur est
      satisfait de sa combinaison il peut taper sur la table en disant « le bon
      ». Cela lui permet de valider sa combinaison sans avoir à faire le même
      nombre de lancer que le premier joueur. Le nombre maximum de lancer reste
      toujours de trois. Cette variante doit être annoncé avant le début de la
      partie afin que tous les joueurs soit d'accord sur les règles. Au cours de
      (la charge), celui qui aura fait la moins bonne combinaison recevra les
      jetons du « pot ». Le nombre de jetons distribué au joueur est déterminé
      par la meilleure combinaison.
    </>
  );
};

function RulesModal({
  showInstructionModal,
  setShowInstructionModal,
  is421Mode,
}) {
  return (
    <Modal
      isShowing={showInstructionModal}
      title="Règles"
      text={!is421Mode ? <JipsyText /> : <FourTwentyOneText />}
      confirm={() => setShowInstructionModal(false)}
    />
  );
}

export default RulesModal;
