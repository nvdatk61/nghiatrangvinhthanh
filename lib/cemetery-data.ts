export type GraveStatus = "occupied" | "available" | "unknown";

export interface GraveRecord {
  id: string;
  plotNumber: string;
  block: "left" | "right";
  row: number;
  col: number;
  status: GraveStatus;
  deceased?: {
    fullName: string;
    dateOfBirth: string;
    dateOfDeath: string;
    hometown?: string;
    enlistmentDate?: string;
    rank?: string;
    deathPlace?: string;
    unit?: string;
    epitaph?: string;
    biography?: string;
    familyContact?: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
}

// ─── LEFT BLOCK ────────────────────────────────────────────────────────────────
// Row 1 (14 graves)
const leftRow1: GraveRecord[] = [
  { id:"L-R1-01", plotNumber:"01", block:"left", row:1, col:1,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Hoà", dateOfBirth:"1923", dateOfDeath:"26.01.1947", hometown:"Phú Giã", enlistmentDate:"Chưa rõ", rank:"Trung đội trưởng", deathPlace:"Chưa rõ" } },
  { id:"L-R1-02", plotNumber:"02", block:"left", row:1, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Lương",   dateOfBirth:"", dateOfDeath:"17.11.1947" } },
  { id:"L-R1-03", plotNumber:"03", block:"left", row:1, col:3,  status:"occupied", deceased:{ fullName:"Thân Văn Đức",       dateOfBirth:"", dateOfDeath:"10.1949" } },
  { id:"L-R1-04", plotNumber:"04", block:"left", row:1, col:4,  status:"occupied", deceased:{ fullName:"Trần Văn Thủ",       dateOfBirth:"", dateOfDeath:"1952" } },
  { id:"L-R1-05", plotNumber:"05", block:"left", row:1, col:5,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Ngọc Lâm",dateOfBirth:"", dateOfDeath:"01.7.1949" } },
  { id:"L-R1-06", plotNumber:"06", block:"left", row:1, col:6,  status:"occupied", deceased:{ fullName:"Thân Văn Đường",     dateOfBirth:"", dateOfDeath:"12.10.1948" } },
  { id:"L-R1-07", plotNumber:"07", block:"left", row:1, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Hợp",    dateOfBirth:"", dateOfDeath:"6.1949" } },
  { id:"L-R1-08", plotNumber:"08", block:"left", row:1, col:8,  status:"occupied", deceased:{ fullName:"Vũ Hồng Đức",       dateOfBirth:"", dateOfDeath:"1949" } },
  { id:"L-R1-09", plotNumber:"09", block:"left", row:1, col:9,  status:"occupied", deceased:{ fullName:"Tống Văn Nhương",   dateOfBirth:"", dateOfDeath:"9.1950" } },
  { id:"L-R1-10", plotNumber:"10", block:"left", row:1, col:10, status:"occupied", deceased:{ fullName:"Tống Văn Tốn",      dateOfBirth:"", dateOfDeath:"9.1950" } },
  { id:"L-R1-11", plotNumber:"11", block:"left", row:1, col:11, status:"occupied", deceased:{ fullName:"Đỗ Văn Vọng",       dateOfBirth:"", dateOfDeath:"9.1950" } },
  { id:"L-R1-12", plotNumber:"12", block:"left", row:1, col:12, status:"occupied", deceased:{ fullName:"Đỗ Văn Mão",        dateOfBirth:"", dateOfDeath:"9.1950" } },
  { id:"L-R1-13", plotNumber:"13", block:"left", row:1, col:13, status:"occupied", deceased:{ fullName:"Đỗ Văn Sự",         dateOfBirth:"", dateOfDeath:"22.9.1950" } },
];

// Row 2 (14 graves)
const leftRow2: GraveRecord[] = [
  { id:"L-R2-01", plotNumber:"14", block:"left", row:2, col:1,  status:"occupied", deceased:{ fullName:"Đỗ Văn Học",        dateOfBirth:"", dateOfDeath:"22.9.1950" } },
  { id:"L-R2-02", plotNumber:"15", block:"left", row:2, col:2,  status:"occupied", deceased:{ fullName:"Phạm Văn Chiều",    dateOfBirth:"", dateOfDeath:"1950" } },
  { id:"L-R2-03", plotNumber:"16", block:"left", row:2, col:3,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Tục",    dateOfBirth:"", dateOfDeath:"1950" } },
  { id:"L-R2-04", plotNumber:"17", block:"left", row:2, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Ngần",   dateOfBirth:"", dateOfDeath:"1950" } },
  { id:"L-R2-05", plotNumber:"18", block:"left", row:2, col:5,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Chi",    dateOfBirth:"", dateOfDeath:"1952" } },
  { id:"L-R2-06", plotNumber:"19", block:"left", row:2, col:6,  status:"occupied", deceased:{ fullName:"Thân Văn Đân",      dateOfBirth:"", dateOfDeath:"1952" } },
  { id:"L-R2-07", plotNumber:"20", block:"left", row:2, col:7,  status:"occupied", deceased:{ fullName:"Vũ Thành Thọ",      dateOfBirth:"", dateOfDeath:"1952" } },
  { id:"L-R2-08", plotNumber:"21", block:"left", row:2, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Quảng Thành",dateOfBirth:"", dateOfDeath:"14.6.1951" } },
  { id:"L-R2-09", plotNumber:"22", block:"left", row:2, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Thành",  dateOfBirth:"", dateOfDeath:"2.1953" } },
  { id:"L-R2-10", plotNumber:"23", block:"left", row:2, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Văn Chinh",  dateOfBirth:"", dateOfDeath:"9.1953" } },
  { id:"L-R2-11", plotNumber:"24", block:"left", row:2, col:11, status:"occupied", deceased:{ fullName:"Bùi Văn Chinh",     dateOfBirth:"", dateOfDeath:"31.01.1952" } },
  { id:"L-R2-12", plotNumber:"25", block:"left", row:2, col:12, status:"occupied", deceased:{ fullName:"Nguyễn Văn Nhỡ",   dateOfBirth:"", dateOfDeath:"1953" } },
  { id:"L-R2-13", plotNumber:"26", block:"left", row:2, col:13, status:"occupied", deceased:{ fullName:"Cao Sỹ Phiêu",      dateOfBirth:"", dateOfDeath:"1954" } },
];

// Row 3
const leftRow3: GraveRecord[] = [
  { id:"L-R3-01", plotNumber:"27", block:"left", row:3, col:1,  status:"occupied", deceased:{ fullName:"Đỗ Văn Đài",        dateOfBirth:"", dateOfDeath:"1954" } },
  { id:"L-R3-02", plotNumber:"28", block:"left", row:3, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Mão",    dateOfBirth:"", dateOfDeath:"1954" } },
  { id:"L-R3-03", plotNumber:"29", block:"left", row:3, col:3,  status:"occupied", deceased:{ fullName:"Đỗ Văn Cự",         dateOfBirth:"", dateOfDeath:"1964" } },
  { id:"L-R3-04", plotNumber:"30", block:"left", row:3, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Đề",     dateOfBirth:"", dateOfDeath:"12.1965" } },
  { id:"L-R3-05", plotNumber:"31", block:"left", row:3, col:5,  status:"occupied", deceased:{ fullName:"Đỗ Văn Ấn",         dateOfBirth:"", dateOfDeath:"19.3.1967" } },
  { id:"L-R3-06", plotNumber:"32", block:"left", row:3, col:6,  status:"occupied", deceased:{ fullName:"Tống Văn Lập",      dateOfBirth:"", dateOfDeath:"30.5.1967" } },
  { id:"L-R3-07", plotNumber:"33", block:"left", row:3, col:7,  status:"occupied", deceased:{ fullName:"Cao Việt Thụ",      dateOfBirth:"", dateOfDeath:"02.01.1968" } },
  { id:"L-R3-08", plotNumber:"34", block:"left", row:3, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Lê",     dateOfBirth:"", dateOfDeath:"21.12.1967" } },
  { id:"L-R3-09", plotNumber:"35", block:"left", row:3, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Thân Thúy",  dateOfBirth:"", dateOfDeath:"1.1968" } },
  { id:"L-R3-10", plotNumber:"36", block:"left", row:3, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Đức Nhà",    dateOfBirth:"", dateOfDeath:"21.01.1968" } },
  { id:"L-R3-11", plotNumber:"37", block:"left", row:3, col:11, status:"occupied", deceased:{ fullName:"Lê Văn Hùng",       dateOfBirth:"", dateOfDeath:"2.1968" } },
  { id:"L-R3-12", plotNumber:"38", block:"left", row:3, col:12, status:"occupied", deceased:{ fullName:"Ngô Xuân Ninh",     dateOfBirth:"", dateOfDeath:"12.9.1968" } },
  { id:"L-R3-13", plotNumber:"39", block:"left", row:3, col:13, status:"occupied", deceased:{ fullName:"Tống Văn Ngọ",      dateOfBirth:"", dateOfDeath:"2.1968" } },
];

// Row 4
const leftRow4: GraveRecord[] = [
  { id:"L-R4-01", plotNumber:"40", block:"left", row:4, col:1,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Vương",  dateOfBirth:"", dateOfDeath:"19.12.1968" } },
  { id:"L-R4-02", plotNumber:"41", block:"left", row:4, col:2,  status:"occupied", deceased:{ fullName:"Đỗ Văn Định",       dateOfBirth:"", dateOfDeath:"3.1968" } },
  { id:"L-R4-03", plotNumber:"42", block:"left", row:4, col:3,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Chung",  dateOfBirth:"", dateOfDeath:"21.5.1965" } },
  { id:"L-R4-04", plotNumber:"43", block:"left", row:4, col:4,  status:"occupied", deceased:{ fullName:"Thân Văn Điền",     dateOfBirth:"", dateOfDeath:"10.5.1968" } },
  { id:"L-R4-05", plotNumber:"44", block:"left", row:4, col:5,  status:"occupied", deceased:{ fullName:"Tống Văn Lộc",      dateOfBirth:"", dateOfDeath:"15.5.1968" } },
  { id:"L-R4-06", plotNumber:"45", block:"left", row:4, col:6,  status:"occupied", deceased:{ fullName:"Lê Văn Tháu",       dateOfBirth:"", dateOfDeath:"5.1968" } },
  { id:"L-R4-07", plotNumber:"46", block:"left", row:4, col:7,  status:"occupied", deceased:{ fullName:"Đỗ Đức Quế",        dateOfBirth:"", dateOfDeath:"8.1968" } },
  { id:"L-R4-08", plotNumber:"47", block:"left", row:4, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Bảng",   dateOfBirth:"", dateOfDeath:"18.9.1968" } },
  { id:"L-R4-09", plotNumber:"48", block:"left", row:4, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Thái",   dateOfBirth:"", dateOfDeath:"11.1968" } },
  { id:"L-R4-10", plotNumber:"49", block:"left", row:4, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Văn Để",     dateOfBirth:"", dateOfDeath:"1.1969" } },
  { id:"L-R4-11", plotNumber:"50", block:"left", row:4, col:11, status:"occupied", deceased:{ fullName:"Tống Văn Sức",      dateOfBirth:"", dateOfDeath:"1.1969" } },
  { id:"L-R4-12", plotNumber:"51", block:"left", row:4, col:12, status:"occupied", deceased:{ fullName:"Nguyễn Văn Điều",   dateOfBirth:"", dateOfDeath:"07.02.1968" } },
  { id:"L-R4-13", plotNumber:"52", block:"left", row:4, col:13, status:"occupied", deceased:{ fullName:"Nguyễn Tiến Định",  dateOfBirth:"", dateOfDeath:"3.1969" } },
];

// Row 5 (gap row — intentionally empty to match image spacing)
// Row 6
const leftRow6: GraveRecord[] = [
  { id:"L-R6-01", plotNumber:"53", block:"left", row:6, col:1,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Xoang",  dateOfBirth:"", dateOfDeath:"1969" } },
  { id:"L-R6-02", plotNumber:"54", block:"left", row:6, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Túc",    dateOfBirth:"", dateOfDeath:"20.3.1969" } },
  { id:"L-R6-03", plotNumber:"55", block:"left", row:6, col:3,  status:"occupied", deceased:{ fullName:"Trịnh Văn Mai",     dateOfBirth:"", dateOfDeath:"5.1969" } },
  { id:"L-R6-04", plotNumber:"56", block:"left", row:6, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Bá Giáp",   dateOfBirth:"", dateOfDeath:"6.1969" } },
  { id:"L-R6-05", plotNumber:"57", block:"left", row:6, col:5,  status:"occupied", deceased:{ fullName:"Nguyễn Công Đức",   dateOfBirth:"", dateOfDeath:"6.1969" } },
  { id:"L-R6-06", plotNumber:"58", block:"left", row:6, col:6,  status:"occupied", deceased:{ fullName:"Hoàng Ngọc Điệp",   dateOfBirth:"", dateOfDeath:"7.1969" } },
  { id:"L-R6-07", plotNumber:"59", block:"left", row:6, col:7,  status:"occupied", deceased:{ fullName:"Thân Văn Liên",     dateOfBirth:"", dateOfDeath:"15.7.1969" } },
  { id:"L-R6-08", plotNumber:"60", block:"left", row:6, col:8,  status:"occupied", deceased:{ fullName:"Đỗ Văn Phong",      dateOfBirth:"", dateOfDeath:"18.5.1969" } },
  { id:"L-R6-09", plotNumber:"61", block:"left", row:6, col:9,  status:"occupied", deceased:{ fullName:"Đỗ Văn Tướng",      dateOfBirth:"", dateOfDeath:"02.9.1969" } },
  { id:"L-R6-10", plotNumber:"62", block:"left", row:6, col:10, status:"occupied", deceased:{ fullName:"Thân Ngọc Việt",    dateOfBirth:"", dateOfDeath:"12.1969" } },
  { id:"L-R6-11", plotNumber:"63", block:"left", row:6, col:11, status:"occupied", deceased:{ fullName:"Trần Văn Bằng",     dateOfBirth:"", dateOfDeath:"12.1969" } },
  { id:"L-R6-12", plotNumber:"64", block:"left", row:6, col:12, status:"occupied", deceased:{ fullName:"Trần Hồng Long",    dateOfBirth:"", dateOfDeath:"12.3.1969" } },
  { id:"L-R6-13", plotNumber:"65", block:"left", row:6, col:13, status:"occupied", deceased:{ fullName:"Trần Văn Sản",      dateOfBirth:"", dateOfDeath:"5.197" } },
];

// Row 7
const leftRow7: GraveRecord[] = [
  { id:"L-R7-01", plotNumber:"66", block:"left", row:7, col:1,  status:"occupied", deceased:{ fullName:"Đỗ Văn Xu",         dateOfBirth:"", dateOfDeath:"16.6.1953" } },
  { id:"L-R7-02", plotNumber:"67", block:"left", row:7, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Định",   dateOfBirth:"", dateOfDeath:"05.8.1970" } },
  { id:"L-R7-03", plotNumber:"68", block:"left", row:7, col:3,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Bỉ",     dateOfBirth:"", dateOfDeath:"6.197" } },
  { id:"L-R7-04", plotNumber:"69", block:"left", row:7, col:4,  status:"occupied", deceased:{ fullName:"Trần Văn Tư",       dateOfBirth:"", dateOfDeath:"08.7.1970" } },
  { id:"L-R7-05", plotNumber:"70", block:"left", row:7, col:5,  status:"occupied", deceased:{ fullName:"Lê Văn Thích",      dateOfBirth:"", dateOfDeath:"7.197" } },
  { id:"L-R7-06", plotNumber:"71", block:"left", row:7, col:6,  status:"occupied", deceased:{ fullName:"Đỗ Văn Hoè",        dateOfBirth:"", dateOfDeath:"7.197" } },
  { id:"L-R7-07", plotNumber:"72", block:"left", row:7, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Bằng",   dateOfBirth:"", dateOfDeath:"08.3.1971" } },
  { id:"L-R7-08", plotNumber:"73", block:"left", row:7, col:8,  status:"occupied", deceased:{ fullName:"Thân Thúy Sỹ",      dateOfBirth:"", dateOfDeath:"10.9.1970" } },
  { id:"L-R7-09", plotNumber:"74", block:"left", row:7, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Nhương", dateOfBirth:"", dateOfDeath:"9.197" } },
  { id:"L-R7-10", plotNumber:"75", block:"left", row:7, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Tiến Tảo",   dateOfBirth:"", dateOfDeath:"09.11.1970" } },
  { id:"L-R7-11", plotNumber:"76", block:"left", row:7, col:11, status:"occupied", deceased:{ fullName:"Nguyễn Thế Hùng",   dateOfBirth:"", dateOfDeath:"10.02.1971" } },
  { id:"L-R7-12", plotNumber:"77", block:"left", row:7, col:12, status:"occupied", deceased:{ fullName:"Nguyễn Văn Huân",   dateOfBirth:"", dateOfDeath:"3.1971" } },
  { id:"L-R7-13", plotNumber:"78", block:"left", row:7, col:13, status:"occupied", deceased:{ fullName:"Nguyễn Minh Dương", dateOfBirth:"", dateOfDeath:"3.1971" } },
];

// Row 8
const leftRow8: GraveRecord[] = [
  { id:"L-R8-01", plotNumber:"79", block:"left", row:8, col:1,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Bé",     dateOfBirth:"", dateOfDeath:"1946" } },
  { id:"L-R8-02", plotNumber:"80", block:"left", row:8, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Bộ",     dateOfBirth:"", dateOfDeath:"1947" } },
  { id:"L-R8-03", plotNumber:"81", block:"left", row:8, col:3,  status:"occupied", deceased:{ fullName:"Đỗ Văn Hiên",       dateOfBirth:"", dateOfDeath:"12.1991" } },
  { id:"L-R8-04", plotNumber:"82", block:"left", row:8, col:4,  status:"occupied", deceased:{ fullName:"Phạm Văn Dương",    dateOfBirth:"", dateOfDeath:"22.12.1970" } },
  { id:"L-R8-05", plotNumber:"83", block:"left", row:8, col:5,  status:"occupied", deceased:{ fullName:"Hà Văn Nôn",        dateOfBirth:"", dateOfDeath:"11.1977" } },
  { id:"L-R8-06", plotNumber:"84", block:"left", row:8, col:6,  status:"occupied", deceased:{ fullName:"Nguyễn Đồng Xuân",  dateOfBirth:"", dateOfDeath:"1969" } },
  { id:"L-R8-07", plotNumber:"85", block:"left", row:8, col:7,  status:"occupied", deceased:{ fullName:"Đỗ Văn Cat",        dateOfBirth:"", dateOfDeath:"2.1946" } },
  { id:"L-R8-08", plotNumber:"86", block:"left", row:8, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Xuân Nghiêm",dateOfBirth:"", dateOfDeath:"27.5.2000" } },
  { id:"L-R8-09", plotNumber:"87", block:"left", row:8, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Tích",   dateOfBirth:"", dateOfDeath:"26.10.1948" } },
  { id:"L-R8-10", plotNumber:"88", block:"left", row:8, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Văn Hội",    dateOfBirth:"", dateOfDeath:"03.11.1950" } },
  { id:"L-R8-11", plotNumber:"89", block:"left", row:8, col:11, status:"occupied", deceased:{ fullName:"Nguyễn Thị Hoàn",   dateOfBirth:"", dateOfDeath:"29.4.1966" } },
  { id:"L-R8-12", plotNumber:"90", block:"left", row:8, col:12, status:"occupied", deceased:{ fullName:"Hoàng Văn Giai",    dateOfBirth:"", dateOfDeath:"27.12.1968" } },
  { id:"L-R8-13", plotNumber:"91", block:"left", row:8, col:13, status:"occupied", deceased:{ fullName:"Phan Văn Ri",       dateOfBirth:"", dateOfDeath:"15.10.1969" } },
];

// Row 9 (short row)
const leftRow9: GraveRecord[] = [
  { id:"L-R9-01", plotNumber:"92", block:"left", row:9, col:1, status:"occupied", deceased:{ fullName:"Dương Văn Vắng",  dateOfBirth:"", dateOfDeath:"1966" } },
  { id:"L-R9-02", plotNumber:"93", block:"left", row:9, col:2, status:"occupied", deceased:{ fullName:"Vũ Văn Thuy",    dateOfBirth:"", dateOfDeath:"23.10.1973" } },
  { id:"L-R9-03", plotNumber:"94", block:"left", row:9, col:3, status:"occupied", deceased:{ fullName:"Dương Văn Hào",  dateOfBirth:"", dateOfDeath:"22.5.1969" } },
  { id:"L-R9-04", plotNumber:"95", block:"left", row:9, col:4, status:"occupied", deceased:{ fullName:"Lê Sỹ Thành",   dateOfBirth:"", dateOfDeath:"10.6.1970" } },
  { id:"L-R9-05", plotNumber:"96", block:"left", row:9, col:5, status:"occupied", deceased:{ fullName:"La Đức Nhật",   dateOfBirth:"", dateOfDeath:"16.8.1968" } },
];

// ─── RIGHT BLOCK ───────────────────────────────────────────────────────────────
// Row 1
const rightRow1: GraveRecord[] = [
  { id:"R-R1-01", plotNumber:"R01", block:"right", row:1, col:1,  status:"occupied", deceased:{ fullName:"Thân Văn Biên",    dateOfBirth:"", dateOfDeath:"1946" } },
  { id:"R-R1-02", plotNumber:"R02", block:"right", row:1, col:2,  status:"occupied", deceased:{ fullName:"Trần Văn Cầm",     dateOfBirth:"", dateOfDeath:"1947" } },
  { id:"R-R1-03", plotNumber:"R03", block:"right", row:1, col:3,  status:"occupied", deceased:{ fullName:"Đỗ Văn Bình",      dateOfBirth:"", dateOfDeath:"1947" } },
  { id:"R-R1-04", plotNumber:"R04", block:"right", row:1, col:4,  status:"occupied", deceased:{ fullName:"Đỗ Văn Sự",        dateOfBirth:"", dateOfDeath:"23.10.1947" } },
  { id:"R-R1-05", plotNumber:"R05", block:"right", row:1, col:5,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Dỵ",   dateOfBirth:"", dateOfDeath:"1947" } },
  { id:"R-R1-06", plotNumber:"R06", block:"right", row:1, col:6,  status:"occupied", deceased:{ fullName:"Thân Văn Quỳnh",   dateOfBirth:"", dateOfDeath:"10.11.1947" } },
  { id:"R-R1-07", plotNumber:"R07", block:"right", row:1, col:7,  status:"occupied", deceased:{ fullName:"Phạm Văn Mão",     dateOfBirth:"", dateOfDeath:"1949" } },
  { id:"R-R1-08", plotNumber:"R08", block:"right", row:1, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Tỵ",   dateOfBirth:"", dateOfDeath:"1949" } },
  { id:"R-R1-09", plotNumber:"R09", block:"right", row:1, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Tự",   dateOfBirth:"", dateOfDeath:"1949" } },
  { id:"R-R1-10", plotNumber:"R10", block:"right", row:1, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Văn Thành", dateOfBirth:"", dateOfDeath:"26.5.1953" } },
  { id:"R-R1-11", plotNumber:"R11", block:"right", row:1, col:11, status:"occupied", deceased:{ fullName:"Đỗ Văn Thích",     dateOfBirth:"", dateOfDeath:"5.1953" } },
  { id:"R-R1-12", plotNumber:"R12", block:"right", row:1, col:12, status:"occupied", deceased:{ fullName:"Phạm Văn Uy",      dateOfBirth:"", dateOfDeath:"09.4.1953" } },
  { id:"R-R1-13", plotNumber:"R13", block:"right", row:1, col:13, status:"occupied", deceased:{ fullName:"Nguyễn Văn Thọ",   dateOfBirth:"", dateOfDeath:"1953" } },
];

// Row 2
const rightRow2: GraveRecord[] = [
  { id:"R-R2-01", plotNumber:"R14", block:"right", row:2, col:1,  status:"unknown",  deceased:{ fullName:"LS chưa rõ thông tin", dateOfBirth:"", dateOfDeath:"1.1954" } },
  { id:"R-R2-02", plotNumber:"R15", block:"right", row:2, col:2,  status:"unknown",  deceased:{ fullName:"LS chưa rõ thông tin", dateOfBirth:"", dateOfDeath:"1.1954" } },
  { id:"R-R2-03", plotNumber:"R16", block:"right", row:2, col:3,  status:"occupied", deceased:{ fullName:"Đỗ Văn Sự",         dateOfBirth:"", dateOfDeath:"1.1954" } },
  { id:"R-R2-04", plotNumber:"R17", block:"right", row:2, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Chu",     dateOfBirth:"", dateOfDeath:"1.1954" } },
  { id:"R-R2-05", plotNumber:"R18", block:"right", row:2, col:5,  status:"occupied", deceased:{ fullName:"Thân Quang Lê",      dateOfBirth:"", dateOfDeath:"1.1954" } },
  { id:"R-R2-06", plotNumber:"R19", block:"right", row:2, col:6,  status:"occupied", deceased:{ fullName:"Phạm Văn Hiệp",      dateOfBirth:"", dateOfDeath:"9.1967" } },
  { id:"R-R2-07", plotNumber:"R20", block:"right", row:2, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Lần",     dateOfBirth:"", dateOfDeath:"7.1972" } },
  { id:"R-R2-08", plotNumber:"R21", block:"right", row:2, col:8,  status:"occupied", deceased:{ fullName:"Thân Văn Đặng",      dateOfBirth:"", dateOfDeath:"7.1978" } },
  { id:"R-R2-09", plotNumber:"R22", block:"right", row:2, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Ngọc Liên",   dateOfBirth:"", dateOfDeath:"17.02.1979" } },
  { id:"R-R2-10", plotNumber:"R23", block:"right", row:2, col:10, status:"occupied", deceased:{ fullName:"Thân Văn Lịch",      dateOfBirth:"", dateOfDeath:"27.01.1966" } },
  { id:"R-R2-11", plotNumber:"R24", block:"right", row:2, col:11, status:"occupied", deceased:{ fullName:"Vũ Văn Thuận",       dateOfBirth:"", dateOfDeath:"20.11.1970" } },
  { id:"R-R2-12", plotNumber:"R25", block:"right", row:2, col:12, status:"occupied", deceased:{ fullName:"Đoàn Văn Phẩm",      dateOfBirth:"", dateOfDeath:"3.1971" } },
  { id:"R-R2-13", plotNumber:"R26", block:"right", row:2, col:13, status:"occupied", deceased:{ fullName:"Nguyễn Văn Duyên",   dateOfBirth:"", dateOfDeath:"29.11.1971" } },
];

// Row 3
const rightRow3: GraveRecord[] = [
  { id:"R-R3-01", plotNumber:"R27", block:"right", row:3, col:1,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Vinh",   dateOfBirth:"", dateOfDeath:"26.4.1971" } },
  { id:"R-R3-02", plotNumber:"R28", block:"right", row:3, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Đức Thịnh",  dateOfBirth:"", dateOfDeath:"28.11.1971" } },
  { id:"R-R3-03", plotNumber:"R29", block:"right", row:3, col:3,  status:"occupied", deceased:{ fullName:"Phạm Văn Hành",     dateOfBirth:"", dateOfDeath:"1971" } },
  { id:"R-R3-04", plotNumber:"R30", block:"right", row:3, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Tiến Dụng",  dateOfBirth:"", dateOfDeath:"23.3.1972" } },
  { id:"R-R3-05", plotNumber:"R31", block:"right", row:3, col:5,  status:"occupied", deceased:{ fullName:"Tống Hồng Long",    dateOfBirth:"", dateOfDeath:"02.4.1972" } },
  { id:"R-R3-06", plotNumber:"R32", block:"right", row:3, col:6,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Phan",   dateOfBirth:"", dateOfDeath:"1972" } },
  { id:"R-R3-07", plotNumber:"R33", block:"right", row:3, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Thiện",  dateOfBirth:"", dateOfDeath:"25.8.1972" } },
  { id:"R-R3-08", plotNumber:"R34", block:"right", row:3, col:8,  status:"occupied", deceased:{ fullName:"Thân Văn Bài",      dateOfBirth:"", dateOfDeath:"1972" } },
  { id:"R-R3-09", plotNumber:"R35", block:"right", row:3, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Hìn",    dateOfBirth:"", dateOfDeath:"22.8.1972" } },
  { id:"R-R3-10", plotNumber:"R36", block:"right", row:3, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Xuân Kỳ",    dateOfBirth:"", dateOfDeath:"1972" } },
  { id:"R-R3-11", plotNumber:"R37", block:"right", row:3, col:11, status:"occupied", deceased:{ fullName:"Cao Xuân Vĩnh",     dateOfBirth:"", dateOfDeath:"16.9.1972" } },
  { id:"R-R3-12", plotNumber:"R38", block:"right", row:3, col:12, status:"occupied", deceased:{ fullName:"Nguyễn VănVăn",     dateOfBirth:"", dateOfDeath:"16.10.1972" } },
  { id:"R-R3-13", plotNumber:"R39", block:"right", row:3, col:13, status:"occupied", deceased:{ fullName:"Trần Quang Xa",     dateOfBirth:"", dateOfDeath:"30.10.1972" } },
];

// Row 4
const rightRow4: GraveRecord[] = [
  { id:"R-R4-01", plotNumber:"R40", block:"right", row:4, col:1,  status:"occupied", deceased:{ fullName:"Tống Văn Số",       dateOfBirth:"", dateOfDeath:"1972" } },
  { id:"R-R4-02", plotNumber:"R41", block:"right", row:4, col:2,  status:"occupied", deceased:{ fullName:"Nguyễn Anh Chiến",  dateOfBirth:"", dateOfDeath:"11.12.1972" } },
  { id:"R-R4-03", plotNumber:"R42", block:"right", row:4, col:3,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Sen",    dateOfBirth:"", dateOfDeath:"27.01.1973" } },
  { id:"R-R4-04", plotNumber:"R43", block:"right", row:4, col:4,  status:"occupied", deceased:{ fullName:"NguyễnVăn Minh",    dateOfBirth:"", dateOfDeath:"16.4.1972" } },
  { id:"R-R4-05", plotNumber:"R44", block:"right", row:4, col:5,  status:"occupied", deceased:{ fullName:"Trần Văn Sơn",      dateOfBirth:"", dateOfDeath:"23.01.1973" } },
  { id:"R-R4-06", plotNumber:"R45", block:"right", row:4, col:6,  status:"occupied", deceased:{ fullName:"Nguyễn Ngọc Mỹ",   dateOfBirth:"", dateOfDeath:"09.02.1970" } },
  { id:"R-R4-07", plotNumber:"R46", block:"right", row:4, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Hưng",   dateOfBirth:"", dateOfDeath:"1973" } },
  { id:"R-R4-08", plotNumber:"R47", block:"right", row:4, col:8,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Thành",  dateOfBirth:"", dateOfDeath:"1973" } },
  { id:"R-R4-09", plotNumber:"R48", block:"right", row:4, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Chúc",   dateOfBirth:"", dateOfDeath:"1973" } },
  { id:"R-R4-10", plotNumber:"R49", block:"right", row:4, col:10, status:"occupied", deceased:{ fullName:"Tống Văn Hoà",      dateOfBirth:"", dateOfDeath:"1973" } },
  { id:"R-R4-11", plotNumber:"R50", block:"right", row:4, col:11, status:"occupied", deceased:{ fullName:"Nguyễn Văn Mục",    dateOfBirth:"", dateOfDeath:"20.12.1973" } },
  { id:"R-R4-12", plotNumber:"R51", block:"right", row:4, col:12, status:"occupied", deceased:{ fullName:"Đỗ Bình Dương",     dateOfBirth:"", dateOfDeath:"1974" } },
  { id:"R-R4-13", plotNumber:"R52", block:"right", row:4, col:13, status:"occupied", deceased:{ fullName:"Đỗ Đức Mậu",        dateOfBirth:"", dateOfDeath:"25.4.1974" } },
];

// Row 5
const rightRow5: GraveRecord[] = [
  { id:"R-R5-01", plotNumber:"R53", block:"right", row:5, col:1,  status:"occupied", deceased:{ fullName:"Thân Văn Đạp",      dateOfBirth:"", dateOfDeath:"24.4.1974" } },
  { id:"R-R5-02", plotNumber:"R54", block:"right", row:5, col:2,  status:"occupied", deceased:{ fullName:"Thân Văn Lập",      dateOfBirth:"", dateOfDeath:"10.4.1974" } },
  { id:"R-R5-03", plotNumber:"R55", block:"right", row:5, col:3,  status:"occupied", deceased:{ fullName:"Đỗ Xuân Mỹ",        dateOfBirth:"", dateOfDeath:"5.1974" } },
  { id:"R-R5-04", plotNumber:"R56", block:"right", row:5, col:4,  status:"occupied", deceased:{ fullName:"Hồ Công Tụy",       dateOfBirth:"", dateOfDeath:"04.8.1974" } },
  { id:"R-R5-05", plotNumber:"R57", block:"right", row:5, col:5,  status:"occupied", deceased:{ fullName:"Nguyễn Phúc Khanh", dateOfBirth:"", dateOfDeath:"3.1975" } },
  { id:"R-R5-06", plotNumber:"R58", block:"right", row:5, col:6,  status:"occupied", deceased:{ fullName:"Thân Văn Tỉnh",     dateOfBirth:"", dateOfDeath:"3.1975" } },
  { id:"R-R5-07", plotNumber:"R59", block:"right", row:5, col:7,  status:"occupied", deceased:{ fullName:"Nguyễn Ngọc Toản",  dateOfBirth:"", dateOfDeath:"1975" } },
  { id:"R-R5-08", plotNumber:"R60", block:"right", row:5, col:8,  status:"occupied", deceased:{ fullName:"Ma Trọng Dũng",     dateOfBirth:"", dateOfDeath:"19.11.1974" } },
  { id:"R-R5-09", plotNumber:"R61", block:"right", row:5, col:9,  status:"occupied", deceased:{ fullName:"Trần Xuân Bảy",     dateOfBirth:"", dateOfDeath:"02.10.1977" } },
  { id:"R-R5-10", plotNumber:"R62", block:"right", row:5, col:10, status:"occupied", deceased:{ fullName:"Nguyễn Quốc Phú",   dateOfBirth:"", dateOfDeath:"12.1977" } },
  { id:"R-R5-11", plotNumber:"R63", block:"right", row:5, col:11, status:"occupied", deceased:{ fullName:"Nguyễn Văn Bản",    dateOfBirth:"", dateOfDeath:"08.4.1978" } },
  { id:"R-R5-12", plotNumber:"R64", block:"right", row:5, col:12, status:"occupied", deceased:{ fullName:"Nguyễn Mạnh Sáu",   dateOfBirth:"", dateOfDeath:"08.5.1978" } },
  { id:"R-R5-13", plotNumber:"R65", block:"right", row:5, col:13, status:"occupied", deceased:{ fullName:"Nguyễn Văn Toản",   dateOfBirth:"", dateOfDeath:"3.1978" } },
];

// Row 6
const rightRow6: GraveRecord[] = [
  { id:"R-R6-01", plotNumber:"R66", block:"right", row:6, col:1,  status:"occupied", deceased:{ fullName:"Đỗ Đức Long",       dateOfBirth:"", dateOfDeath:"24.6.1978" } },
  { id:"R-R6-02", plotNumber:"R67", block:"right", row:6, col:2,  status:"occupied", deceased:{ fullName:"Ong Thể Sự",         dateOfBirth:"", dateOfDeath:"28.6.1978" } },
  { id:"R-R6-03", plotNumber:"R68", block:"right", row:6, col:3,  status:"occupied", deceased:{ fullName:"Phạm Văn Đại",      dateOfBirth:"", dateOfDeath:"15.6.1978" } },
  { id:"R-R6-04", plotNumber:"R69", block:"right", row:6, col:4,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Soạn",   dateOfBirth:"", dateOfDeath:"10.1978" } },
  { id:"R-R6-05", plotNumber:"R70", block:"right", row:6, col:5,  status:"occupied", deceased:{ fullName:"Phạm Văn Khoe",      dateOfBirth:"", dateOfDeath:"2.1978" } },
  { id:"R-R6-06", plotNumber:"R71", block:"right", row:6, col:6,  status:"occupied", deceased:{ fullName:"Nguyễn Quang Sáng",  dateOfBirth:"", dateOfDeath:"1978" } },
  { id:"R-R6-07", plotNumber:"R72", block:"right", row:6, col:7,  status:"occupied", deceased:{ fullName:"Trần Văn Thanh",    dateOfBirth:"", dateOfDeath:"07.7.1979" } },
  { id:"R-R6-08", plotNumber:"R73", block:"right", row:6, col:8,  status:"occupied", deceased:{ fullName:"Thân Hồng Hải",     dateOfBirth:"", dateOfDeath:"05.02.1980" } },
  { id:"R-R6-09", plotNumber:"R74", block:"right", row:6, col:9,  status:"occupied", deceased:{ fullName:"Nguyễn Văn Tiệp",   dateOfBirth:"", dateOfDeath:"5.198" } },
  { id:"R-R6-10", plotNumber:"R75", block:"right", row:6, col:10, status:"occupied", deceased:{ fullName:"Hà Hiêu",            dateOfBirth:"", dateOfDeath:"1953" } },
  { id:"R-R6-11", plotNumber:"R76", block:"right", row:6, col:11, status:"occupied", deceased:{ fullName:"Nguyễn Văn Tập",    dateOfBirth:"", dateOfDeath:"01.8.1947" } },
  { id:"R-R6-12", plotNumber:"R77", block:"right", row:6, col:12, status:"occupied", deceased:{ fullName:"Nguyễn Văn Nhàm",   dateOfBirth:"", dateOfDeath:"8.1947" } },
];

export const CEMETERY_DATA: GraveRecord[] = [
  ...leftRow1,
  ...leftRow2,
  ...leftRow3,
  ...leftRow4,
  ...leftRow6,
  ...leftRow7,
  ...leftRow8,
  ...leftRow9,
  ...rightRow1,
  ...rightRow2,
  ...rightRow3,
  ...rightRow4,
  ...rightRow5,
  ...rightRow6,
];

// Structured layout for the two-block map view
export const LEFT_BLOCK_ROWS = [
  leftRow1,
  leftRow2,
  leftRow3,
  leftRow4,
  [], // intentional gap row
  leftRow6,
  leftRow7,
  leftRow8,
  leftRow9,
];

export const RIGHT_BLOCK_ROWS = [
  rightRow1,
  rightRow2,
  rightRow3,
  rightRow4,
  rightRow5,
  rightRow6,
];
