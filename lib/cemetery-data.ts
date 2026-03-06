export type GraveStatus = "occupied" | "available" | "unknown";

export interface Grave {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  status: GraveStatus;
}

export interface CemeterySection {
  sectionName: string;
  occupiedCount: number;
  graves: Grave[];
}

export const CEMETERY_DATA: CemeterySection[] = [
  {
    sectionName: "Khu Hải Bối",
    occupiedCount: 42,
    graves: [
      { id: "HB-001", name: "Lê Ngọc Doanh", birthDate: "không rõ", deathDate: "16/6/1969", status: "occupied" },
      { id: "HB-002", name: "Vũ Xuân Thi", birthDate: "1929", deathDate: "27/1/1954", status: "occupied" },
      { id: "HB-003", name: "Vũ Thế Ngọc", birthDate: "1938", deathDate: "6/10/1953", status: "occupied" },
      { id: "HB-004", name: "Vũ Văn Thạc", birthDate: "1928", deathDate: "29/5/1949", status: "occupied" },
      { id: "HB-005", name: "Nguyễn Xuân Hợp", birthDate: "1928", deathDate: "5/1/1954", status: "occupied" },
      { id: "HB-006", name: "Vũ Văn Chấn", birthDate: "1912", deathDate: "10/6/1954", status: "occupied" },
      { id: "HB-007", name: "Nguyễn Đình Đông", birthDate: "1955", deathDate: "1/3/2018", status: "occupied" },
      { id: "HB-008", name: "Nguyễn Đăng Chí", birthDate: "1947", deathDate: "10/12/1967", status: "occupied" },
      { id: "HB-009", name: "Nguyễn Doãn Kép", birthDate: "không rõ", deathDate: "28/07/1949", status: "occupied" },
      { id: "HB-010", name: "Đỗ Văn Tư", birthDate: "1930", deathDate: "15/09/1949", status: "occupied" },
      { id: "HB-011", name: "Nguyễn Hữu Bảo", birthDate: "1930", deathDate: "15/09/1949", status: "occupied" },
      { id: "HB-012", name: "Nguyễn Văn Nghê", birthDate: "1932", deathDate: "03/06/1953", status: "occupied" },
      { id: "HB-013", name: "Đình Văn Độ", birthDate: "1927", deathDate: "15/09/1949", status: "occupied" },
      { id: "HB-014", name: "Bùi Thị Khang", birthDate: "1934", deathDate: "20/03/1954", status: "occupied" },
      { id: "HB-015", name: "Lưu Công Nghiễm", birthDate: "1929", deathDate: "7/6/1954", status: "occupied" },
      { id: "HB-016", name: "Lê Văn Thổ", birthDate: "1928", deathDate: "1953", status: "occupied" },
      { id: "HB-017", name: "Kiều Văn Dẫn", birthDate: "1926", deathDate: "1953", status: "occupied" },
      { id: "HB-018", name: "Lưu Công Kiệt", birthDate: "1923", deathDate: "25/5/1954", status: "occupied" },
      { id: "HB-019", name: "Nguyễn Huy Chấn", birthDate: "1926", deathDate: "17/10/1947", status: "occupied" },
      { id: "HB-020", name: "Lê Văn Nga", birthDate: "1931", deathDate: "13/2/1953", status: "occupied" },
      { id: "HB-021", name: "Vũ Thế Cận", birthDate: "1933", deathDate: "2/4/1954", status: "occupied" },
      { id: "HB-022", name: "Nguyễn Văn Mạnh", birthDate: "1960", deathDate: "19/1/1979", status: "occupied" },
      { id: "HB-023", name: "Vũ Thị Nga", birthDate: "1932", deathDate: "1954", status: "occupied" },
      { id: "HB-024", name: "Đỗ Duy Khoái", birthDate: "không rõ", deathDate: "29-5-1948", status: "occupied" },
      { id: "HB-025", name: "Nguyễn Hữu Hào", birthDate: "1943", deathDate: "9/10/1966", status: "occupied" },
      { id: "HB-026", name: "Vũ Văn Thọ", birthDate: "1932", deathDate: "10/6/1954", status: "occupied" },
      { id: "HB-027", name: "Đỗ Văn Đệ", birthDate: "1963", deathDate: "29/9/1985", status: "occupied" },
      { id: "HB-028", name: "Nguyễn Văn Chuyện", birthDate: "1905", deathDate: "05/03/1950", status: "occupied" },
      { id: "HB-029", name: "Đỗ Văn Dần", birthDate: "1914", deathDate: "5/12/1950", status: "occupied" },
      { id: "HB-030", name: "Vũ Văn Lan", birthDate: "1933", deathDate: "1951", status: "occupied" },
      { id: "HB-031", name: "Nguyễn Hữu Oanh", birthDate: "1925", deathDate: "2/8/1949", status: "occupied" },
      { id: "HB-032", name: "Nguyễn Xuân Tỳ", birthDate: "1940", deathDate: "10/8/1974", status: "occupied" },
      { id: "HB-033", name: "Kiều Văn Hiển", birthDate: "1924", deathDate: "29/03/1954", status: "occupied" },
      { id: "HB-034", name: "Nguyễn Tiến Chu", birthDate: "1943", deathDate: "27/7/1966", status: "occupied" },
      { id: "HB-035", name: "Đỗ Văn Xuyến", birthDate: "1928", deathDate: "05/08/1948", status: "occupied" },
    ],
  },
  {
    sectionName: "Khu Cổ Điển",
    occupiedCount: 35,
    graves: [
      { id: "CD-001", name: "Nguyễn Hữu Đỗ", birthDate: "1917", deathDate: "1949", status: "occupied" },
      { id: "CD-002", name: "Lê Văn Hiến", birthDate: "1949", deathDate: "1970", status: "occupied" },
      { id: "CD-003", name: "Đình Văn Ngọ", birthDate: "1925", deathDate: "1949", status: "occupied" },
      { id: "CD-004", name: "Đình Văn Mão", birthDate: "không rõ", deathDate: "1951", status: "occupied" },
      { id: "CD-005", name: "Nguyễn Quốc Hộ", birthDate: "1917", deathDate: "1949", status: "occupied" },
      { id: "CD-006", name: "Nguyễn Quốc Thuyết", birthDate: "1910", deathDate: "1949", status: "occupied" },
      { id: "CD-007", name: "Nguyễn Hữu Ty", birthDate: "1927", deathDate: "12/4/1950", status: "occupied" },
      { id: "CD-008", name: "Bùi Văn Tiêu", birthDate: "1927", deathDate: "12/4/1951", status: "occupied" },
      { id: "CD-009", name: "Nguyễn Hữu Triệt", birthDate: "1945", deathDate: "1965", status: "occupied" },
      { id: "CD-010", name: "Lê Văn Thoà (Anh)", birthDate: "1949", deathDate: "18/6/1969", status: "occupied" },
      { id: "CD-011", name: "Nguyễn Hữu Chiểu", birthDate: "không rõ", deathDate: "1954", status: "occupied" },
      { id: "CD-012", name: "Nguyễn Hữu Trạch", birthDate: "1938", deathDate: "1968", status: "occupied" },
      { id: "CD-013", name: "Nguyễn Văn Thụ", birthDate: "1948", deathDate: "1972", status: "occupied" },
      { id: "CD-014", name: "Nguyễn Quốc Dĩnh", birthDate: "1928", deathDate: "8/9/1953", status: "occupied" },
      { id: "CD-015", name: "Nguyễn Quốc Phúc", birthDate: "1940", deathDate: "21/2/1969", status: "occupied" },
      { id: "CD-016", name: "Nguyễn Năng Chung", birthDate: "2/1925", deathDate: "24/12/1949", status: "occupied" },
      { id: "CD-017", name: "Nguyễn Hữu Tô", birthDate: "1940", deathDate: "9/8/1968", status: "occupied" },
      { id: "CD-018", name: "Đỗ Văn Viện", birthDate: "1938", deathDate: "16/8/1968", status: "occupied" },
      { id: "CD-019", name: "Nguyễn Hữu Gia", birthDate: "1912", deathDate: "15/9/1949", status: "occupied" },
      { id: "CD-020", name: "Nguyễn Quốc Bằng", birthDate: "1942", deathDate: "22/11/1969", status: "occupied" },
      { id: "CD-021", name: "Nguyễn Hữu Hiệu", birthDate: "1955", deathDate: "12/4/1975", status: "occupied" },
      { id: "CD-022", name: "Nguyễn Quốc Lạo", birthDate: "1950", deathDate: "30/3/1978", status: "occupied" },
      { id: "CD-023", name: "Nguyễn Hữu Cầu", birthDate: "1948", deathDate: "7/12/1970", status: "occupied" },
      { id: "CD-024", name: "Nguyễn Văn Chiến", birthDate: "1950", deathDate: "19/4/1969", status: "occupied" },
      { id: "CD-025", name: "Nguyễn Hữu Lồ", birthDate: "1945", deathDate: "17/10/1972", status: "occupied" },
    ],
  },
  {
    sectionName: "Khu Đồng Nhân",
    occupiedCount: 10,
    graves: [
      { id: "DN-001", name: "Nguyễn Quốc Vạn", birthDate: "1920", deathDate: "1952", status: "occupied" },
      { id: "DN-002", name: "Nguyễn Duy Ngoạn", birthDate: "1945", deathDate: "1968", status: "occupied" },
      { id: "DN-003", name: "Nguyễn Duy Toản", birthDate: "1910", deathDate: "10/2/1951", status: "occupied" },
      { id: "DN-004", name: "Nguyễn Văn Nhượng", birthDate: "1931", deathDate: "12/11/1952", status: "occupied" },
      { id: "DN-005", name: "Nguyễn Văn Quỳ", birthDate: "1920", deathDate: "1953", status: "occupied" },
      { id: "DN-006", name: "Nguyễn Văn Hương", birthDate: "1926", deathDate: "26/8/1950", status: "occupied" },
      { id: "DN-007", name: "Nguyễn Văn Hùng", birthDate: "1957", deathDate: "1/2/1979", status: "occupied" },
      { id: "DN-008", name: "Nguyễn Văn Hoạt", birthDate: "1963", deathDate: "25/8/1985", status: "occupied" },
      { id: "DN-009", name: "Đỗ Văn Quyết", birthDate: "1945", deathDate: "10/8/1968", status: "occupied" },
      { id: "DN-010", name: "Nguyễn Văn Thanh", birthDate: "1945", deathDate: "15/08/1968", status: "occupied" },
    ],
  },
  {
    sectionName: "Khu Yên Hà & Khác",
    occupiedCount: 6,
    graves: [
      { id: "YH-001", name: "Nguyễn Văn Đẩu", birthDate: "không rõ", deathDate: "1951", status: "occupied" },
      { id: "YH-002", name: "Bùi Ngọc Chi", birthDate: "1946", deathDate: "16/08/1972", status: "occupied" },
      { id: "YH-003", name: "Đình Văn Thật", birthDate: "1933", deathDate: "09/10/2001", status: "occupied" },
      { id: "K-001", name: "Trần Văn Minh (Đức Thọ / Hà Tĩnh)", birthDate: "1963", deathDate: "1985", status: "occupied" },
      { id: "K-002", name: "Vô Danh (Không tên)", birthDate: "không rõ", deathDate: "không rõ", status: "occupied" },
      { id: "K-003", name: "Vô Danh (Không tên)", birthDate: "không rõ", deathDate: "không rõ", status: "occupied" },
    ],
  },
];

// For backward compatibility, export a flat array of all graves
export function getAllGraves(): (Grave & { sectionName: string })[] {
  return CEMETERY_DATA.flatMap((section) =>
    section.graves.map((grave) => ({
      ...grave,
      sectionName: section.sectionName,
    }))
  );
}
