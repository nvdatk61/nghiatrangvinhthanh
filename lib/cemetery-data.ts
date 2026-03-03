export type GraveStatus = "occupied" | "available" | "reserved";

export interface GraveRecord {
  id: string;
  plotNumber: string;
  section: string;
  row: number;
  col: number;
  status: GraveStatus;
  deceased?: {
    fullName: string;
    dateOfBirth: string;
    dateOfDeath: string;
    age: number;
    epitaph: string;
    biography: string;
    religion?: string;
    nationality?: string;
    familyContact: {
      name: string;
      relationship: string;
      phone: string;
      email: string;
    };
  };
}

export const CEMETERY_DATA: GraveRecord[] = [
  {
    id: "g-001",
    plotNumber: "A-001",
    section: "A",
    row: 1,
    col: 1,
    status: "occupied",
    deceased: {
      fullName: "Eleanor Margaret Whitfield",
      dateOfBirth: "March 14, 1932",
      dateOfDeath: "November 8, 2021",
      age: 89,
      epitaph: "Beloved mother, grandmother, and lifelong teacher. Her wisdom lives in every heart she touched.",
      biography:
        "Eleanor served as a primary school teacher for over 40 years in the local community. She was known for her patience and dedication to every student she taught. A passionate gardener and avid reader, she spent her retirement surrounded by family.",
      religion: "Anglican",
      nationality: "British",
      familyContact: {
        name: "James Whitfield",
        relationship: "Son",
        phone: "+44 7700 900142",
        email: "j.whitfield@email.com",
      },
    },
  },
  {
    id: "g-002",
    plotNumber: "A-002",
    section: "A",
    row: 1,
    col: 2,
    status: "occupied",
    deceased: {
      fullName: "Robert Charles Henson",
      dateOfBirth: "July 22, 1945",
      dateOfDeath: "February 3, 2023",
      age: 77,
      epitaph: "A man of honour, faith, and quiet strength.",
      biography:
        "Robert served in the Royal Navy for 25 years before retiring to manage the family estate. He was an avid fisherman and a devoted member of the local parish. He is survived by his wife Dorothy and three children.",
      religion: "Catholic",
      nationality: "British",
      familyContact: {
        name: "Dorothy Henson",
        relationship: "Wife",
        phone: "+44 7700 900381",
        email: "d.henson@email.com",
      },
    },
  },
  {
    id: "g-003",
    plotNumber: "A-003",
    section: "A",
    row: 1,
    col: 3,
    status: "available",
  },
  {
    id: "g-004",
    plotNumber: "A-004",
    section: "A",
    row: 1,
    col: 4,
    status: "occupied",
    deceased: {
      fullName: "Miriam Constance Okafor",
      dateOfBirth: "September 5, 1958",
      dateOfDeath: "June 19, 2022",
      age: 63,
      epitaph: "Her laughter was a gift to all who knew her.",
      biography:
        "Miriam was a celebrated community nurse who dedicated 35 years to the local hospital. She co-founded a women's literacy programme and mentored dozens of young nurses throughout her career.",
      religion: "Christian",
      nationality: "Nigerian-British",
      familyContact: {
        name: "Samuel Okafor",
        relationship: "Husband",
        phone: "+44 7911 123456",
        email: "s.okafor@email.com",
      },
    },
  },
  {
    id: "g-005",
    plotNumber: "A-005",
    section: "A",
    row: 1,
    col: 5,
    status: "reserved",
  },
  {
    id: "g-006",
    plotNumber: "A-006",
    section: "A",
    row: 1,
    col: 6,
    status: "occupied",
    deceased: {
      fullName: "Thomas Edwin Llewellyn",
      dateOfBirth: "April 11, 1939",
      dateOfDeath: "December 25, 2020",
      age: 81,
      epitaph: "Gone home on Christmas Day. A life fully lived.",
      biography:
        "Thomas was a Welsh poet and former coal miner who published two collections of verse later in life. He was a passionate singer in the local male voice choir for nearly 50 years.",
      religion: "Methodist",
      nationality: "Welsh",
      familyContact: {
        name: "Gwen Llewellyn",
        relationship: "Daughter",
        phone: "+44 7700 900765",
        email: "g.llewellyn@email.com",
      },
    },
  },
  {
    id: "g-007",
    plotNumber: "B-001",
    section: "B",
    row: 2,
    col: 1,
    status: "occupied",
    deceased: {
      fullName: "Priya Ananya Sharma",
      dateOfBirth: "January 30, 1975",
      dateOfDeath: "March 14, 2024",
      age: 49,
      epitaph: "Taken too soon. A brilliant mind and a generous spirit.",
      biography:
        "Dr. Priya Sharma was a consultant cardiologist at the Royal London Hospital. She was also an accomplished classical musician, playing the sitar to concert level. She is deeply missed by her husband and two daughters.",
      religion: "Hindu",
      nationality: "British-Indian",
      familyContact: {
        name: "Arjun Sharma",
        relationship: "Husband",
        phone: "+44 7800 234567",
        email: "a.sharma@email.com",
      },
    },
  },
  {
    id: "g-008",
    plotNumber: "B-002",
    section: "B",
    row: 2,
    col: 2,
    status: "available",
  },
  {
    id: "g-009",
    plotNumber: "B-003",
    section: "B",
    row: 2,
    col: 3,
    status: "occupied",
    deceased: {
      fullName: "Frederick George Ashton",
      dateOfBirth: "August 17, 1928",
      dateOfDeath: "October 1, 2019",
      age: 91,
      epitaph: "Veteran, father, friend. We remember.",
      biography:
        "Frederick served in the British Army during the Korean War and later became a respected civil engineer. He designed several bridges in the surrounding county. In retirement, he was passionate about model railways and mentoring young engineers.",
      religion: "Anglican",
      nationality: "British",
      familyContact: {
        name: "Linda Ashton-Clarke",
        relationship: "Daughter",
        phone: "+44 7700 900234",
        email: "l.ashton@email.com",
      },
    },
  },
  {
    id: "g-010",
    plotNumber: "B-004",
    section: "B",
    row: 2,
    col: 4,
    status: "available",
  },
  {
    id: "g-011",
    plotNumber: "B-005",
    section: "B",
    row: 2,
    col: 5,
    status: "occupied",
    deceased: {
      fullName: "Agnes Beatrice Thornton",
      dateOfBirth: "February 28, 1941",
      dateOfDeath: "July 7, 2023",
      age: 82,
      epitaph: "A gentle soul who found beauty in every ordinary day.",
      biography:
        "Agnes was a celebrated watercolour artist whose work was exhibited in several regional galleries. She taught art at the community centre for 20 years and her paintings still hang in the local library and town hall.",
      religion: "Quaker",
      nationality: "British",
      familyContact: {
        name: "Michael Thornton",
        relationship: "Son",
        phone: "+44 7700 900567",
        email: "m.thornton@email.com",
      },
    },
  },
  {
    id: "g-012",
    plotNumber: "B-006",
    section: "B",
    row: 2,
    col: 6,
    status: "reserved",
  },
  {
    id: "g-013",
    plotNumber: "C-001",
    section: "C",
    row: 3,
    col: 1,
    status: "available",
  },
  {
    id: "g-014",
    plotNumber: "C-002",
    section: "C",
    row: 3,
    col: 2,
    status: "occupied",
    deceased: {
      fullName: "Alistair Duncan MacPherson",
      dateOfBirth: "November 3, 1950",
      dateOfDeath: "January 22, 2024",
      age: 73,
      epitaph: "The mountains are calling and he has gone.",
      biography:
        "Alistair was a retired professor of Scottish history at the University of Edinburgh. An enthusiastic mountaineer and founder of the local hillwalking club, he completed every Munro in Scotland twice over.",
      religion: "Presbyterian",
      nationality: "Scottish",
      familyContact: {
        name: "Fiona MacPherson",
        relationship: "Wife",
        phone: "+44 7900 456789",
        email: "f.macpherson@email.com",
      },
    },
  },
  {
    id: "g-015",
    plotNumber: "C-003",
    section: "C",
    row: 3,
    col: 3,
    status: "occupied",
    deceased: {
      fullName: "Rosa Immaculada Ferreira",
      dateOfBirth: "June 12, 1963",
      dateOfDeath: "September 30, 2022",
      age: 59,
      epitaph: "Her love was a lighthouse in every storm.",
      biography:
        "Rosa emigrated from Portugal at the age of 24 and built a successful bakery business that became a beloved institution in the town centre. She was known for her generosity, providing bread to food banks every week without fail.",
      religion: "Catholic",
      nationality: "Portuguese-British",
      familyContact: {
        name: "Carlos Ferreira",
        relationship: "Husband",
        phone: "+44 7700 900891",
        email: "c.ferreira@email.com",
      },
    },
  },
  {
    id: "g-016",
    plotNumber: "C-004",
    section: "C",
    row: 3,
    col: 4,
    status: "available",
  },
  {
    id: "g-017",
    plotNumber: "C-005",
    section: "C",
    row: 3,
    col: 5,
    status: "occupied",
    deceased: {
      fullName: "Harold James Pemberton",
      dateOfBirth: "December 9, 1936",
      dateOfDeath: "May 12, 2021",
      age: 84,
      epitaph: "He served with honour and laughed with abandon.",
      biography:
        "Harold was a former police constable who later became the town's most beloved greengrocer. His shop was a social hub for 30 years. He had an encyclopaedic knowledge of cricket and never missed a Test match.",
      religion: "Anglican",
      nationality: "British",
      familyContact: {
        name: "Patricia Pemberton",
        relationship: "Wife",
        phone: "+44 7700 900321",
        email: "p.pemberton@email.com",
      },
    },
  },
  {
    id: "g-018",
    plotNumber: "C-006",
    section: "C",
    row: 3,
    col: 6,
    status: "occupied",
    deceased: {
      fullName: "Yusuf Ibrahim Al-Rashid",
      dateOfBirth: "March 25, 1947",
      dateOfDeath: "August 15, 2023",
      age: 76,
      epitaph: "A man of knowledge, prayer, and infinite kindness.",
      biography:
        "Yusuf was a retired professor of Arabic literature who contributed enormously to interfaith dialogue in the local community. He translated several classic Arabic works into English and was a mentor to countless students over four decades.",
      religion: "Islamic",
      nationality: "British-Jordanian",
      familyContact: {
        name: "Fatima Al-Rashid",
        relationship: "Daughter",
        phone: "+44 7800 567890",
        email: "f.alrashid@email.com",
      },
    },
  },
  {
    id: "g-019",
    plotNumber: "D-001",
    section: "D",
    row: 4,
    col: 1,
    status: "occupied",
    deceased: {
      fullName: "Violet Josephine Carrington",
      dateOfBirth: "October 18, 1929",
      dateOfDeath: "April 3, 2020",
      age: 90,
      epitaph: "Ninety years of grace, resilience, and love.",
      biography:
        "Violet was a nurse during World War II and later founded a charity supporting the elderly in her district. She received an MBE for services to the community in 1998. Her memoir, published in 2015, became a local bestseller.",
      religion: "Anglican",
      nationality: "British",
      familyContact: {
        name: "Edward Carrington",
        relationship: "Grandson",
        phone: "+44 7900 112233",
        email: "e.carrington@email.com",
      },
    },
  },
  {
    id: "g-020",
    plotNumber: "D-002",
    section: "D",
    row: 4,
    col: 2,
    status: "reserved",
  },
  {
    id: "g-021",
    plotNumber: "D-003",
    section: "D",
    row: 4,
    col: 3,
    status: "occupied",
    deceased: {
      fullName: "Nnamdi Chukwuemeka Eze",
      dateOfBirth: "May 7, 1960",
      dateOfDeath: "November 27, 2022",
      age: 62,
      epitaph: "The roots run deep. The legacy endures.",
      biography:
        "Nnamdi was a civil rights lawyer and community activist who championed housing rights for over 30 years. He co-founded a legal aid centre that continues to serve hundreds of families each year.",
      religion: "Christian",
      nationality: "British-Nigerian",
      familyContact: {
        name: "Ngozi Eze",
        relationship: "Wife",
        phone: "+44 7700 998877",
        email: "n.eze@email.com",
      },
    },
  },
  {
    id: "g-022",
    plotNumber: "D-004",
    section: "D",
    row: 4,
    col: 4,
    status: "available",
  },
  {
    id: "g-023",
    plotNumber: "D-005",
    section: "D",
    row: 4,
    col: 5,
    status: "occupied",
    deceased: {
      fullName: "Margaret Anne Sutherland",
      dateOfBirth: "January 14, 1943",
      dateOfDeath: "February 28, 2024",
      age: 81,
      epitaph: "The world was richer for her presence in it.",
      biography:
        "Margaret was a pioneering environmental scientist who published groundbreaking research on wetland conservation in the 1970s. She later became a beloved naturalist broadcaster and wrote 12 books on British wildlife.",
      religion: "Atheist",
      nationality: "Scottish",
      familyContact: {
        name: "David Sutherland",
        relationship: "Brother",
        phone: "+44 7800 334455",
        email: "d.sutherland@email.com",
      },
    },
  },
  {
    id: "g-024",
    plotNumber: "D-006",
    section: "D",
    row: 4,
    col: 6,
    status: "occupied",
    deceased: {
      fullName: "Arthur Benjamin Coldwell",
      dateOfBirth: "September 28, 1955",
      dateOfDeath: "October 10, 2023",
      age: 68,
      epitaph: "A craftsman whose hands built things that last.",
      biography:
        "Arthur was a master carpenter who restored historic buildings across the country. His intricate woodwork can be found in several listed churches and heritage sites. He was a loving father of four and a dedicated football coach.",
      religion: "Anglican",
      nationality: "British",
      familyContact: {
        name: "Susan Coldwell",
        relationship: "Wife",
        phone: "+44 7700 556677",
        email: "s.coldwell@email.com",
      },
    },
  },
];
