// ── Shared types ──────────────────────────────────────────────────────────────

export type Party = {
  id: string;
  name: string;
  abbreviation: string;
  seats: number;
  color: string;
};

export type MP = {
  id: string;
  name: string;
  partyId: string;
  constituency: string;
  initials: string;
};

export type Vote = {
  id: string;
  title: string;
  category: string;
  date: string;
  for: number;
  against: number;
  abstain: number;
  absent: number;
  result: "samþykkt" | "fellt";
};

// ── Vote detail types ─────────────────────────────────────────────────────────

export type VoteType = "for" | "against" | "abstain" | "absent";

export type MPVoteRecord = {
  name: string;
  initials: string;
  vote: VoteType;
};

export type PartyVoteBreakdown = {
  partyName: string;
  color: string;
  mps: MPVoteRecord[];
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  isCurrent?: boolean;
};

export type VoteDetail = {
  id: string;
  title: string;
  subtitle: string;
  status: "samþykkt" | "fellt";
  date: string;
  billNumber: string;
  reading: string;
  session: string;
  summary: {
    heading: string;
    paragraphs: string[];
  };
  quickFacts: {
    sponsor: string;
    committee: string;
    introduced: string;
    submissions: string;
  };
  result: {
    for: number;
    against: number;
    abstain: number;
    absent: number;
  };
  partyBreakdown: PartyVoteBreakdown[];
  timeline: TimelineItem[];
};

// ── Homepage data ─────────────────────────────────────────────────────────────

export const parties: Party[] = [
  { id: "d", name: "Sjálfstæðisflokkurinn", abbreviation: "D", seats: 16, color: "#003F8A" },
  { id: "s", name: "Samfylkingin", abbreviation: "S", seats: 15, color: "#D92B2B" },
  { id: "b", name: "Framsóknarflokkurinn", abbreviation: "B", seats: 8, color: "#5FAD41" },
  { id: "vg", name: "Vinstri-Grænir", abbreviation: "VG", seats: 8, color: "#1E7A4A" },
  { id: "p", name: "Píratar", abbreviation: "P", seats: 7, color: "#7B2FBE" },
  { id: "c", name: "Viðreisn", abbreviation: "C", seats: 7, color: "#0891B2" },
  { id: "m", name: "Miðflokkurinn", abbreviation: "M", seats: 2, color: "#D97706" },
];

export const mps: MP[] = [
  { id: "1", name: "Áslaug Arna Sigurbjörnsdóttir", partyId: "d", constituency: "Reykjavík norður", initials: "ÁA" },
  { id: "2", name: "Kristrún Frostadóttir", partyId: "s", constituency: "Reykjavík suður", initials: "KF" },
  { id: "3", name: "Willum Þór Þórsson", partyId: "b", constituency: "Suðvesturkjördæmi", initials: "WÞ" },
  { id: "4", name: "Þorgerður Katrín Gunnarsdóttir", partyId: "c", constituency: "Norðvesturkjördæmi", initials: "ÞKG" },
  { id: "5", name: "Ögmundur Jónasson", partyId: "vg", constituency: "Reykjavík norður", initials: "ÖJ" },
  { id: "6", name: "Þórhildur Sunna Ævarsdóttir", partyId: "p", constituency: "Reykjavík suður", initials: "ÞSÆ" },
  { id: "7", name: "Bjarni Benediktsson", partyId: "d", constituency: "Suðurkjördæmi", initials: "BB" },
  { id: "8", name: "Guðmundur Ingi Guðbrandsson", partyId: "vg", constituency: "Reykjanesurkjördæmi", initials: "GIG" },
];

export const recentVotes: Vote[] = [
  {
    id: "1",
    title: "Frumvarp til laga um húsnæðismál og leigustuðning",
    category: "Húsnæðismál",
    date: "22. apríl 2026",
    for: 38, against: 19, abstain: 3, absent: 3,
    result: "samþykkt",
  },
  {
    id: "2",
    title: "Frumvarp til fjárlaga fyrir árið 2027",
    category: "Fjármál",
    date: "21. apríl 2026",
    for: 31, against: 28, abstain: 2, absent: 2,
    result: "samþykkt",
  },
  {
    id: "3",
    title: "Tillaga til þingsályktunar um loftslagsmál og kolefnishlutleysi",
    category: "Umhverfismál",
    date: "20. apríl 2026",
    for: 22, against: 35, abstain: 4, absent: 2,
    result: "fellt",
  },
];

// ── MP profile types ──────────────────────────────────────────────────────────

export type MPVoteHistoryItem = {
  date: string;
  title: string;
  position: VoteType;
  outcome: "samþykkt" | "fellt";
};

export type MPTopicBreakdown = {
  topic: string;
  weight: number;
};

export type MPProfile = {
  slug: string;
  name: string;
  initials: string;
  partyId: string;
  partyName: string;
  partyColor: string;
  role: string;
  constituency: string;
  facts: {
    born: string;
    location: string;
    committeeRole: string;
    yearsInParliament: string;
  };
  stats: {
    attendance: number;
    votesCast: number;
    totalVotes: number;
    speeches: number;
    speechTime: string;
    billsSponsored: number;
    billsPassed: number;
  };
  partyLoyalty: number;
  partyAvgLoyalty: number;
  votesHistory: MPVoteHistoryItem[];
  topics: MPTopicBreakdown[];
  activityPattern: number[];
};

export const mpProfile: MPProfile = {
  slug: "anna-jonsdottir",
  name: "Anna Jónsdóttir",
  initials: "AJ",
  partyId: "s",
  partyName: "Samfylkingin",
  partyColor: "#D4222F",
  role: "Þingmaður",
  constituency: "Reykjavíkurkjördæmis norður · Kjörin 2021",
  facts: {
    born: "Fædd 1978",
    location: "Reykjavík",
    committeeRole: "Formaður velferðarnefndar",
    yearsInParliament: "4 ár á þingi",
  },
  stats: {
    attendance: 97,
    votesCast: 412,
    totalVotes: 425,
    speeches: 68,
    speechTime: "~14 klst. í ræðustól",
    billsSponsored: 11,
    billsPassed: 3,
  },
  partyLoyalty: 88,
  partyAvgLoyalty: 92,
  votesHistory: [
    { date: "14. apríl", title: "Hækkun barnabóta í áföngum", position: "for", outcome: "samþykkt" },
    { date: "12. apríl", title: "Breyting á fiskveiðistjórnun", position: "for", outcome: "fellt" },
    { date: "10. apríl", title: "Stuðningur við endurnýjanlega orku", position: "for", outcome: "samþykkt" },
    { date: "8. apríl", title: "Niðurskurður í heilbrigðiskerfinu", position: "against", outcome: "fellt" },
    { date: "5. apríl", title: "Frumvarp um húsnæðisstuðning", position: "for", outcome: "samþykkt" },
    { date: "3. apríl", title: "Breytingar á útlendingalögum", position: "absent", outcome: "samþykkt" },
    { date: "1. apríl", title: "Lenging fæðingarorlofs", position: "for", outcome: "samþykkt" },
    { date: "28. mars", title: "Frumvarp um loftslagsmarkmið 2030", position: "abstain", outcome: "samþykkt" },
    { date: "26. mars", title: "Hækkun á persónuafslætti", position: "for", outcome: "samþykkt" },
    { date: "22. mars", title: "Breytingar á lögum um leigubifreiðar", position: "against", outcome: "samþykkt" },
  ],
  topics: [
    { topic: "Velferðarmál", weight: 31 },
    { topic: "Heilbrigðismál", weight: 22 },
    { topic: "Barnamál", weight: 14 },
    { topic: "Húsnæðismál", weight: 11 },
    { topic: "Menntamál", weight: 8 },
    { topic: "Jafnréttismál", weight: 6 },
    { topic: "Annað", weight: 8 },
  ],
  activityPattern: [2, 3, 1, 2, 4, 3, 2, 0, 1, 3, 4, 4, 2, 3, 1, 2, 3, 4, 3, 2, 4, 3, 2, 3, 2, 1],
};

// ── Vote detail mock ──────────────────────────────────────────────────────────

export const voteDetail: VoteDetail = {
  id: "barnabaetr-214-156",
  title: "Hækkun barnabóta í áföngum",
  subtitle: "Frumvarp ríkisstjórnarinnar um breytingu á lögum um tekjuskatt, lið V um barnabætur.",
  status: "samþykkt",
  date: "14. apríl 2026",
  billNumber: "Mál nr. 214/156",
  reading: "Frumvarp · 3. umræða",
  session: "156. löggjafarþing",
  summary: {
    heading: "Hvað var verið að kjósa um?",
    paragraphs: [
      "Þetta frumvarp hækkar barnabætur um 15% á næstu þremur árum. Hækkunin verður í þrepum — um 5% árlega frá og með 2026. Markmiðið er að styðja betur við barnafjölskyldur með meðaltekjur; ekki er verið að hækka þak á bótum fyrir tekjuhæstu heimilin.",
      "Frumvarpið kemur frá ríkisstjórninni og er hluti af efnahagsaðgerðum tengdum kjarasamningum 2025. Samkvæmt mati fjármálaráðuneytisins kostar þetta ríkissjóð um 4,2 milljarða króna á ári þegar hækkunin er komin að fullu til framkvæmda.",
      "Helstu ágreiningsefni: Sjálfstæðisflokkurinn gagnrýndi útgjaldaaukann og vildi í staðinn lækka tekjuskatt. Miðflokkurinn sat hjá og benti á að hækkunin nái ekki til barnafjölskyldna á landsbyggðinni með sama hætti og þeirra í þéttbýli.",
    ],
  },
  quickFacts: {
    sponsor: "Fjármála- og efnahagsráðherra",
    committee: "Velferðarnefnd",
    introduced: "22. janúar 2026",
    submissions: "47 umsagnir",
  },
  result: { for: 42, against: 14, abstain: 7, absent: 0 },
  partyBreakdown: [
    {
      partyName: "Samfylkingin",
      color: "#D4222F",
      mps: [
        { name: "Anna Jónsdóttir", initials: "AJ", vote: "for" },
        { name: "Einar Aðalsteinsson", initials: "EA", vote: "for" },
        { name: "Sara Björk", initials: "SB", vote: "for" },
        { name: "Karl Sveinsson", initials: "KS", vote: "for" },
        { name: "Heiða Björg", initials: "HB", vote: "for" },
        { name: "Jón Kaldal", initials: "JK", vote: "for" },
        { name: "Eva Dögg", initials: "ED", vote: "for" },
        { name: "Þorvaldur Gylfason", initials: "ÞG", vote: "for" },
        { name: "Sólveig Anna", initials: "SA", vote: "for" },
        { name: "Rakel Óskars", initials: "RÓ", vote: "for" },
        { name: "Logi Einarsson", initials: "LE", vote: "for" },
        { name: "Ragna Sigurðar", initials: "RS", vote: "for" },
        { name: "Magnús Kr.", initials: "MK", vote: "for" },
        { name: "Dagbjört Hákon", initials: "DH", vote: "for" },
        { name: "Stefán Vagn", initials: "SV", vote: "for" },
      ],
    },
    {
      partyName: "Sjálfstæðisflokkurinn",
      color: "#005BA4",
      mps: [
        { name: "Björn Þorsteinsson", initials: "BÞ", vote: "against" },
        { name: "Bjarni Benediktsson", initials: "BB", vote: "against" },
        { name: "Áslaug Arna", initials: "ÁA", vote: "against" },
        { name: "Guðlaugur Þór", initials: "GÞ", vote: "against" },
        { name: "Þórdís Kolbrún", initials: "ÞK", vote: "for" },
        { name: "Diljá Mist", initials: "DM", vote: "against" },
        { name: "Jón Gunnarsson", initials: "JG", vote: "against" },
        { name: "Óli Björn", initials: "ÓB", vote: "against" },
        { name: "Vilhjálmur Árnason", initials: "VÁ", vote: "against" },
        { name: "Hildur Sverrisdóttir", initials: "HS", vote: "for" },
        { name: "Friðjón R.", initials: "FR", vote: "against" },
        { name: "Haraldur Benediktsson", initials: "HB", vote: "against" },
        { name: "Teitur Björn", initials: "TB", vote: "against" },
        { name: "Berglind Ósk", initials: "BÓ", vote: "against" },
      ],
    },
    {
      partyName: "Viðreisn",
      color: "#F7921E",
      mps: [
        { name: "Kristín Magnúsdóttir", initials: "KM", vote: "for" },
        { name: "Þorgerður Katrín", initials: "ÞKG", vote: "for" },
        { name: "Hanna Katrín", initials: "HKJ", vote: "for" },
        { name: "Sigmar Guðmundsson", initials: "SG", vote: "for" },
        { name: "Guðbrandur Einarsson", initials: "GE", vote: "for" },
        { name: "Daði Már", initials: "DM", vote: "for" },
        { name: "Ingibjörg Isaksen", initials: "II", vote: "for" },
        { name: "Viktor Orri", initials: "VO", vote: "for" },
        { name: "Halla Hrund", initials: "HH", vote: "for" },
        { name: "Pawel Bartoszek", initials: "PB", vote: "for" },
        { name: "Þorbjörg S.", initials: "ÞS", vote: "for" },
      ],
    },
    {
      partyName: "Miðflokkurinn",
      color: "#0A2B59",
      mps: [
        { name: "Hildur Gunnarsdóttir", initials: "HG", vote: "abstain" },
        { name: "Sigmundur Davíð", initials: "SD", vote: "against" },
        { name: "Bergþór Ólason", initials: "BÓ", vote: "abstain" },
        { name: "Jakob Frímann", initials: "JF", vote: "against" },
        { name: "Nanna Margrét", initials: "NM", vote: "abstain" },
        { name: "Anna Kristín", initials: "AK", vote: "abstain" },
        { name: "Karl Gauti", initials: "KG", vote: "abstain" },
        { name: "Snorri Másson", initials: "SM", vote: "abstain" },
      ],
    },
    {
      partyName: "Flokkur fólksins",
      color: "#E8B517",
      mps: [
        { name: "Þóra Sigfúsdóttir", initials: "ÞS", vote: "for" },
        { name: "Inga Sæland", initials: "IS", vote: "for" },
        { name: "Ásthildur Lóa", initials: "ÁL", vote: "for" },
        { name: "Tómas A.", initials: "TA", vote: "for" },
        { name: "Eyjólfur Ármannsson", initials: "EÁ", vote: "for" },
        { name: "Guðmundur Ingi", initials: "GI", vote: "for" },
        { name: "Jakob Benediktsson", initials: "JB", vote: "for" },
      ],
    },
    {
      partyName: "Framsóknarflokkurinn",
      color: "#107C38",
      mps: [
        { name: "Sigurður Hansson", initials: "SH", vote: "for" },
        { name: "Lilja Alfreðsdóttir", initials: "LA", vote: "for" },
        { name: "Willum Þór", initials: "WÞ", vote: "for" },
        { name: "Ingibjörg Ólöf", initials: "IÓ", vote: "for" },
        { name: "Ásmundur Einar", initials: "ÁE", vote: "for" },
      ],
    },
    {
      partyName: "Píratar",
      color: "#6B3E8A",
      mps: [
        { name: "Guðmundur Ólafsson", initials: "GÓ", vote: "for" },
        { name: "Björn Leví", initials: "BL", vote: "for" },
        { name: "Halldóra Mogensen", initials: "HM", vote: "abstain" },
      ],
    },
  ],
  timeline: [
    {
      date: "22. janúar 2026",
      title: "Lagt fram á Alþingi",
      description: "Fjármála- og efnahagsráðherra lagði frumvarpið fram ásamt 14 meðflutningsmönnum.",
    },
    {
      date: "30. janúar 2026",
      title: "1. umræða lokið · vísað í nefnd",
      description: "Umræður stóðu í tæpa 4 klst. 23 þingmenn tóku til máls.",
    },
    {
      date: "5. febrúar – 12. mars",
      title: "Meðferð í velferðarnefnd",
      description: "Nefndin hélt 6 fundi og tók við 47 umsögnum. Tvö nefndarálit voru gefin út — meirihlutaálit og minnihlutaálit.",
    },
    {
      date: "18. mars 2026",
      title: "2. umræða · 8 breytingartillögur",
      description: "3 breytingartillögur samþykktar, 5 felldar.",
    },
    {
      date: "14. apríl 2026",
      title: "3. umræða · atkvæðagreiðsla",
      description: "Samþykkt með 42 atkvæðum gegn 14. 7 þingmenn sátu hjá.",
      isCurrent: true,
    },
  ],
};
