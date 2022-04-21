const descHeroes = [
  {
    id: 0,
    titre: "Druide",
    sous_titre: "La nature se dressera contre vous ! ",
    image: "./images/descriptionDruide.png",
    desc: `Pour préserver l’équilibre, prenez l’une des nombreuses formes
        sauvages et déchaînez le courroux de la nature sur vos adversaires.
        Les druides sont des combattants versatiles disposant d’une multitude
        de choix pour affronter leurs adversaires. Utilisez des améliorations,
        invoquez des bêtes, lancez des sorts de soins ou infligez des dégâts à
        tous ceux qui s’opposent à la nature.`,
    pouvoirHeroique: " Pouvoir héroïque du druide :",
    powerTitle: "Changeforme",
    utilitéPouvoir: `L’activation du pouvoir héroïque du druide octroie 1 point d’armure et 1
        attaque pour ce tour.`,
    imagePouvoir: "powerDruide.png",
    citation: ` Laissez parler l’animal en vous pour obtenir une carapace d’acier et des
        griffes acérées.`,
  },
  {
    id: 1,
    title: "Chasseur",
    subtitle: "Que la traque commence !",
    image: "./images/descriptionChasseur.jpeg",
    desc: `D’après les chasseurs, attaquer bec et ongles est la meilleure des défenses. 
        Ces aventuriers solitaires puisent dans leur nature bestiale pour abattre leurs proies à l’aide de pièges, bêtes dressées et pluies de flèches meurtrières.`,
    powerHeroique: "Pouvoir héroïque du chasseur :",
    utilityPower: `L’activation du pouvoir héroïque du chasseur inflige 2 points de dégâts au héros adverse.`,
    powerTitle: "Tir assuré",
    imagePower: "./images/powerChasseur.png",
    quote: "« Armez, visez, FEU ! »",
  },
  {
    id: 2,
    title: "Mage",
    subtitle: "Ma magie va vous mettre en pièces !",
    image: "./images/descriptionMage.jpeg",
    desc: `Aucun autre héros ne manie les arcanes avec autant d’habilité et de force brute que les mages. 
    Avec leur palette incomparable de sorts, les mages peuvent nettoyer un plateau entier de serviteurs, infliger des dégâts directs dévastateurs à leur adversaire et invoquer des créatures d’énergie pure à leurs côtés.`,
    powerHeroique: "Pouvoir héroïque du mage :",
    utilityPower:
      "L’activation du pouvoir héroïque du mage inflige 1 point de dégâts à n’importe quelle cible de votre choix.",
    powerTitle: "Explosion de feu",
    imagePower: "./images/powerMage.png",
    quote: "Carbonisez vos odieux adversaires avec une boule de feu magique.",
  },
  {
    id: 3,
    title: "Paladin",
    subtitle: "La Lumière protège ceux qui la détiennent.",
    image: "./images/descriptionPaladin.jpeg",
    desc: "Redoutables chevaliers de la foi, les paladins disposent de serviteurs enhardis, de sorts de soins et de boucliers divins pour tenir tête à leurs adversaires et leur résister jusqu’à la victoire.",
    powerHeroique: "Pouvoir héroïque du paladin :",
    utilityPower:
      "L’activation du pouvoir héroïque du paladin invoque une recrue de la Main d’argent 1/1.",
    powerTitle: "Renfort",
    imagePower: "./images/powerPaladin.png",
    quote: "Rejoignez-moi, champions de la Lumière !",
  },
  {
    id: 4,
    title: "Prêtre",
    subtitle: "La Lumière brille sur les justes !",
    image: "./images/descriptionPretre.jpeg",
    desc: `La Lumière les appelle, mais les ombres murmurent à leurs oreilles. 
        Pieux héros, les prêtres disposent d’un potentiel de soins sans égal et peuvent conférer de puissants enchantements sacrés à leurs serviteurs. 
        Cependant, il n’y a pas de lumière sans obscurité, ils peuvent faire appel aux ombres pour manipuler l’esprit de leurs adversaires et leur infliger des dégâts psychiques mortels.`,
    powerHeroique: "Pouvoir héroïque du prêtre :",
    utilityPower:
      "L’activation du pouvoir héroïque du prêtre restaure 2 points de vie à n’importe quelle cible sur le plateau.",
    powerTitle: "Soins inférieurs",
    imagePower: "./images/powerPretre.png",
    quote: "Rétablissez vos alliés grâce à l’énergie divine.",
  },
  {
    id: 5,
    title: "Voleur",
    subtitle: "Surveillez vos arrières !",
    image: "./images/descriptionVoleur.jpeg",
    desc: `Lames invisibles, vitesse de l’éclair et poisons subtils, telles sont les techniques des voleurs pour se débarrasser de leurs adversaires avant de disparaître sans laisser de traces. 
        Enchaînez en un seul tour invocations de serviteurs, sorts et attaques pour un résultat dévastateur.`,
    powerHeroique: "Pouvoir héroïque du voleur :",
    utilityPower:
      "L’activation du pouvoir héroïque du voleur permet d’équiper une arme possédant 1 point d’attaque et 2 points de durabilité.",
    powerTitle: "Maîtrise des dagues",
    imagePower: "./images/powerVoleur.png",
    quote: "Gardez toujours une lame prête à dégainer.",
  },
  {
    id: 6,
    title: "Chaman",
    subtitle: "Tempête, terre et feu, répondez à mon appel !",
    image: "./images/descriptionChaman.jpeg",
    desc: `Maîtres des éléments primordiaux, les chamans utilisent les forces de la nature pour faire appel à des pluies revigorantes, déchaîner des torrents de lave et invoquer des alliés spirituels pour les assister en combat. 
    L’arsenal des chamans est à l’image de l’équilibre des forces de la nature qu’ils maîtrisent et contient puissants serviteurs versatiles, sorts, améliorations et dégâts.`,
    powerHeroique: "Pouvoir héroïque du chaman :",
    utilityPower:
      "L’activation du pouvoir héroïque du chaman invoque 1 totem aléatoire parmi les 4 disponibles : totem de soins, totem de griffes de pierre, totem incendiaire et totem de courroux de l’air.",
    powerTitle: "Appel totémique",
    imagePower: "./images/powerChaman.png",
    quote: "Canalisez les éléments grâce à d’anciens symboles de pouvoir.",
  },
  {
    id: 7,
    title: "Démoniste",
    subtitle: "Je serai votre cauchemar !",
    image: "./images.descriptionDemoniste.jpeg",
    desc: `
        Maîtres de la corruption avides de pouvoir, les démonistes n’ont aucun scrupule à faire déferler malédictions affaiblissantes, démons féroces et violentes vagues de flammes infernales. 
        Ils sacrifieraient jusqu’à leur propre vie pour éliminer ceux qui leur barrent la route.`,
    powerHeroique: "Pouvoir héroïque du démoniste :",
    utilityPower:
      "L’activation du pouvoir héroïque du démoniste permet de piocher une carte en échange de 2 points de vie.",
    powerTitle: "Connexion",
    imagePower: "./images/powerdemoniste.png",
    quote: "Qui a besoin de vie et de mana quand on peut avoir du pouvoir ?! ",
  },
  {
    id: 8,
    title: "Guerrier",
    subtitle: "La victoire ou la mort !",
    image: "./images/descriptionGuerrier.jpeg",
    desc: `Combattants aguerris aux prouesses inégalées, les guerriers disposent de tout un arsenal d’armes et d’armures, ce qui en fait à la fois des combattants hors pair et de formidables défenseurs. 
        Subir des dégâts ne fera qu’enrager le guerrier et ses serviteurs, ce qui déclenchera de puissants effets qui renforceront encore plus leurs terribles capacités.`,
    powerHeroique: "Pouvoir héroïque du guerrier :",
    utilityPower:
      "L’activation du pouvoir héroïque du guerrier « Gain d’armure » confère 2 points d’armure qui fonctionnent comme des points de vie supplémentaires cumulables sans limite.",
    powerTitle: "Gain d’armure !",
    imagePower: "./images/powerGuerrier.png",
    quote: "Encaissez tout, même les attaques les plus violentes.",
  },
  {
    id: 9,
    title: "Chasseur de Démon",
    subtitle: "Vous n’êtes pas prêts !",
    image: "./images/descriptionChasseurDeDemon.jpeg",
    desc: `Incarnez le chasseur de démons pour retourner les forces destructrices du chaos contre vos ennemis.
         À l’aide d’attaques aussi rapides que dévastatrices, de gigantesques alliés démoniaques, et de magie de corruption, déversez votre haine ancestrale sur vos ennemis !`,
    powerHeroique: "Pouvoir héroïque :",
    utilityPower:
      "Activez le pouvoir héroïque du chasseur de démons pour obtenir 1 attaque pour ce tour.",
    powerTitle: "Griffes de démon",
    imagePower: "./images/powerChasseurDeDemon.png",
    quote:
      "Sortez les griffes et montrez-vous sans pitié envers tous ceux qui oseront se dresser contre vous.",
  },
];
