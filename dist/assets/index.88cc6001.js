import {
  r as l,
  a as m,
  j as r,
  b as e,
  L as c,
  R as h,
  P as v,
  u as x,
  c as b,
  d as f,
  e as w,
  f as d,
  g as E,
  H as q,
} from "./vendor.453312c8.js";
const N = function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) t(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && t(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerpolicy && (o.referrerPolicy = a.referrerpolicy),
      a.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = n(a);
    fetch(a.href, o);
  }
};
N();
const y = [
    { path: "/rules", name: "Rules", img: 125 },
    { path: "/heroes", name: "Heroes", img: 5 },
    { path: "/battleground", name: "Battleground", img: 13 },
    { path: "/contact", name: "Contact", img: 4 },
  ],
  P = () => {
    const i = {
        method: "GET",
        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks",
        headers: {
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
        },
      },
      [s, n] = l.exports.useState([]);
    l.exports.useEffect(() => {
      m.request(i)
        .then((u) => u.data)
        .then((u) => n(u));
    }, []);
    const [t, a] = l.exports.useState(!1),
      o = () => {
        a(!t);
      };
    return (
      console.log(t),
      r("div", {
        id: "logoOpenMenu",
        children: [
          r("div", {
            onClick: () => o(),
            "aria-hidden": !0,
            onKeyDown: o,
            id: "menu",
            className: `flex justify-center items-center overflow-hidden transition-all ease-in-out duration-500 fixed w-full top-12 ${
              t ? "h-screen" : "h-0"
            }`,
            children: [
              e("img", {
                src: "./images/battleground1.png",
                alt: "menu",
                className: "w-full",
              }),
              s.length &&
                e("div", {
                  id: "menu-div-content",
                  className:
                    "absolute flex items-center justify-center w-4/5 mb-14",
                  children: y.map((u, g) =>
                    e(
                      "div",
                      {
                        id: "content-card1",
                        className:
                          "flex justify-center items-center ml-4 animate-[float_2s_ease-in-out_infinite]",
                        children: r(c, {
                          onClick: () => o(),
                          "aria-hidden": !0,
                          onKeyDown: o,
                          to: u.path,
                          className:
                            "flex justify-center items-center text-2xl	",
                          children: [
                            e("h1", {
                              className: `cursor text-white absolute text-center text-1 ${
                                t ? "block" : "hidden"
                              }`,
                              children: u.name,
                            }),
                            e("img", {
                              src: s[u.img].img,
                              alt: "card1",
                              className: ` ${t ? "block" : "hidden"}`,
                            }),
                          ],
                        }),
                      },
                      g
                    )
                  ),
                }),
            ],
          }),
          e("img", {
            onClick: () => o(),
            "aria-hidden": !0,
            onKeyDown: o,
            src: "./images/logo-wild-heartstone.png",
            alt: "logoOpen",
            className:
              "w-100 cursor-pointer my-0 mx-auto mt-12 fixed left-1/2 -translate-x-1/2 -translate-y-1/2",
          }),
        ],
      })
    );
  },
  L = () =>
    r("div", {
      className: "content-center justify-center bg-[#B2915F] pt-28",
      children: [
        r("h1", {
          className: "mb-10 text-6xl text-center font-['.font/Belwe Bold.otf']",
          children: ["R\xE8gles du Jeu", " "],
        }),
        r("div", {
          className:
            "flex flex-col mx-10 ml-10 space-y-4 text-2xl font-['./font/Belwe Bold.otf']",
          children: [
            e("p", {
              children: `Apr\xE8s avoir choisi une des 9 classes jouables du jeu, les joueurs
          utilisent un deck de 30 cartes. Il peut \xEAtre compos\xE9 de deux
          exemplaires d'une carte simple. En revanche, il contient une seule
          unit\xE9 de carte l\xE9gendaire. Le deck peut contenir plusieurs cartes
          l\xE9gendaires pour autant qu'elles soient diff\xE9rentes. Il doit \xEAtre
          compos\xE9 \xE0 la fois de cartes identiques \xE0 toutes les classes et de
          cartes sp\xE9cifiques \xE0 la classe choisie.`,
            }),
            e("p", {
              children: `Au premier tour, les joueurs re\xE7oivent 4 cartes. Ils peuvent modifier
          certaines d'entre-elles afin d'\xE9viter d'avoir de grosses cartes
          impossibles \xE0 jouer en d\xE9but de partie.`,
            }),
            e("img", {
              className: "mx-auto",
              src: "/images/Changement cartes.png",
              alt: "changcard",
            }),
            r("p", {
              children: [
                " Un tirage au sort d\xE9finit le joueur qui d\xE9butera la partie.",
                e("br", {}),
                `La ressource utilis\xE9e dans le jeu est le cristal de mana. Il est
          repr\xE9sent\xE9 sur les cartes par la gemme bleue qui se trouve en haut \xE0
          gauche de la carte. Il est utilis\xE9 pour invoquer les serviteurs, les
          sorts et utiliser le pouvoir des h\xE9ros ainsi que l'\xE9quipement.`,
                e("br", {}),
              ],
            }),
            e("img", {
              className: "mx-auto",
              src: "./images/explecard.png",
              alt: "excard",
            }),
            e("p", {
              children: `Vous d\xE9butez la partie avec un point de cristal de mana. A chaque
          tour, vous recevez un point de mana suppl\xE9mentaire. Le maximum de
          cristaux de mana collect\xE9 dans le jeu est de 10.`,
            }),
            e("img", {
              className: "object-cover mx-auto ",
              src: "./images/barremanaoff.png",
              alt: "barremana",
            }),
            r("p", {
              children: [
                `Chaque h\xE9ros dispose d'une comp\xE9tence propre qui lui co\xFBte 2 cristaux
          de mana.`,
                e("br", {}),
                "Le h\xE9ros peut utiliser sa comp\xE9tence \xE0 chaque tour.",
                e("br", {}),
                ` Le h\xE9ros s'accompagne de serviteurs dans la bataille gr\xE2ce \xE0 des
          cartes serviteurs. Ceux-ci restent sur le champ de bataille et
          combattent pour le h\xE9ros. Ils arrivent endormis sur le plateau de jeu
          et commencent \xE0 combattre au tour suivant. Le serviteur endormi et ne
          pouvant combattre est repr\xE9sent\xE9 par un "z" sur le plateau de jeu.`,
                e("br", {}),
              ],
            }),
            e("p", {
              children: `Le serviteur attaque l'adversaire \xE0 concurrence du nombre indiqu\xE9 sur
          la gemme jaune flanqu\xE9e d'une \xE9p\xE9e en bas \xE0 gauche de la carte.`,
            }),
            e("img", {
              className: "mx-auto",
              src: "./images/Alura.png",
              alt: "alura",
            }),
            r("p", {
              children: [
                "La vie d'une carte est repr\xE9sent\xE9e par la gemme rouge en bas \xE0 droite.",
                e("br", {}),
                `Le serviteur peut avoir une comp\xE9tence particuli\xE8re. Elle est alors
          repr\xE9sent\xE9e par une ic\xF4ne brillante.`,
                e("br", {}),
                `Le serviteur peut avoir un sous-type (b\xEAte, dragon, murloc, pirate,
          d\xE9mon) qui l'influence.`,
                e("br", {}),
                "Le serviteur dispose d'une comp\xE9tence fr\xE9quente et non fr\xE9quente.",
                e("br", {}),
                `La premi\xE8re n'est pas d\xE9finie sur la carte comme Provocation (Taunt),
          Cri de bataille (Battlecry),.... Elle est donc \xE0 conna\xEEtre.`,
                e("br", {}),
                "La seconde est celle sp\xE9cifi\xE9e sur la carte.",
                e("br", {}),
                "Les cartes de sort n'ont pas de valeur d'attaque ou de vie. ",
                e("br", {}),
                "Elles sont jou\xE9es une seule fois et ensuite, elles sont perdues.",
                e("br", {}),
                "Les cartes d'arme/\xE9quipement ont une valeur d'attaque et de vie.",
                e("br", {}),
                `Le h\xE9ros utilise des cristaux de mana pour pouvoir porter cet
          \xE9quipement.`,
                e("br", {}),
                `Quand le h\xE9ros porte un \xE9quipement, la carte de celui-ci perd un point
          de durabilit\xE9 \xE0 chaque fois que le h\xE9ros frappe.`,
                e("br", {}),
                `Il existe une diff\xE9rence entre les cartes portant une gemme en leur
          centre et les autres.`,
                e("br", {}),
                `Ces derni\xE8res sont des cartes basiques. Les autres sont des cartes
          plus pr\xE9cieuses. La couleur de la gemme indique la raret\xE9 de la carte.`,
                e("br", {}),
              ],
            }),
            e("img", {
              className: "mx-auto",
              src: "./images/Assassinate.png",
              alt: "Assasinate",
            }),
            e("p", {
              children: `Le fond de la carte de sort d\xE9termine la classe \xE0 laquelle elle
          appartient. Ainsi : pourpre est pour le D\xE9moniste, le bleu-vert pour
          le Mage, le bleu pour le Chaman, le noir pour le Voleur, le brun fonc\xE9
          pour le Guerrier, le brun clair pour le Druide, le blanc pour le
          Pr\xEAtre, le vert pour le Chasseur et le rose pour le Paladin. Le fond
          de couleur gris indique que la carte n'est d\xE9di\xE9e \xE0 aucune classe.`,
            }),
          ],
        }),
      ],
    }),
  C = () => {
    const [i, s] = h.useState("");
    function n(o) {
      s(o.target.value);
    }
    function t() {
      sessionStorage.setItem("user", i);
    }
    function a() {
      sessionStorage.setItem("user", "Invit\xE9");
    }
    return r("form", {
      className: "p-4 border-2 border-blue-500 rounded bg-black/25 w-72",
      children: [
        e("div", {
          className: "py-8 ",
          children: e("input", {
            type: "text",
            placeholder: "Username",
            onChange: n,
            className:
              "w-full p-3 text-center border-2 border-blue-500 rounded hover:border-yellow-400",
          }),
        }),
        e("div", {
          children: e("input", {
            type: "password",
            placeholder: "Mot de passe",
            className:
              "w-full p-3 text-center border-2 border-blue-500 rounded hover:border-yellow-400",
          }),
        }),
        e("div", {
          className: "my-8",
          children: r("label", {
            htmlFor: "check",
            className: "ml-2 text-white",
            children: [
              e("input", {
                type: "checkbox",
                id: "check",
                name: "check",
                className:
                  "border-2 border-blue-500 rounded hover:border-yellow-400",
              }),
              "Rester connect\xE9",
            ],
          }),
        }),
        r("div", {
          children: [
            e(c, {
              to: "./rules",
              children: e("button", {
                type: "submit",
                onClick: t,
                className:
                  "p-1 text-sm text-white uppercase bg-blue-500 rounded-lg w-28 hover:text-yellow-400",
                children: "Se connecter",
              }),
            }),
            e(c, {
              to: "./rules",
              children: e("button", {
                type: "submit",
                className:
                  "p-1 text-sm text-white uppercase border-2 border-blue-500 rounded-lg w-28 hover:text-yellow-400 ml-[26px]",
                onClick: a,
                children: "Invit\xE9",
              }),
            }),
          ],
        }),
      ],
    });
  },
  j = () => {
    const [i, s] = l.exports.useState(!1),
      [n, t] = l.exports.useState(!1),
      a = () => {
        s(!i), t(!n);
      };
    return (
      sessionStorage.clear(),
      e("div", {
        className:
          "bg-no-repeat bg-center h-screen bg-[url('./images/image-fond-landing-page.png')]",
        children: r("div", {
          className:
            "flex flex-wrap content-center justify-center h-screen ...",
          children: [
            e("div", {
              children: e("img", {
                className: `${
                  i ? "-translate-x-5 " : ""
                } transition ease-out duration-300`,
                src: "../images/logo_texture_porte_gauche.png",
                alt: "logoLanding",
                "aria-hidden": !0,
                onClick: () => a(),
                onKeyPress: () => a(),
              }),
            }),
            e("div", {
              className: "flex items-center",
              children: i && n ? e(C, {}) : "",
            }),
            e("div", {
              children: e("img", {
                className: `${
                  i ? "translate-x-5" : ""
                } transition ease-out duration-300`,
                src: "../images/logo-texture-porte-droite.png",
                alt: "landing",
                "aria-hidden": !0,
                onKeyPress: a,
                onClick: a,
              }),
            }),
          ],
        }),
      })
    );
  },
  p = ({ nameClass: i }) =>
    e("ul", {
      children: e("div", {
        className: "flex flex-col items-center w-80",
        children: e("li", {
          children: r(c, {
            to: `/description/${i}`,
            children: [
              e("img", {
                className: "object-cover h-56",
                src: `./images/classes/${i}.png`,
                alt: "image_hero",
              }),
              r("h2", { className: "text-center", children: [" ", i] }),
            ],
          }),
        }),
      }),
    });
p.propTypes = { nameClass: v.string.isRequired };
const A = () => {
    const [i, s] = l.exports.useState([]),
      n = {
        method: "GET",
        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
        params: { locale: "frFR" },
        headers: {
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "4d914d2fa4msh369949fcb214d78p15f32ajsn6d8461683d7f",
        },
      };
    return (
      l.exports.useEffect(() => {
        m.request(n)
          .then((t) => t.data.classes)
          .then((t) => s(t));
      }, []),
      e("div", {
        children: e("div", {
          className: "flex flex-wrap justify-center gap-10",
          children: i
            .filter(
              (t) =>
                ![
                  "Dream",
                  "Chevalier de la mort",
                  "Neutre",
                  "Whizbang",
                ].includes(t)
            )
            .map((t, a) => e(p, { nameClass: t }, a)),
        }),
      })
    );
  },
  B = () => {
    const i = {
        method: "GET",
        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
        headers: {
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "64c73ad198msh10a53337deb82f3p1bf96djsn404418418ccd",
        },
      },
      [s, n] = l.exports.useState([]);
    return (
      l.exports.useEffect(() => {
        m.request(i)
          .then((t) => t.data)
          .then((t) => n(t));
      }, []),
      e("div", {
        id: "battlegroundContainer",
        children: r("div", {
          id: "cardbattlegroundcontainer",
          children: [
            e("img", {
              src: "./images/battlegroundgame2.jpg",
              alt: "battleground",
              className: "w-full",
            }),
            e("div", { id: "ennemyHero", className: "" }),
            e("div", {
              id: "cardBattlegroundEnnemy1",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy2",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy3",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy4",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy5",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy6",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundEnnemy7",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie1",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie2",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie3",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie4",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie5",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie6",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", {
              id: "cardBattlegroundAllie7",
              className: "w-20 h-20 bg-slate-300",
            }),
            e("div", { id: "allieHero", className: "w-20 h-20 bg-slate-300" }),
          ],
        }),
      })
    );
  },
  k = [
    {
      id: 0,
      title: "Druide",
      subtitle: "La nature se dressera contre vous ! ",
      image: "../../images/descriptionDruide.png",
      desc: `Pour pr\xE9server l\u2019\xE9quilibre, prenez l\u2019une des nombreuses formes
        sauvages et d\xE9cha\xEEnez le courroux de la nature sur vos adversaires.
        Les druides sont des combattants versatiles disposant d\u2019une multitude
        de choix pour affronter leurs adversaires. Utilisez des am\xE9liorations,
        invoquez des b\xEAtes, lancez des sorts de soins ou infligez des d\xE9g\xE2ts \xE0
        tous ceux qui s\u2019opposent \xE0 la nature.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du druide :",
      powerTitle: "Changeforme",
      utilityPower: `L\u2019activation du pouvoir h\xE9ro\xEFque du druide octroie 1 point d\u2019armure et 1
        attaque pour ce tour.`,
      imagePower: "../images/powerDruide.png",
      quote: ` Laissez parler l\u2019animal en vous pour obtenir une carapace d\u2019acier et des
        griffes ac\xE9r\xE9es.`,
    },
    {
      id: 1,
      title: "Chasseur",
      subtitle: "Que la traque commence !",
      image: "../../images/imageChasseur.jpeg",
      desc: `D\u2019apr\xE8s les chasseurs, attaquer bec et ongles est la meilleure des d\xE9fenses. 
        Ces aventuriers solitaires puisent dans leur nature bestiale pour abattre leurs proies \xE0 l\u2019aide de pi\xE8ges, b\xEAtes dress\xE9es et pluies de fl\xE8ches meurtri\xE8res.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du chasseur :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du chasseur inflige 2 points de d\xE9g\xE2ts au h\xE9ros adverse.",
      powerTitle: "Tir assur\xE9",
      imagePower: "../images/powerChasseur.png",
      quote: "\xAB Armez, visez, FEU ! \xBB",
    },
    {
      id: 2,
      title: "Mage",
      subtitle: "Ma magie va vous mettre en pi\xE8ces !",
      image: "../../images/descriptionMage.jpeg",
      desc: `Aucun autre h\xE9ros ne manie les arcanes avec autant d\u2019habilit\xE9 et de force brute que les mages. 
    Avec leur palette incomparable de sorts, les mages peuvent nettoyer un plateau entier de serviteurs, infliger des d\xE9g\xE2ts directs d\xE9vastateurs \xE0 leur adversaire et invoquer des cr\xE9atures d\u2019\xE9nergie pure \xE0 leurs c\xF4t\xE9s.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du mage :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du mage inflige 1 point de d\xE9g\xE2ts \xE0 n\u2019importe quelle cible de votre choix.",
      powerTitle: "Explosion de feu",
      imagePower: "../images/powerMage.png",
      quote: "Carbonisez vos odieux adversaires avec une boule de feu magique.",
    },
    {
      id: 3,
      title: "Paladin",
      subtitle: "La Lumi\xE8re prot\xE8ge ceux qui la d\xE9tiennent.",
      image: "../../images/descriptionPaladin.jpeg",
      desc: "Redoutables chevaliers de la foi, les paladins disposent de serviteurs enhardis, de sorts de soins et de boucliers divins pour tenir t\xEAte \xE0 leurs adversaires et leur r\xE9sister jusqu\u2019\xE0 la victoire.",
      powerHeroique: "Pouvoir h\xE9ro\xEFque du paladin :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du paladin invoque une recrue de la Main d\u2019argent 1/1.",
      powerTitle: "Renfort",
      imagePower: "../images/powerPaladin.png",
      quote: "Rejoignez-moi, champions de la Lumi\xE8re !",
    },
    {
      id: 4,
      title: "Pr\xEAtre",
      subtitle: "La Lumi\xE8re brille sur les justes !",
      image: "../../images/descriptionPretre.jpeg",
      desc: `La Lumi\xE8re les appelle, mais les ombres murmurent \xE0 leurs oreilles. 
        Pieux h\xE9ros, les pr\xEAtres disposent d\u2019un potentiel de soins sans \xE9gal et peuvent conf\xE9rer de puissants enchantements sacr\xE9s \xE0 leurs serviteurs. 
        Cependant, il n\u2019y a pas de lumi\xE8re sans obscurit\xE9, ils peuvent faire appel aux ombres pour manipuler l\u2019esprit de leurs adversaires et leur infliger des d\xE9g\xE2ts psychiques mortels.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du pr\xEAtre :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du pr\xEAtre restaure 2 points de vie \xE0 n\u2019importe quelle cible sur le plateau.",
      powerTitle: "Soins inf\xE9rieurs",
      imagePower: "../images/powerPretre.png",
      quote:
        "R\xE9tablissez vos alli\xE9s gr\xE2ce \xE0 l\u2019\xE9nergie divine.",
    },
    {
      id: 5,
      title: "Voleur",
      subtitle: "Surveillez vos arri\xE8res !",
      image: "../../images/descriptionVoleur.jpeg",
      desc: `Lames invisibles, vitesse de l\u2019\xE9clair et poisons subtils, telles sont les techniques des voleurs pour se d\xE9barrasser de leurs adversaires avant de dispara\xEEtre sans laisser de traces. 
        Encha\xEEnez en un seul tour invocations de serviteurs, sorts et attaques pour un r\xE9sultat d\xE9vastateur.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du voleur :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du voleur permet d\u2019\xE9quiper une arme poss\xE9dant 1 point d\u2019attaque et 2 points de durabilit\xE9.",
      powerTitle: "Ma\xEEtrise des dagues",
      imagePower: "../images/powerVoleur.png",
      quote: "Gardez toujours une lame pr\xEAte \xE0 d\xE9gainer.",
    },
    {
      id: 6,
      title: "Chaman",
      subtitle: "Temp\xEAte, terre et feu, r\xE9pondez \xE0 mon appel !",
      image: "../../images/descriptionChaman.jpeg",
      desc: `Ma\xEEtres des \xE9l\xE9ments primordiaux, les chamans utilisent les forces de la nature pour faire appel \xE0 des pluies revigorantes, d\xE9cha\xEEner des torrents de lave et invoquer des alli\xE9s spirituels pour les assister en combat. 
    L\u2019arsenal des chamans est \xE0 l\u2019image de l\u2019\xE9quilibre des forces de la nature qu\u2019ils ma\xEEtrisent et contient puissants serviteurs versatiles, sorts, am\xE9liorations et d\xE9g\xE2ts.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du chaman :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du chaman invoque 1 totem al\xE9atoire parmi les 4 disponibles : totem de soins, totem de griffes de pierre, totem incendiaire et totem de courroux de l\u2019air.",
      powerTitle: "Appel tot\xE9mique",
      imagePower: "../images/powerChaman.png",
      quote:
        "Canalisez les \xE9l\xE9ments gr\xE2ce \xE0 d\u2019anciens symboles de pouvoir.",
    },
    {
      id: 7,
      title: "D\xE9moniste",
      subtitle: "Je serai votre cauchemar !",
      image: "../../images/descriptionDemoniste.jpeg",
      desc: `
        Ma\xEEtres de la corruption avides de pouvoir, les d\xE9monistes n\u2019ont aucun scrupule \xE0 faire d\xE9ferler mal\xE9dictions affaiblissantes, d\xE9mons f\xE9roces et violentes vagues de flammes infernales. 
        Ils sacrifieraient jusqu\u2019\xE0 leur propre vie pour \xE9liminer ceux qui leur barrent la route.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du d\xE9moniste :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du d\xE9moniste permet de piocher une carte en \xE9change de 2 points de vie.",
      powerTitle: "Connexion",
      imagePower: "../images/powerdemoniste.png",
      quote:
        "Qui a besoin de vie et de mana quand on peut avoir du pouvoir ?! ",
    },
    {
      id: 8,
      title: "Guerrier",
      subtitle: "La victoire ou la mort !",
      image: "../../images/descriptionGuerrier.jpeg",
      desc: `Combattants aguerris aux prouesses in\xE9gal\xE9es, les guerriers disposent de tout un arsenal d\u2019armes et d\u2019armures, ce qui en fait \xE0 la fois des combattants hors pair et de formidables d\xE9fenseurs. 
        Subir des d\xE9g\xE2ts ne fera qu\u2019enrager le guerrier et ses serviteurs, ce qui d\xE9clenchera de puissants effets qui renforceront encore plus leurs terribles capacit\xE9s.`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque du guerrier :",
      utilityPower:
        "L\u2019activation du pouvoir h\xE9ro\xEFque du guerrier \xAB Gain d\u2019armure \xBB conf\xE8re 2 points d\u2019armure qui fonctionnent comme des points de vie suppl\xE9mentaires cumulables sans limite.",
      powerTitle: "Gain d\u2019armure !",
      imagePower: "../images/powerGuerrier.png",
      quote: "Encaissez tout, m\xEAme les attaques les plus violentes.",
    },
    {
      id: 9,
      title: "Chasseur de D\xE9mons",
      subtitle: "Vous n\u2019\xEAtes pas pr\xEAts !",
      image: "../../images/descriptionChasseurDeDemon.jpeg",
      desc: `Incarnez le chasseur de d\xE9mons pour retourner les forces destructrices du chaos contre vos ennemis.
         \xC0 l\u2019aide d\u2019attaques aussi rapides que d\xE9vastatrices, de gigantesques alli\xE9s d\xE9moniaques, et de magie de corruption, d\xE9versez votre haine ancestrale sur vos ennemis !`,
      powerHeroique: "Pouvoir h\xE9ro\xEFque :",
      utilityPower:
        "Activez le pouvoir h\xE9ro\xEFque du chasseur de d\xE9mons pour obtenir 1 attaque pour ce tour.",
      powerTitle: "Griffes de d\xE9mon",
      imagePower: "../images/powerChasseurDeDemon.png",
      quote:
        "Sortez les griffes et montrez-vous sans piti\xE9 envers tous ceux qui oseront se dresser contre vous.",
    },
  ],
  R = () => {
    const { nameClass: i } = x(),
      [s, n] = l.exports.useState([]);
    return (
      l.exports.useEffect(() => {
        n(k.find((t) => t.title === i));
      }, [i]),
      r("div", {
        className: "bg-black",
        children: [
          r("div", {
            className: `relative flex flex-col items-center min-h-screen justify-center bg-[url(${s.image})]`,
            children: [
              e("img", {
                src: s.image,
                className: "object-cover w-full h-full mt-0",
                alt: "heroe",
              }),
              r("div", {
                className: "absolute text-center ",
                children: [
                  e("h1", {
                    className: "text-5xl text-white mt-80",
                    children: s.title,
                  }),
                  e("h2", {
                    className: "text-3xl text-orange-600 ",
                    children: s.subtitle,
                  }),
                  e("p", {
                    className: "ml-5 mr-5 text-center text-white ",
                    children: s.desc,
                  }),
                ],
              }),
            ],
          }),
          e("h1", {
            className: "flex mt-20 ml-16 text-3xl text-white ",
            children: s.powerHeroique,
          }),
          e("h1", {
            className: "flex mt-5 ml-16 text-xl text-white",
            children: s.quote,
          }),
          r("div", {
            className: "flex items-center justify-center",
            children: [
              e("img", {
                className: "w-1/4 mr-40 ",
                src: s.imagePower,
                alt: "power",
              }),
              r("div", {
                className: "flex flex-col text-center",
                children: [
                  e("h1", {
                    className: "mb-6 text-3xl text-orange-600 ",
                    children: s.powerTitle,
                  }),
                  e("p", {
                    className: "text-white ",
                    children: s.utilityPower,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  z = () => {
    const i = sessionStorage.user,
      s = b();
    return r("div", {
      className:
        "flex justify-between w-full fixed h-14 bg-[url(https://cdn.discordapp.com/attachments/960537598365958174/961183931451981864/unknown.png)]",
      children: [
        e("div", {
          className: "flex",
          children: e("p", { className: "mt-3 ml-8 text-white ", children: i }),
        }),
        e("input", {
          type: "image",
          className: "w-8 h-8 mt-3 mr-4 hover:scale-150",
          src: "https://cdn.discordapp.com/attachments/960537598365958174/961329189246619658/icone_1.png",
          alt: "icone du joueur",
          onClick: () => {
            sessionStorage.clear(), s("/");
          },
          autoComplete: "on",
        }),
      ],
    });
  },
  D = () => {
    const [i, s] = l.exports.useState(1);
    return e(f, {
      className: "flex-row",
      tooltipArray: ["nul", "bof", "moyen", "top", "g\xE9nial"],
      transition: !0,
      showTooltip: !0,
      onClick: (t) => {
        console.log(t), s(t);
      },
      ratingValue: i,
    });
  },
  H = () =>
    r("div", {
      className: "grid grid-cols-2 gap-4 bg-black",
      children: [
        e("div", {
          children: e("img", {
            className: "",
            src: "./images/dessincontact.png",
            alt: "contact",
          }),
        }),
        r("div", {
          className: "text-yellow-200 font-['.font/Belwe Bold.otf'] text-4xl ",
          children: [
            e("img", { src: "./images/logo_texture.png", alt: "logo" }),
            r("div", {
              className: "grid grid-cols-1 space-y-5 mx-7 border-b-indigo-500",
              children: [
                e("div", {
                  className: "flex flex-1 ",
                  children: r("label", {
                    htmlFor: "name",
                    children: [
                      e("input", {
                        className:
                          "ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-neutral-800 border-b-indigo-500 ",
                        type: "name",
                        id: "name",
                        name: "name",
                      }),
                      "Nom",
                    ],
                  }),
                }),
                e("div", {
                  className: "flex flex-1",
                  children: r("label", {
                    htmlFor: "email",
                    children: [
                      "E-mail",
                      e("input", {
                        className:
                          "ml-10 border-2 border-b-4 border-t-gray-900 border-x-gray-900 bg-neutral-800 border-b-indigo-500 ",
                        type: "email",
                        id: "email",
                        name: "email",
                      }),
                      "E-mail",
                    ],
                  }),
                }),
                r("label", {
                  htmlFor: "msg",
                  children: [
                    e("textarea", {
                      className:
                        "mt-8 border-2 border-b-4 border-indigo-500 bg-neutral-800 ",
                      id: "msg",
                      name: "msg",
                    }),
                    "Commentaires",
                  ],
                }),
                e(D, {}),
                e("div", {
                  className: "flex justify-center",
                  children: e("button", {
                    type: "submit",
                    className:
                      "px-4 py-2 mb-10 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500",
                    children: "Envoyer",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
function I() {
  return r("div", {
    className: "bg-[#B2915F] font-belwe",
    children: [
      e(z, {}),
      e(P, {}),
      r(w, {
        children: [
          e(d, { path: "/", element: e(j, {}) }),
          e(d, { path: "/rules", element: e(L, {}) }),
          e(d, { path: "/heroes", element: e(A, {}) }),
          e(d, { path: "/description/:nameclass", element: e(R, {}) }),
          e(d, { path: "/battleground", element: e(B, {}) }),
          e(d, { path: "/contact", element: e(H, {}) }),
        ],
      }),
    ],
  });
}
E.render(e(q, { children: e(I, {}) }), document.getElementById("root"));
