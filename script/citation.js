const citations = [
  {
    citation:
      "La démocratie, ce n'est pas la loi de la majorité, mais la protection de la minorité.",
    auteur: "Albert Camus",
  },
  {
    citation: "Le mal est facile, le bien demande beaucoup d'efforts.",
    auteur: "Théognis de Mégare",
  },
  {
    citation:
      "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    auteur: "Albert Einstein",
  },
  {
    citation:
      "La vie n'est pas un problème à résoudre mais une réalité dont il faut faire l'expérience.",
    auteur: "Sören Kierkegaard",
  },
  {
    citation:
      "Ne combattez l'opinion de personne ; songez que, si l'on voulait dissuader les gens de toutes les absurdités auxquelles ils croient, on n'en aurait pas fini, quand on atteindrait l'âge de Mathusalem.",
    auteur: "Arthur Schopenhauer",
  },
  {
    citation:
      "Généralement, les gens qui savent peu parlent beaucoup, et les gens savent beaucoup parlent peu.",
    auteur: "Jean-Jacques Rousseau",
  },
  {
    citation:
      "Etre libre, ce n'est pas pouvoir faire ce que l'on veut, mais c'est vouloir ce que l'on peut.",
    auteur: "Jean-Paul Sartre",
  },
  {
    citation:
      "La démocratie, ce n'est pas la loi de la majorité, mais la protection de la minorité.",
    auteur: "Albert Camus",
  },
  {
    citation: "Le mal est facile, le bien demande beaucoup d'efforts.",
    auteur: "Théognis de Mégare",
  },
  {
    citation:
      "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    auteur: "Albert Einstein",
  },
];

const citation = document.querySelector("#citation span:first-child");
const auteur = document.querySelector("#citation span:last-child");

const citationTodays = citations[Math.floor(Math.random() * citations.length)];
citation.innerText = citationTodays.citation;
auteur.innerText = citationTodays.auteur;
