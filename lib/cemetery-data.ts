export type GraveStatus = "occupied" | "available" | "unknown";

export interface Grave {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  row: number;
  col: number;
  status: GraveStatus;
}

export const CEMETERY_DATA: Grave[] = [
  // ROW 3
  { id: "3-2", name: "Lê Ngọc Doanh", birthDate: "không rõ", deathDate: "1969", row: 3, col: 2, status: "occupied" },
  { id: "3-3", name: "Nguyễn Hữu Đỗ", birthDate: "1917", deathDate: "1949", row: 3, col: 3, status: "occupied" },
  { id: "3-4", name: "Lê Văn Hiến", birthDate: "1949", deathDate: "1970", row: 3, col: 4, status: "occupied" },
  { id: "3-5", name: "Đình Văn Ngọ", birthDate: "1925", deathDate: "1949", row: 3, col: 5, status: "occupied" },
  { id: "3-6", name: "Nguyễn Quốc Vạn", birthDate: "1920", deathDate: "1952", row: 3, col: 6, status: "occupied" },
  { id: "4-7", name: "Nguyễn Duy Ngoạn", birthDate: "1945", deathDate: "1968", row: 4, col: 7, status: "occupied" },
  { id: "3-8", name: "Đình Văn Mão", birthDate: "không rõ", deathDate: "1951", row: 3, col: 8, status: "occupied" },
  { id: "3-9", name: "Nguyễn Quốc Hộ", birthDate: "1917", deathDate: "1949", row: 3, col: 9, status: "occupied" },
  { id: "3-10", name: "Nguyễn Quốc Thuyết", birthDate: "1910", deathDate: "1949", row: 3, col: 10, status: "occupied" },
  { id: "3-11", name: "Nguyễn Quốc Hoàn", birthDate: "1916", deathDate: "1949", row: 3, col: 11, status: "occupied" },
  { id: "3-12", name: "Nguyễn Hữu Ty", birthDate: "1927", deathDate: "1950", row: 3, col: 12, status: "occupied" },

  { id: "3-16", name: "Bùi Văn Tiêu", birthDate: "1927", deathDate: "1951", row: 3, col: 16, status: "occupied" },
  { id: "3-17", name: "Vũ Xuân Thi", birthDate: "1929", deathDate: "1954", row: 3, col: 17, status: "occupied" },
  { id: "3-18", name: "Vũ Thế Ngọc", birthDate: "1938", deathDate: "1953", row: 3, col: 18, status: "occupied" },
  { id: "3-19", name: "Vũ Văn Thạc", birthDate: "1928", deathDate: "1949", row: 3, col: 19, status: "occupied" },
  { id: "3-20", name: "Nguyễn Xuân Hợp", birthDate: "1928", deathDate: "1954", row: 3, col: 20, status: "occupied" },
  { id: "3-21", name: "Vũ Văn Chấn", birthDate: "1912", deathDate: "1954", row: 3, col: 21, status: "occupied" },
  { id: "3-22", name: "Nguyễn Duy Toản", birthDate: "1910", deathDate: "1951", row: 3, col: 22, status: "occupied" },
  { id: "3-23", name: "Nguyễn Đình Đông", birthDate: "1955", deathDate: "2018", row: 3, col: 23, status: "occupied" },

  // ROW 10 (Sample from bottom rows)
  { id: "10-1", name: "Kiều Văn Hiển", birthDate: "1924", deathDate: "1954", row: 10, col: 1, status: "occupied" },
  { id: "10-2", name: "Nguyễn Đăng Gia", birthDate: "1920", deathDate: "1949", row: 10, col: 2, status: "occupied" },
  { id: "10-4", name: "Nguyễn Hữu Còn", birthDate: "1931", deathDate: "1970", row: 10, col: 4, status: "occupied" },
  { id: "10-5", name: "Nguyễn Hữu Lồ", birthDate: "1945", deathDate: "1972", row: 10, col: 5, status: "occupied" },
  { id: "10-6", name: "Nguyễn Quốc Cống", birthDate: "1937", deathDate: "1968", row: 10, col: 6, status: "occupied" },
  { id: "10-7", name: "Nguyễn Quốc Dương", birthDate: "1945", deathDate: "1965", row: 10, col: 7, status: "occupied" },
  { id: "10-8", name: "Nguyễn Văn Thanh", birthDate: "1945", deathDate: "1968", row: 10, col: 8, status: "occupied" },
  { id: "10-9", name: "Nguyễn Văn Tiếp", birthDate: "1945", deathDate: "1966", row: 10, col: 9, status: "occupied" },
  { id: "10-10", name: "Bùi Ngọc Chi", birthDate: "1946", deathDate: "1972", row: 10, col: 10, status: "occupied" },
  { id: "10-11", name: "Đình Văn Thật", birthDate: "1933", deathDate: "2001", row: 10, col: 11, status: "occupied" },

  { id: "10-17", name: "Nguyễn Tiến Chu", birthDate: "1943", deathDate: "1966", row: 10, col: 17, status: "occupied" },
  { id: "10-18", name: "Trần Văn Chinh", birthDate: "1947", deathDate: "1969", row: 10, col: 18, status: "occupied" },
  { id: "10-19", name: "Nguyễn Văn Kích", birthDate: "1945", deathDate: "1968", row: 10, col: 19, status: "occupied" },
  { id: "10-20", name: "Đỗ Văn Xuyến", birthDate: "1928", deathDate: "1948", row: 10, col: 20, status: "occupied" },
  { id: "10-21", name: "Lê Tư Thục", birthDate: "1919", deathDate: "1950", row: 10, col: 21, status: "occupied" },
  { id: "10-22", name: "Nguyễn Tiến Thi", birthDate: "1982", deathDate: "2003", row: 10, col: 22, status: "occupied" },
  { id: "10-23", name: "Lê Duy Hiệt", birthDate: "1936", deathDate: "1968", row: 10, col: 23, status: "occupied" },
];

export function getGraveById(id: string): Grave | undefined {
  return CEMETERY_DATA.find((grave) => grave.id === id);
}
