import pic_clf from "./assets/clf.png";
import pic_dataprotec from "./assets/dataprotec.png";
import pic_kidaroo from "./assets/kidaroo.png";
import displacements from "./assets/displacements.png";
import githubsearch from "./assets/githubsearch.png";

export const projects = [
  {
    title: "Github Repositories Search",
    subtitle: "",
    pictureUrl: githubsearch,
    linkToProject: "https://github.com/annamariapl/github-api",
    description_de: `Ich habe github api genutzt für Repositories Search. Ergebnisse nach Mengen von Sternen sortiert. Ich habe auch infinite loading implementiert (weitere Ergebnisse werden geladen, wenn man bis zum Ende scrollt).
      Um less css zu diesem Projekt hinzufügen musste ich npm run eject ausführen und entsprechende loader hinzufügen. Die Vorteile von less css habe ich bei der Implementation von von wiederverwendbare Elemente angewendet (siehe zum Beispiel Button).`,
    description: `Searches for github apis and sorts results by amount of start in desc. order. Infinite load implemented. To add "less css" to the project I had to ejected project and add suitable loaders. I like how “less css” works with component nature of React.js (see implementation of a button). History of search is saved in local storage and displayed in tab history.`,
    technologies: ["typescript", "css", "less", "react.js", "axios", "webpack"],

    date: "Nov 2019"
  },
  {
    title: "Projects for IDMC",
    subtitle: "Internal Displacement Monitoring Center",
    pictureUrl: displacements,
    linkToProject: "https://github.com/annamariapl/sunburst",
    description_de: `Diese Projekte sind vor meinem Praktikum entstanden. Im Rahmen eines React.js Kurses in ReDi school, habe ich als Abschlussprojekt gemacht. Nach Anforderungen  und in enger Kommunikation mit IDMC habe ich Daten über Flüchtlingssituation in Form von Graph präsentiert. Dazu habe ich “nivo” Bibliothek genutzt. 
    `,
    description: `Processes data about refugee situation to display it in a form of graph.  Project come to live as a cooperation between ReDI school and IDMC organisation. We, students of ReDI school get a chance to work on a real life project and communicate and at the same time to help the IDMC organisation. For displaying graphs I used “nivo” library.`,
    technologies: ["JS ES6", "react.js", "axios", "nivo"],
    additionalLinks: [
      {
        text: "IDMC : www.internal-displacement.org",
        link: "http://www.internal-displacement.org/"
      },
      {
        text: "github: sunburst graph",
        link: "https://github.com/annamariapl/sunburst"
      },
      {
        text: "github: global displacement graph",
        link: "https://github.com/annamariapl/IDMC-GlobalDisplacement"
      }
    ],
    date: "May 2019"
  },

  {
    title: "Celebrate Life Festival",
    subtitle: "This is a real life, launched freelancing project",
    pictureUrl: pic_clf,
    linkToProject: "https://celebrate-life.info/2019/",
    description:
      "Buy tickets via Event-Brite, watch media stream library and get informed about the Festival. The website is bilingual.",
    technologies: ["wordpress", "php", "JS", "css"],
    date: "Autumn 2018"
  },
  {
    title: "Data Protection Form",
    subtitle: "Collectiing information to help with TOM (GDPR) esstimation",
    pictureUrl: pic_dataprotec,
    linkToProject: "https://github.com/annamariapl/data-protection-form",
    description: `The purpose of the project is to collect data via form and produce a base of a law agreement in a form of .docx with appropiate logo etc.
    Database is populated by seed.rb from a YAML file. Data is collected in form (lib. "Simple Form"). Producing a .docx is supported by Caracal Gem. Produced .docx is being send as well via E-Mail (configured with Postfix).`,
    technologies: [
      "ruby on rails",
      "css",
      "html",
      "simple form",
      "caracal gem",
      "postfix"
    ],
    date: "May 2018"
  },
  {
    title: "Kidaroo ",
    subtitle: "Activities for Children (Rails App)",
    pictureUrl: pic_kidaroo,
    linkToProject: "http://kidaroo.club",
    description:
      "Find free-time activities for your child, pay with a credit card, log-in, check your dashboard and chat with other users. The project came to life in just 10 days. It was an effect of a good teamwork and was a byproduct of a coding bootcamp. Though the app was done just for practising purposes, it would be a good base for a fully functioning application.",
    technologies: ["ruby on rails", "css", "html"],
    date: "Jan 2018"
  }
];

export const wordpressLinks = [
  { text: "barefoot-yoga.de", link: "http://barefoot-yoga.de" },
  {
    text: "space-in-between.de",
    link: "http://space-in-between.de"
  },
  { text: "ai-and-law.com", link: "http://ai-and-law.com" },
  {
    text: "geheimnisschutz.eu",
    link: "http://geheimnisschutz.eu"
  },
  {
    text: "marke-und-domain.de",
    link: "http://marke-und-domain.de"
  }
];
