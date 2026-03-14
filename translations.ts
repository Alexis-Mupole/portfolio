
export type Language = 'fr' | 'en' | 'sw';

export const translations = {
  fr: {
    nav: { home: 'Accueil', services: 'Services', expertise: 'Mon Approche', projects: 'Projets', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      badge: 'Expertise & Accompagnement',
      title: "Des outils numériques ",
      titleAccent: "pour votre quotidien",
      desc: "Je m'appelle Alexis Mupole Uwizeye. Je mets mon savoir-faire technique au service de vos projets pour simplifier votre informatique. Qu'il s'agisse de restaurer un ordinateur, de sécuriser vos données ou de créer un site internet léger, je vous propose des solutions durables et adaptées à votre réalité.",
      ctaPrimary: 'Discuter de votre projet',
      ctaSecondary: 'Voir mes services',
      tagline: 'Technicien IT & Développeur Web'
    },
    home: {
      vision: 'Ma Philosophie',
      visionText: '"La technologie ne doit pas être un obstacle. Mon rôle est de la rendre invisible et efficace pour vous permettre de vous concentrer sur ce qui compte vraiment : votre travail et votre famille."',
      whyMe: {
        title: 'Pourquoi me faire confiance ?',
        reason1: { t: 'Proximité & Écoute', d: 'Je prends le temps de comprendre vos difficultés pour proposer uniquement ce dont vous avez besoin.' },
        reason2: { t: 'Rigueur Technique', d: 'Je respecte les standards de qualité, que ce soit dans le code ou dans l\'entretien de votre matériel.' },
        reason3: { t: 'Suivi & Formation', d: 'Je ne disparais pas après l\'intervention ; je vous montre comment garder vos outils en bon état.' }
      },
      stack: 'Mes outils techniques',
      stackDesc: 'J\'utilise des technologies modernes, stables et économes en ressources.',
      approach: 'Ma méthode de travail',
      values: {
        analysis: { t: 'Diagnostic initial', d: 'Analyse complète de l\'état de votre matériel ou de vos besoins logiciels sans engagement.' },
        rigor: { t: 'Mise en œuvre', d: 'Installation propre des systèmes et développement de code structuré et sécurisé.' },
        support: { t: 'Autonomie', d: 'Remise d\'un guide simple et formation rapide pour que vous soyez à l\'aise.' }
      }
    },
    services: {
      title: 'Services Informatiques',
      desc: "Je propose des services concrets pour résoudre vos problèmes informatiques de tous les jours.",
      infra: {
        title: 'Systèmes & Maintenance',
        os: { t: 'Systèmes d\'exploitation', d: 'Installation et optimisation de Windows (10/11) ou Linux (Ubuntu, Mint, Debian). Configuration du BIOS et des pilotes pour une stabilité maximale.' },
        maintenance: { t: 'Entretien Matériel', d: 'Dépoussiérage interne, changement de pâte thermique, remplacement de composants (SSD, RAM) et nettoyage logiciel complet.' },
        data: { t: 'Sécurité & Données', d: 'Récupération de fichiers supprimés par erreur, désinfection de virus et mise en place de sauvegardes automatiques sur disque externe ou cloud.' }
      },
      web: {
        title: 'Développement Web',
        stack: { t: 'Technologies Web', d: 'Création d\'applications avec Laravel, Next.js ou Vue.js. Bases de données SQL optimisées pour la rapidité.' },
        apps: { t: 'Sites & Applications', d: 'Conception de sites vitrines professionnels, catalogues en ligne simples et petits logiciels de gestion de stock ou de facturation.' }
      }
    },
    method: {
      step1: { t: 'Écoute', d: 'Compréhension de votre besoin.' },
      step2: { t: 'Solution', d: 'Proposition d\'un devis clair.' },
      step3: { t: 'Réalisation', d: 'Travail soigné et tests.' },
      step4: { t: 'Garantie', d: 'Support technique après service.' }
    },
    contact: {
      title: 'Parlons de votre besoin',
      desc: 'Je suis à votre écoute pour toute question technique. Réponse sous 24 heures maximum.',
      form: { name: 'Votre Nom', email: 'Votre Email', subject: 'Objet', msg: 'Message', send: 'Envoyer' }
    },
    projects: {
      title: 'Projets Récents',
      desc: 'Découvrez quelques-unes de mes réalisations techniques et digitales.',
      items: {
        stock: { t: 'Système de Gestion de Stock', d: 'Application web pour le suivi en temps réel des inventaires et alertes de rupture.' },
        showcase: { t: 'Site Vitrine Professionnel', d: 'Conception d\'un site moderne et responsive pour une entreprise locale.' },
        maintenance: { t: 'Optimisation de Parc Informatique', d: 'Remise à neuf et sécurisation de 15 postes de travail sous Windows et Linux.' },
        network: { t: 'Installation Réseau Local', d: 'Configuration d\'un réseau sécurisé avec partage de fichiers et imprimantes.' }
      }
    }
  },
  en: {
    nav: { home: 'Home', services: 'Services', expertise: 'Approach', projects: 'Projects', pricing: 'Pricing', contact: 'Contact' },
    hero: {
      badge: 'Expertise & Support',
      title: 'Digital tools for ',
      titleAccent: 'your daily life',
      desc: "My name is Alexis Mupole Uwizeye. I put my technical expertise at the service of your projects to simplify your IT. Whether restoring a computer, securing your data, or creating a lightweight website, I offer durable solutions tailored to your reality.",
      ctaPrimary: 'Discuss your project',
      ctaSecondary: 'See my services',
      tagline: 'IT Technician & Web Developer'
    },
    home: {
      vision: 'My Philosophy',
      visionText: '"Technology should not be an obstacle. My role is to make it invisible and efficient so you can focus on what really matters: your work and your family."',
      whyMe: {
        title: 'Why trust me?',
        reason1: { t: 'Proximity & Listening', d: 'I take the time to understand your difficulties to propose only what you need.' },
        reason2: { t: 'Technical Rigor', d: 'I respect quality standards, whether in code or equipment maintenance.' },
        reason3: { t: 'Follow-up & Training', d: 'I do not disappear after the intervention; I show you how to keep your tools in good condition.' }
      },
      stack: 'My technical tools',
      stackDesc: 'I use modern, stable, and resource-efficient technologies.',
      approach: 'My work method',
      values: {
        analysis: { t: 'Initial diagnosis', d: 'Complete analysis of your hardware status or software needs without commitment.' },
        rigor: { t: 'Implementation', d: 'Clean system installation and development of structured and secure code.' },
        support: { t: 'Autonomy', d: 'Providing a simple guide and quick training so you are comfortable.' }
      }
    },
    services: {
      title: 'IT Services',
      desc: "I offer practical services to solve your everyday IT problems.",
      infra: {
        title: 'Systems & Maintenance',
        os: { t: 'Operating Systems', d: 'Installation and optimization of Windows (10/11) or Linux (Ubuntu, Mint, Debian). BIOS and driver configuration for maximum stability.' },
        maintenance: { t: 'Hardware Maintenance', d: 'Internal dusting, thermal paste replacement, component replacement (SSD, RAM), and complete software cleaning.' },
        data: { t: 'Security & Data', d: 'Recovery of accidentally deleted files, virus disinfection, and setting up automatic backups on external disk or cloud.' }
      },
      web: {
        title: 'Web Development',
        stack: { t: 'Web Technologies', d: 'Creating applications with Laravel, Next.js, or Vue.js. SQL databases optimized for speed.' },
        apps: { t: 'Sites & Applications', d: 'Design of professional showcase sites, simple online catalogs, and small stock management or invoicing software.' }
      }
    },
    method: {
      step1: { t: 'Listening', d: 'Understanding your needs.' },
      step2: { t: 'Solution', d: 'Providing a clear quote.' },
      step3: { t: 'Execution', d: 'Careful work and testing.' },
      step4: { t: 'Guarantee', d: 'Technical support after service.' }
    },
    contact: {
      title: "Let's talk about your needs",
      desc: 'I am here to listen to any technical question. Response within 24 hours maximum.',
      form: { name: 'Your Name', email: 'Your Email', subject: 'Subject', msg: 'Message', send: 'Send' }
    },
    projects: {
      title: 'Recent Projects',
      desc: 'Discover some of my technical and digital achievements.',
      items: {
        stock: { t: 'Stock Management System', d: 'Web application for real-time inventory tracking and stock-out alerts.' },
        showcase: { t: 'Professional Showcase Site', d: 'Design of a modern and responsive site for a local business.' },
        maintenance: { t: 'IT Fleet Optimization', d: 'Refurbishing and securing 15 Windows and Linux workstations.' },
        network: { t: 'Local Network Installation', d: 'Configuration of a secure network with file and printer sharing.' }
      }
    }
  },
  sw: {
    nav: { home: 'Nyumbani', services: 'Huduma', expertise: 'Njia yangu', projects: 'Miradi', pricing: 'Bei', contact: 'Mawasiliano' },
    hero: {
      badge: 'Utaalamu na Usaidizi',
      title: 'Zana za kidijitali kwa ',
      titleAccent: 'maisha yako ya kila siku',
      desc: "Naitwa Alexis Mupole Uwizeye. Ninaweka utaalamu wangu wa kiufundi katika huduma ya miradi yako ili kurahisisha IT yako. Iwe ni kurejesha kompyuta, kulinda data yako, au kutengeneza tovuti nyepesi, ninatoa suluhisho endelevu zinazolingana na ukweli wako.",
      ctaPrimary: 'Jadili mradi wako',
      ctaSecondary: 'Angalia huduma zangu',
      tagline: 'Mtaalamu wa IT na Msanidi Programu wa Wavuti'
    },
    home: {
      vision: 'Falsafa Yangu',
      visionText: '"Teknolojia isipate kuwa kikwazo. Jukumu langu ni kuifanya isionekane na iwe na ufanisi ili uweze kuzingatia kile ambacho ni muhimu sana: kazi yako na familia yako."',
      whyMe: {
        title: 'Kwa nini uniamini?',
        reason1: { t: 'Ukaribu na Kusikiliza', d: 'Ninachukua muda kuelewa matatizo yako ili kupendekeza kile unachohitaji tu.' },
        reason2: { t: 'Ukali wa Kiufundi', d: 'Ninaheshimu viwango vya ubora, iwe katika kodi au matengenezo ya vifaa.' },
        reason3: { t: 'Ufuatiliaji na Mafunzo', d: 'Sipotei baada ya kazi; ninakuonyesha jinsi ya kuweka zana zako katika hali nzuri.' }
      },
      stack: 'Zana zangu za kiufundi',
      stackDesc: 'Ninatumia teknolojia za kisasa, thabiti na zinazookoa rasilimali.',
      approach: 'Njia yangu ya kazi',
      values: {
        analysis: { t: 'Utambuzi wa awali', d: 'Uchambuzi kamili wa hali ya vifaa vyako au mahitaji ya programu bila ahadi.' },
        rigor: { t: 'Utekelezaji', d: 'Usakinishaji safi wa mifumo na uendelezaji wa kodi iliyopangwa na salama.' },
        support: { t: 'Utawala', d: 'Kutoa mwongozo rahisi na mafunzo ya haraka ili uwe na raha.' }
      }
    },
    services: {
      title: 'Huduma za IT',
      desc: "Ninatoa huduma za vitendo ili kutatua matatizo yako ya kila siku ya IT.",
      infra: {
        title: 'Mifumo na Matengenezo',
        os: { t: 'Mifumo ya Uendeshaji', d: 'Usakinishaji na uboreshaji wa Windows (10/11) au Linux (Ubuntu, Mint, Debian). Usanidi wa BIOS na madereva kwa utulivu wa juu.' },
        maintenance: { t: 'Matengenezo ya Vifaa', d: 'Kusafisha vumbi ndani, kubadilisha mafuta ya mafuta, kubadilisha vipengele (SSD, RAM) na kusafisha programu kabisa.' },
        data: { t: 'Usalama na Data', d: 'Kupata faili zilizofutwa kwa makosa, kuondoa virusi na kuweka hifadhi za kiotomatiki kwenye diski ya nje au wingu.' }
      },
      web: {
        title: 'Uendelezaji wa Wavuti',
        stack: { t: 'Teknolojia za Wavuti', d: 'Kuunda programu na Laravel, Next.js au Vue.js. Hifadhidata za SQL zilizoboreshwa kwa kasi.' },
        apps: { t: 'Tovuti na Programu', d: 'Usanifu wa tovuti za kitaaluma, katalogi rahisi za mtandaoni na programu ndogo za usimamizi wa hisa au ankara.' }
      }
    },
    method: {
      step1: { t: 'Kusikiliza', d: 'Kuelewa mahitaji yako.' },
      step2: { t: 'Suluhisho', d: 'Kutoa bei ya wazi.' },
      step3: { t: 'Utekelezaji', d: 'Kazi ya uangalifu na vipimo.' },
      step4: { t: 'Dhamana', d: 'Usaidizi wa kiufundi baada ya huduma.' }
    },
    contact: {
      title: 'Tuzungumzie mahitaji yako',
      desc: 'Niko hapa kusikiliza swali lolote la kiufundi. Majibu ndani ya masaa 24 zaidi.',
      form: { name: 'Jina lako', email: 'Barua pepe yako', subject: 'Mada', msg: 'Ujumbe', send: 'Tuma' }
    },
    projects: {
      title: 'Miradi ya Hivi Karibuni',
      desc: 'Gundua baadhi ya mafanikio yangu ya kiufundi na kidijitali.',
      items: {
        stock: { t: 'Mfumo wa Usimamizi wa Hisa', d: 'Programu ya wavuti kwa ufuatiliaji wa hesabu kwa wakati halisi na arifa za upungufu.' },
        showcase: { t: 'Tovuti ya Kitaaluma', d: 'Usanifu wa tovuti ya kisasa na inayojibu kwa biashara ya ndani.' },
        maintenance: { t: 'Uboreshaji wa Vifaa vya IT', d: 'Kukarabati na kulinda vituo 15 vya kazi vya Windows na Linux.' },
        network: { t: 'Usakinishaji wa Mtandao wa Ndani', d: 'Usanidi wa mtandao salama wenye kushiriki faili na printa.' }
      }
    }
  }
};
