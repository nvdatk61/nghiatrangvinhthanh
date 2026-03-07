'use client';

import React, { useState } from 'react';
import { Search, MapPin, X, User, Info } from 'lucide-react';

const cemeteryData = [
{"id": "3-2", "name": "Lê Ngọc Doanh", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 16/6/1969", "birthYear": "Không rõ", "deathYear": "1969", "row": 3, "col": 2},
{"id": "3-3", "name": "Nguyễn Hữu Đỗ", "hometown": "Cổ Điển", "fullBirth": "Sinh 1917", "fullDeath": "Mất 1949", "birthYear": "1917", "deathYear": "1949", "row": 3, "col": 3},
{"id": "3-4", "name": "Lê Văn Hiến", "hometown": "Cổ Điển", "fullBirth": "Sinh 1949", "fullDeath": "Mất 1970", "birthYear": "1949", "deathYear": "1970", "row": 3, "col": 4},
{"id": "3-5", "name": "Đình Văn Ngọ", "hometown": "Cổ Điển", "fullBirth": "Sinh 1925", "fullDeath": "Mất 1949", "birthYear": "1925", "deathYear": "1949", "row": 3, "col": 5},
{"id": "3-6", "name": "Nguyễn Quốc Vạn", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1920", "fullDeath": "Mất 1952", "birthYear": "1920", "deathYear": "1952", "row": 3, "col": 6},
{"id": "4-7", "name": "Nguyễn Duy Ngoạn", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1945", "fullDeath": "Mất 1968", "birthYear": "1945", "deathYear": "1968", "row": 4, "col": 7},
{"id": "3-8", "name": "Đình Văn Mão", "hometown": "Cổ Điển", "fullBirth": "Không rõ", "fullDeath": "Mất 1951", "birthYear": "Không rõ", "deathYear": "1951", "row": 3, "col": 8},
{"id": "3-9", "name": "Nguyễn Quốc Hộ", "hometown": "Cổ Điển", "fullBirth": "Sinh 1917", "fullDeath": "Mất 1949", "birthYear": "1917", "deathYear": "1949", "row": 3, "col": 9},
{"id": "3-10", "name": "Nguyễn Quốc Thuyết", "hometown": "Cổ Điển", "fullBirth": "Sinh 1910", "fullDeath": "Mất 1949", "birthYear": "1910", "deathYear": "1949", "row": 3, "col": 10},
{"id": "3-11", "name": "Nguyễn Quốc Hoàn", "hometown": "Cổ Điển", "fullBirth": "Sinh 1916", "fullDeath": "Mất 15/5/1949", "birthYear": "1916", "deathYear": "1949", "row": 3, "col": 11},
{"id": "3-12", "name": "Nguyễn Hữu Ty", "hometown": "Cổ Điển", "fullBirth": "Sinh 1927", "fullDeath": "Mất 12/4/1950", "birthYear": "1927", "deathYear": "1950", "row": 3, "col": 12},
{"id": "3-16", "name": "Bùi Văn Tiêu", "hometown": "Cổ Điển", "fullBirth": "Sinh 1927", "fullDeath": "Mất 12/4/1951", "birthYear": "1927", "deathYear": "1951", "row": 3, "col": 16},
{"id": "3-17", "name": "Vũ Xuân Thi", "hometown": "Hải Bối", "fullBirth": "Sinh 1929", "fullDeath": "Mất 27/1/1954", "birthYear": "1929", "deathYear": "1954", "row": 3, "col": 17},
{"id": "3-18", "name": "Vũ Thế Ngọc", "hometown": "Hải Bối", "fullBirth": "Sinh 1938", "fullDeath": "Mất 6/10/1953", "birthYear": "1938", "deathYear": "1953", "row": 3, "col": 18},
{"id": "3-19", "name": "Vũ Văn Thạc", "hometown": "Hải Bối", "fullBirth": "Sinh 1928", "fullDeath": "Mất 29/5/1949", "birthYear": "1928", "deathYear": "1949", "row": 3, "col": 19},
{"id": "3-20", "name": "Nguyễn Xuân Hợp", "hometown": "Hải Bối", "fullBirth": "Sinh 1928", "fullDeath": "Mất 5/1/1954", "birthYear": "1928", "deathYear": "1954", "row": 3, "col": 20},
{"id": "3-21", "name": "Vũ Văn Chấn", "hometown": "Hải Bối", "fullBirth": "Sinh 1912", "fullDeath": "Mất 10/6/1954", "birthYear": "1912", "deathYear": "1954", "row": 3, "col": 21},
{"id": "3-22", "name": "Nguyễn Duy Toản", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1910", "fullDeath": "Mất 10/2/1951", "birthYear": "1910", "deathYear": "1951", "row": 3, "col": 22},
{"id": "3-23", "name": "Nguyễn Đình Đông", "hometown": "Hải Bối", "fullBirth": "Sinh 1955", "fullDeath": "Mất 1/3/2018", "birthYear": "1955", "deathYear": "2018", "row": 3, "col": 23},
{"id": "4-2", "name": "Nguyễn Đăng Chí", "hometown": "Hải Bối", "fullBirth": "Sinh 1947", "fullDeath": "Mất 10/12/1967", "birthYear": "1947", "deathYear": "1967", "row": 4, "col": 2},
{"id": "4-3", "name": "Nguyễn Doãn Kép", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 28/07/1949", "birthYear": "Không rõ", "deathYear": "1949", "row": 4, "col": 3},
{"id": "4-4", "name": "Đỗ Văn Tư", "hometown": "Hải Bối", "fullBirth": "Sinh 1930", "fullDeath": "Mất 15/09/1949", "birthYear": "1930", "deathYear": "1949", "row": 4, "col": 4},
{"id": "4-5", "name": "Nguyễn Hữu Bảo", "hometown": "Hải Bối", "fullBirth": "Sinh 1930", "fullDeath": "Mất 15/09/1949", "birthYear": "1930", "deathYear": "1949", "row": 4, "col": 5},
{"id": "4-6", "name": "Nguyễn Văn Nghê", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 03/06/1953", "birthYear": "1932", "deathYear": "1953", "row": 4, "col": 6},
{"id": "4-7-dup", "name": "Đình Văn Độ", "hometown": "Hải Bối", "fullBirth": "Sinh 1927", "fullDeath": "Mất 15/09/1949", "birthYear": "1927", "deathYear": "1949", "row": 4, "col": 7},
{"id": "4-8", "name": "Nguyễn Hữu Chiền", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 22/10/1950", "birthYear": "Không rõ", "deathYear": "1950", "row": 4, "col": 8},
{"id": "4-9", "name": "Nguyễn Năng Căn", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 01/04/1949", "birthYear": "Không rõ", "deathYear": "1949", "row": 4, "col": 9},
{"id": "4-10", "name": "Bùi Thị Khang", "hometown": "Hải Bối", "fullBirth": "Sinh 1934", "fullDeath": "Mất 20/03/1954", "birthYear": "1934", "deathYear": "1954", "row": 4, "col": 10},
{"id": "4-11", "name": "Đình Văn Hỷ", "hometown": "Hải Bối", "fullBirth": "Sinh 1942", "fullDeath": "Mất 05/08/1967", "birthYear": "1942", "deathYear": "1967", "row": 4, "col": 11},
{"id": "4-17", "name": "Lưu Công Nghiễm", "hometown": "Hải Bối", "fullBirth": "Sinh 1929", "fullDeath": "Mất 7/6/1954", "birthYear": "1929", "deathYear": "1954", "row": 4, "col": 17},
{"id": "4-18", "name": "Lê Tư Kim", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 3/8/1954", "birthYear": "1932", "deathYear": "1954", "row": 4, "col": 18},
{"id": "4-19", "name": "Nguyễn Đình Thụ", "hometown": "Hải Bối", "fullBirth": "Sinh 1937", "fullDeath": "Mất 1953", "birthYear": "1937", "deathYear": "1953", "row": 4, "col": 19},
{"id": "4-20", "name": "Lê Văn Thổ", "hometown": "Hải Bối", "fullBirth": "Sinh 1928", "fullDeath": "Mất 1953", "birthYear": "1928", "deathYear": "1953", "row": 4, "col": 20},
{"id": "4-21", "name": "Kiều Văn Dẫn", "hometown": "Hải Bối", "fullBirth": "Sinh 1926", "fullDeath": "Mất 1953", "birthYear": "1926", "deathYear": "1953", "row": 4, "col": 21},
{"id": "4-22", "name": "Nguyễn Văn Nhượng", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1931", "fullDeath": "Mất 12/11/1952", "birthYear": "1931", "deathYear": "1952", "row": 4, "col": 22},
{"id": "4-23", "name": "Nguyễn Hữu Triệt", "hometown": "Cổ Điển", "fullBirth": "Sinh 1945", "fullDeath": "Mất 1965", "birthYear": "1945", "deathYear": "1965", "row": 4, "col": 23},
{"id": "5-2", "name": "Lê Văn Thoà (Anh)", "hometown": "Cổ Điển", "fullBirth": "Sinh 1949", "fullDeath": "Mất 18/6/1969", "birthYear": "1949", "deathYear": "1969", "row": 5, "col": 2},
{"id": "5-3", "name": "Nguyễn Hữu Chiểu", "hometown": "Cổ Điển", "fullBirth": "Không rõ", "fullDeath": "Mất 1954", "birthYear": "Không rõ", "deathYear": "1954", "row": 5, "col": 3},
{"id": "5-4", "name": "Nguyễn Hữu Trạch", "hometown": "Cổ Điển", "fullBirth": "Sinh 1938", "fullDeath": "Mất 1968", "birthYear": "1938", "deathYear": "1968", "row": 5, "col": 4},
{"id": "5-5", "name": "Nguyễn Quốc Lĩnh", "hometown": "Cổ Điển", "fullBirth": "Không rõ", "fullDeath": "Mất 1950", "birthYear": "Không rõ", "deathYear": "1950", "row": 5, "col": 5},
{"id": "5-6", "name": "Nguyễn Văn Quỳ", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1920", "fullDeath": "Mất 1953", "birthYear": "1920", "deathYear": "1953", "row": 5, "col": 6},
{"id": "5-7", "name": "Vô Danh", "hometown": "Không rõ", "fullBirth": "Không rõ", "fullDeath": "Không rõ", "birthYear": "Không rõ", "deathYear": "Không rõ", "row": 5, "col": 7},
{"id": "5-8", "name": "Vô Danh", "hometown": "Không rõ", "fullBirth": "Không rõ", "fullDeath": "Không rõ", "birthYear": "Không rõ", "deathYear": "Không rõ", "row": 5, "col": 8},
{"id": "5-9", "name": "Nguyễn Văn Thụ", "hometown": "Cổ Điển", "fullBirth": "Sinh 1948", "fullDeath": "Mất 1972", "birthYear": "1948", "deathYear": "1972", "row": 5, "col": 9},
{"id": "5-10", "name": "Nguyễn Văn Đẩu", "hometown": "Yên Hà", "fullBirth": "Không rõ", "fullDeath": "Mất 1951", "birthYear": "Không rõ", "deathYear": "1951", "row": 5, "col": 10},
{"id": "5-11", "name": "Nguyễn Hữu Ban", "hometown": "Cổ Điển", "fullBirth": "Sinh 1929", "fullDeath": "Mất 1949", "birthYear": "1929", "deathYear": "1949", "row": 5, "col": 11},
{"id": "5-12", "name": "Nguyễn Quốc Bưởi", "hometown": "Cổ Điển", "fullBirth": "Sinh 1954", "fullDeath": "Mất 1975", "birthYear": "1954", "deathYear": "1975", "row": 5, "col": 12},
{"id": "5-16", "name": "Dư Văn Chúc", "hometown": "Cổ Điển", "fullBirth": "Sinh 1939", "fullDeath": "Mất 8/8/1969", "birthYear": "1939", "deathYear": "1969", "row": 5, "col": 16},
{"id": "5-17", "name": "Lưu Công Kiệt", "hometown": "Hải Bối", "fullBirth": "Sinh 1923", "fullDeath": "Mất 25/5/1954", "birthYear": "1923", "deathYear": "1954", "row": 5, "col": 17},
{"id": "5-18", "name": "Lưu Công Bá", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 2/5/1951", "birthYear": "Không rõ", "deathYear": "1951", "row": 5, "col": 18},
{"id": "5-19", "name": "Nguyễn Huy Chấn", "hometown": "Hải Bối", "fullBirth": "Sinh 1926", "fullDeath": "Mất 17/10/1947", "birthYear": "1926", "deathYear": "1947", "row": 5, "col": 19},
{"id": "5-20", "name": "Lê Văn Nga", "hometown": "Hải Bối", "fullBirth": "Sinh 1931", "fullDeath": "Mất 13/2/1953", "birthYear": "1931", "deathYear": "1953", "row": 5, "col": 20},
{"id": "5-21", "name": "Nguyễn Quốc Dĩnh", "hometown": "Cổ Điển", "fullBirth": "Sinh 1928", "fullDeath": "Mất 8/9/1953", "birthYear": "1928", "deathYear": "1953", "row": 5, "col": 21},
{"id": "5-22", "name": "Nguyễn Văn Hương", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1926", "fullDeath": "Mất 26/8/1950", "birthYear": "1926", "deathYear": "1950", "row": 5, "col": 22},
{"id": "6-2", "name": "Lê Trung Phiến", "hometown": "Hải Bối", "fullBirth": "Sinh 1925", "fullDeath": "Mất 5/3/1950", "birthYear": "1925", "deathYear": "1950", "row": 6, "col": 2},
{"id": "6-3", "name": "Nguyễn Năng Hục", "hometown": "Hải Bối", "fullBirth": "Sinh năm 1928", "fullDeath": "Mất 1/9/1949", "birthYear": "1928", "deathYear": "1949", "row": 6, "col": 3},
{"id": "6-4", "name": "Vũ Thế Cận", "hometown": "Hải Bối", "fullBirth": "Sinh 1933", "fullDeath": "Mất 2/4/1954", "birthYear": "1933", "deathYear": "1954", "row": 6, "col": 4},
{"id": "6-5", "name": "Nguyễn Quốc Phúc", "hometown": "Cổ Điển", "fullBirth": "Sinh 1940", "fullDeath": "Mất 21/2/1969", "birthYear": "1940", "deathYear": "1969", "row": 6, "col": 5},
{"id": "6-6", "name": "Nguyễn Văn Hùng", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1957", "fullDeath": "Mất 1/2/1979", "birthYear": "1957", "deathYear": "1979", "row": 6, "col": 6},
{"id": "6-7", "name": "Nguyễn Văn Mạnh", "hometown": "Hải Bối", "fullBirth": "Sinh 1960", "fullDeath": "Mất 19/1/1979", "birthYear": "1960", "deathYear": "1979", "row": 6, "col": 7},
{"id": "6-8", "name": "Phan Văn Tưởng", "hometown": "Hải Bối", "fullBirth": "Sinh 1963", "fullDeath": "Mất 12/9/1985", "birthYear": "1963", "deathYear": "1985", "row": 6, "col": 8},
{"id": "6-9", "name": "Nguyễn Văn Hoạt", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1963", "fullDeath": "Mất 25/8/1985", "birthYear": "1963", "deathYear": "1985", "row": 6, "col": 9},
{"id": "6-10", "name": "Vô Danh", "hometown": "Không rõ", "fullBirth": "Không rõ", "fullDeath": "Không rõ", "birthYear": "Không rõ", "deathYear": "Không rõ", "row": 6, "col": 10},
{"id": "6-11", "name": "Nguyễn Năng Chung", "hometown": "Cổ Điển", "fullBirth": "Sinh 2/1925", "fullDeath": "Mất 24/12/1949", "birthYear": "1925", "deathYear": "1949", "row": 6, "col": 11},
{"id": "6-12", "name": "Nguyễn Hữu Miên", "hometown": "Cổ Điển", "fullBirth": "Sinh 1923", "fullDeath": "Mất 11/11/1950", "birthYear": "1923", "deathYear": "1950", "row": 6, "col": 12},
{"id": "6-16", "name": "Vũ Thế Diễn", "hometown": "Hải Bối", "fullBirth": "Sinh 1947", "fullDeath": "Mất 1970", "birthYear": "1947", "deathYear": "1970", "row": 6, "col": 16},
{"id": "6-17", "name": "Vũ Thị Nga", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 1954", "birthYear": "1932", "deathYear": "1954", "row": 6, "col": 17},
{"id": "6-18", "name": "Vũ Thị Thọ", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 1954", "birthYear": "1932", "deathYear": "1954", "row": 6, "col": 18},
{"id": "6-19", "name": "Vũ Thị Lan", "hometown": "Hải Bối", "fullBirth": "Sinh 1935", "fullDeath": "Mất 1954", "birthYear": "1935", "deathYear": "1954", "row": 6, "col": 19},
{"id": "6-20", "name": "Nguyễn Hữu Liễn", "hometown": "Hải Bối", "fullBirth": "Sinh 1931", "fullDeath": "Mất 1954", "birthYear": "1931", "deathYear": "1954", "row": 6, "col": 20},
{"id": "6-21", "name": "Trần Văn Minh", "hometown": "Đức Thọ / Hà Tĩnh", "fullBirth": "Sinh 1963", "fullDeath": "Mất 1985", "birthYear": "1963", "deathYear": "1985", "row": 6, "col": 21},
{"id": "6-22", "name": "Nguyễn Quốc Mỹ", "hometown": "Hải Bối", "fullBirth": "Sinh 1925", "fullDeath": "Mất 1948", "birthYear": "1925", "deathYear": "1948", "row": 6, "col": 22},
{"id": "7-2", "name": "Đỗ Duy Khoái", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 29-5-1948", "birthYear": "Không rõ", "deathYear": "1948", "row": 7, "col": 2},
{"id": "7-3", "name": "Đỗ Văn Chón", "hometown": "Hải Bối", "fullBirth": "Sinh 1929", "fullDeath": "Mất 19/5/1948", "birthYear": "1929", "deathYear": "1948", "row": 7, "col": 3},
{"id": "7-4", "name": "Nguyễn Hữu Hào", "hometown": "Hải Bối", "fullBirth": "Sinh 1943", "fullDeath": "Mất 9/10/1966", "birthYear": "1943", "deathYear": "1966", "row": 7, "col": 4},
{"id": "7-5", "name": "Nguyễn Hữu Tô", "hometown": "Cổ Điển", "fullBirth": "Sinh 1940", "fullDeath": "Mất 9/8/1968", "birthYear": "1940", "deathYear": "1968", "row": 7, "col": 5},
{"id": "7-6", "name": "Nguyễn Doãn Kết", "hometown": "Cổ Điển", "fullBirth": "Sinh 1946", "fullDeath": "Mất 29/3/1973", "birthYear": "1946", "deathYear": "1973", "row": 7, "col": 6},
{"id": "7-7", "name": "Đỗ Văn Quyết", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1945", "fullDeath": "Mất 10/8/1968", "birthYear": "1945", "deathYear": "1968", "row": 7, "col": 7},
{"id": "7-8", "name": "Đỗ Văn Viện", "hometown": "Cổ Điển", "fullBirth": "Sinh 1938", "fullDeath": "Mất 16/8/1968", "birthYear": "1938", "deathYear": "1968", "row": 7, "col": 8},
{"id": "7-9", "name": "Nguyễn Doãn Vụ", "hometown": "Cổ Điển", "fullBirth": "Sinh 1945", "fullDeath": "Mất 13/12/1966", "birthYear": "1945", "deathYear": "1966", "row": 7, "col": 9},
{"id": "7-10", "name": "Vô Danh", "hometown": "Không rõ", "fullBirth": "Không rõ", "fullDeath": "Không rõ", "birthYear": "Không rõ", "deathYear": "Không rõ", "row": 7, "col": 10},
{"id": "7-11", "name": "Nguyễn Hữu Gia", "hometown": "Cổ Điển", "fullBirth": "Sinh 1912", "fullDeath": "Mất 15/9/1949", "birthYear": "1912", "deathYear": "1949", "row": 7, "col": 11},
{"id": "7-12", "name": "Bùi Xuân Chù", "hometown": "Cổ Điển", "fullBirth": "Sinh 1949", "fullDeath": "Mất 10/6/1972", "birthYear": "1949", "deathYear": "1972", "row": 7, "col": 12},
{"id": "7-16", "name": "Nguyễn Quốc Bằng", "hometown": "Cổ Điển", "fullBirth": "Sinh 1942", "fullDeath": "Mất 22/11/969", "birthYear": "1942", "deathYear": "Không rõ", "row": 7, "col": 16},
{"id": "7-17", "name": "Vũ Thế Tuyên", "hometown": "Hải Bối", "fullBirth": "Sinh 1923", "fullDeath": "Mất 26/5/1954", "birthYear": "1923", "deathYear": "1954", "row": 7, "col": 17},
{"id": "7-18", "name": "Vũ Văn Thọ", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 10/6/1954", "birthYear": "1932", "deathYear": "1954", "row": 7, "col": 18},
{"id": "7-19", "name": "Đỗ Duy Vũ", "hometown": "Hải Bối", "fullBirth": "Sinh 1965", "fullDeath": "Mất 20/7/1983", "birthYear": "1965", "deathYear": "1983", "row": 7, "col": 19},
{"id": "7-20", "name": "Đỗ Văn Đệ", "hometown": "Hải Bối", "fullBirth": "Sinh 1963", "fullDeath": "Mất 29/9/1985", "birthYear": "1963", "deathYear": "1985", "row": 7, "col": 20},
{"id": "7-21", "name": "Kiều Văn Minh", "hometown": "Hải Bối", "fullBirth": "Sinh 1962", "fullDeath": "Mất 28/10/1985", "birthYear": "1962", "deathYear": "1985", "row": 7, "col": 21},
{"id": "8-2", "name": "Nguyễn Văn Chuyện", "hometown": "Hải Bối", "fullBirth": "Sinh 1905", "fullDeath": "Mất 05/03/1950", "birthYear": "1905", "deathYear": "1950", "row": 8, "col": 2},
{"id": "8-3", "name": "Nguyễn Đình Lê", "hometown": "Hải Bối", "fullBirth": "Sinh 1807", "fullDeath": "Mất 19-07-1951", "birthYear": "1807", "deathYear": "1951", "row": 8, "col": 3},
{"id": "8-4", "name": "Đỗ Văn Dần", "hometown": "Hải Bối", "fullBirth": "Sinh 1914", "fullDeath": "Mất 5/12/1950", "birthYear": "1914", "deathYear": "1950", "row": 8, "col": 4},
{"id": "8-5", "name": "Nguyễn Hữu Hiệu", "hometown": "Cổ Điển", "fullBirth": "Sinh 1955", "fullDeath": "Mất 12/4/1975", "birthYear": "1955", "deathYear": "1975", "row": 8, "col": 5},
{"id": "8-6", "name": "Nguyễn Đình Hiền", "hometown": "Hải Bối", "fullBirth": "Sinh 13/2/1954", "fullDeath": "Mất 28/8/1975", "birthYear": "1954", "deathYear": "1975", "row": 8, "col": 6},
{"id": "8-7", "name": "Lưu Quang Tám", "hometown": "Hải Bối", "fullBirth": "Sinh 1940", "fullDeath": "Mất 15/08/1968", "birthYear": "1940", "deathYear": "1968", "row": 8, "col": 7},
{"id": "8-8", "name": "Đỗ Văn Quyên", "hometown": "Hải Bối", "fullBirth": "Sinh1947", "fullDeath": "Mất 5/6/1967", "birthYear": "Không rõ", "deathYear": "1967", "row": 8, "col": 8},
{"id": "8-9", "name": "Nguyễn Quốc Lạo", "hometown": "Cổ Điển", "fullBirth": "Sinh 1950", "fullDeath": "Mất 30/3/1978", "birthYear": "1950", "deathYear": "1978", "row": 8, "col": 9},
{"id": "8-10", "name": "Nguyễn Doãn Duy", "hometown": "Cổ Điển", "fullBirth": "Sinh 1954", "fullDeath": "Mất 24/5/1974", "birthYear": "1954", "deathYear": "1974", "row": 8, "col": 10},
{"id": "8-11", "name": "Vũ Văn Lan", "hometown": "Hải Bối", "fullBirth": "Sinh 1933", "fullDeath": "Mất 1951", "birthYear": "1933", "deathYear": "1951", "row": 8, "col": 11},
{"id": "8-12", "name": "Nguyễn Hữu Huấn", "hometown": "Cổ Điển", "fullBirth": "Sinh 1922", "fullDeath": "Mất 12/4/1951", "birthYear": "1922", "deathYear": "1951", "row": 8, "col": 12},
{"id": "8-16", "name": "Nguyễn Năng Thủy", "hometown": "Cổ Điển", "fullBirth": "Sinh 1918", "fullDeath": "Mất12/4/1951", "birthYear": "1918", "deathYear": "1951", "row": 8, "col": 16},
{"id": "8-17", "name": "Vũ Văn Tài", "hometown": "Hải Bối", "fullBirth": "Sinh 1917", "fullDeath": "Mất 8/3/1950", "birthYear": "1917", "deathYear": "1950", "row": 8, "col": 17},
{"id": "8-18", "name": "Vũ Văn Tín", "hometown": "Hải Bối", "fullBirth": "Không rõ", "fullDeath": "Mất 8/3/1950", "birthYear": "Không rõ", "deathYear": "1950", "row": 8, "col": 18},
{"id": "8-19", "name": "Vũ Thế Liễu", "hometown": "Hải Bối", "fullBirth": "Sinh 1900", "fullDeath": "Mất 8/8/1950", "birthYear": "1900", "deathYear": "1950", "row": 8, "col": 19},
{"id": "8-20", "name": "Đỗ Văn Lự", "hometown": "Hải Bối", "fullBirth": "Sinh 1908", "fullDeath": "Mất 17/3/1950", "birthYear": "1908", "deathYear": "1950", "row": 8, "col": 20},
{"id": "8-21", "name": "Lưu Công Thao", "hometown": "Hải Bối", "fullBirth": "Sinh 1920", "fullDeath": "Mất 4/3/1950", "birthYear": "1920", "deathYear": "1950", "row": 8, "col": 21},
{"id": "8-22", "name": "Nguyễn Duy Nguyên", "hometown": "Đồng Nhân", "fullBirth": "Sinh 1940", "fullDeath": "Mất 4/4/1966", "birthYear": "1940", "deathYear": "1966", "row": 8, "col": 22},
{"id": "9-2", "name": "Nguyễn Hữu Cầu", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1948", "fullDeath": "Mất 7/12/1970", "birthYear": "1948", "deathYear": "1970", "row": 9, "col": 2},
{"id": "9-3", "name": "Nguyễn Văn Chiến", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh Năm 1950", "fullDeath": "Mất 19/4/1969", "birthYear": "1950", "deathYear": "1969", "row": 9, "col": 3},
{"id": "9-4", "name": "Nguyễn Đăng Chiến", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh Năm 1955", "fullDeath": "Mất 20/3/1975", "birthYear": "1955", "deathYear": "1975", "row": 9, "col": 4},
{"id": "9-5", "name": "Nguyễn Quốc Côn", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1940", "fullDeath": "Mất 9/8/1965", "birthYear": "1940", "deathYear": "1965", "row": 9, "col": 5},
{"id": "9-6", "name": "Nguyễn Hữu Tiêu", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1941", "fullDeath": "Mất 16/06/1968", "birthYear": "1941", "deathYear": "1968", "row": 9, "col": 6},
{"id": "9-7", "name": "Nguyễn Hữu Cỏn", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1935", "fullDeath": "Mất 5/11/1966", "birthYear": "1935", "deathYear": "1966", "row": 9, "col": 7},
{"id": "9-8", "name": "Nguyễn Quốc Hựu", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1947", "fullDeath": "Mất 12/08/1969", "birthYear": "1947", "deathYear": "1969", "row": 9, "col": 8},
{"id": "9-9", "name": "Nguyễn Quốc Côn", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1937", "fullDeath": "Mất 25/12/1969", "birthYear": "1937", "deathYear": "1969", "row": 9, "col": 9},
{"id": "9-10", "name": "Lê Văn Ổn", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1938", "fullDeath": "Mất 23/06/1967", "birthYear": "1938", "deathYear": "1967", "row": 9, "col": 10},
{"id": "9-11", "name": "Nguyễn Văn Tố", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1948", "fullDeath": "Mất 28/11/1969", "birthYear": "1948", "deathYear": "1969", "row": 9, "col": 11},
{"id": "9-12", "name": "Nguyễn Hữu Luyện", "hometown": "Thôn Cổ Điển", "fullBirth": "Sinh 1920", "fullDeath": "Mất 05/05/1951", "birthYear": "1920", "deathYear": "1951", "row": 9, "col": 12},
{"id": "9-16", "name": "Nguyễn Hữu Oanh", "hometown": "Hải Bối", "fullBirth": "Sinh 1925", "fullDeath": "Mất 2/8/1949", "birthYear": "1925", "deathYear": "1949", "row": 9, "col": 16},
{"id": "9-17", "name": "Nguyễn Xuân Tỳ", "hometown": "Hải Bối", "fullBirth": "Sinh 1940", "fullDeath": "Mất 10/8/1974", "birthYear": "1940", "deathYear": "1974", "row": 9, "col": 17},
{"id": "9-18", "name": "Nguyễn Gia Thoa", "hometown": "Hải Bối", "fullBirth": "Sinh 1927", "fullDeath": "Mất 2/7/1952", "birthYear": "1927", "deathYear": "1952", "row": 9, "col": 18},
{"id": "9-19", "name": "Lê Hữu Chấn", "hometown": "Hải Bối", "fullBirth": "Sinh 1933", "fullDeath": "Mất 15/10/1970", "birthYear": "1933", "deathYear": "1970", "row": 9, "col": 19},
{"id": "9-20", "name": "Kiểu Văn Gạ", "hometown": "Hải Bối", "fullBirth": "Sinh 1943", "fullDeath": "Mất 9/11/1968", "birthYear": "1943", "deathYear": "1968", "row": 9, "col": 20},
{"id": "9-21", "name": "Nguyễn Đình Cốc", "hometown": "Hải Bối", "fullBirth": "Sinh 1932", "fullDeath": "Mất 12/9/1969", "birthYear": "1932", "deathYear": "1969", "row": 9, "col": 21},
{"id": "9-22", "name": "Nguyễn Quốc Hải", "hometown": "Hải Bối", "fullBirth": "Sinh 1929", "fullDeath": "Mất 18/10/1969", "birthYear": "1929", "deathYear": "1969", "row": 9, "col": 22},
{"id": "10-1", "name": "Kiều Văn Hiển", "hometown": "Hải Bối", "fullBirth": "Sinh Năm 1924", "fullDeath": "Mất 29/03/1954", "birthYear": "1924", "deathYear": "1954", "row": 10, "col": 1},
{"id": "10-2", "name": "Nguyễn Đăng Gia", "hometown": "Hải Bối", "fullBirth": "Sinh Năm 1920", "fullDeath": "Mất 8/1949", "birthYear": "1920", "deathYear": "1949", "row": 10, "col": 2},
{"id": "10-4", "name": "Nguyễn Hữu Còn", "hometown": "Hải Bối", "fullBirth": "Sinh Năm 1931", "fullDeath": "Mất 09/04/1970", "birthYear": "1931", "deathYear": "1970", "row": 10, "col": 4},
{"id": "10-5", "name": "Nguyễn Hữu Lồ", "hometown": "Hải Bối", "fullBirth": "Sinh Năm 1945", "fullDeath": "Mất 17/10/1972", "birthYear": "1945", "deathYear": "1972", "row": 10, "col": 5},
{"id": "10-6", "name": "Nguyễn Quốc Cống", "hometown": "Đồng Nhân", "fullBirth": "Sinh Năm 1937", "fullDeath": "Mất 12/12/1968", "birthYear": "1937", "deathYear": "1968", "row": 10, "col": 6},
{"id": "10-7", "name": "Nguyễn Quốc Dương", "hometown": "Đồng Nhân", "fullBirth": "Sinh Năm 1945", "fullDeath": "Mất 15/07/1965", "birthYear": "1945", "deathYear": "1965", "row": 10, "col": 7},
{"id": "10-8", "name": "Nguyễn Văn Thanh", "hometown": "Đồng Nhân", "fullBirth": "Sinh Năm 1945", "fullDeath": "Mất 15/08/1968", "birthYear": "1945", "deathYear": "1968", "row": 10, "col": 8},
{"id": "10-9", "name": "Nguyễn Văn Tiếp", "hometown": "Đồng Nhân", "fullBirth": "Sinh Năm 1945", "fullDeath": "Mất 28/01/1966", "birthYear": "1945", "deathYear": "1966", "row": 10, "col": 9},
{"id": "10-10", "name": "Bùi Ngọc Chi", "hometown": "Yên Hà", "fullBirth": "Sinh Năm 1946", "fullDeath": "Mất 16/08/1972", "birthYear": "1946", "deathYear": "1972", "row": 10, "col": 10},
{"id": "10-11", "name": "Đình Văn Thật", "hometown": "Yên Hà", "fullBirth": "Sinh Năm 1933", "fullDeath": "Mất 09/10/2001", "birthYear": "1933", "deathYear": "2001", "row": 10, "col": 11},
{"id": "10-17", "name": "Nguyễn Tiến Chu", "hometown": "Hải Bối", "fullBirth": "Sinh 1943", "fullDeath": "Mất 27/7/1966", "birthYear": "1943", "deathYear": "1966", "row": 10, "col": 17},
{"id": "10-18", "name": "Trần Văn Chinh", "hometown": "Hải Bối", "fullBirth": "Sinh 1947", "fullDeath": "Mất 12/12/1969", "birthYear": "1947", "deathYear": "1969", "row": 10, "col": 18},
{"id": "10-19", "name": "Nguyễn Văn Kích", "hometown": "Hải Bối", "fullBirth": "Sinh 1945", "fullDeath": "Mất 12/6/1968", "birthYear": "1945", "deathYear": "1968", "row": 10, "col": 19},
{"id": "10-20", "name": "Đỗ Văn Xuyến", "hometown": "Hải Bối", "fullBirth": "Sinh 1928", "fullDeath": "Mất 05/08/1948", "birthYear": "1928", "deathYear": "1948", "row": 10, "col": 20},
{"id": "10-21", "name": "Lê Tư Thục", "hometown": "Hải Bối", "fullBirth": "Sinh 1919", "fullDeath": "Mất 02/07/1950", "birthYear": "1919", "deathYear": "1950", "row": 10, "col": 21},
{"id": "10-22", "name": "Nguyễn Tiến Thi", "hometown": "Hải Bối", "fullBirth": "Sinh 1982", "fullDeath": "Mất 10/5/2003", "birthYear": "1982", "deathYear": "2003", "row": 10, "col": 22},
{"id": "10-23", "name": "Lê Duy Hiệt", "hometown": "Hải Bối", "fullBirth": "Sinh 1936", "fullDeath": "Mất 08/05/1968", "birthYear": "1936", "deathYear": "1968", "row": 10, "col": 23},
];

interface Grave {
  id: string;
  name: string;
  hometown: string;
  fullBirth: string;
  fullDeath: string;
  birthYear: string;
  deathYear: string;
  row: number;
  col: number;
}

export default function CemeteryApp() {
  const [selectedGrave, setSelectedGrave] = useState<Grave | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const maxRow = Math.max(...cemeteryData.map(g => g.row));

  const filteredGraves = searchTerm
    ? cemeteryData.filter(g =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.hometown.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.birthYear.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.deathYear.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cemeteryData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 p-4 md:p-6">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-2 md:mb-3" style={{ fontFamily: 'serif' }}>
          Nghĩa Trang Liệt Sĩ Xã Vĩnh Thanh
        </h1>
        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-3 md:mb-4"></div>
        <p className="text-slate-600 italic text-base md:text-lg">Lưu giữ ký ức các anh hùng liệt sĩ</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, quê quán, năm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white shadow-md"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Hiển thị {filteredGraves.length} / {cemeteryData.length} mộ
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Central Monument */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-28 md:w-32 h-36 md:h-40 rounded-t-3xl bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl flex flex-col items-center justify-center relative border-4 border-amber-700">
            <div className="absolute top-3 md:top-4 text-3xl md:text-4xl text-yellow-300">✦</div>
            <div className="text-center text-white mt-4 md:mt-6">
              <p className="text-xs md:text-sm font-bold">KỶ NIỆM</p>
              <p className="text-xs mt-1">Các Anh Hùng</p>
              <p className="text-xs">Liệt Sĩ</p>
            </div>
          </div>
        </div>

        {/* Cemetery Grid */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-xl p-4 md:p-8 border-4 border-blue-200 overflow-x-auto">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(23, minmax(70px, 80px))',
              gridAutoRows: '85px',
              gap: '4px',
              minWidth: 'max-content',
              padding: '0 4px'
            }}
          >
            {/* Center aisle */}
            <div
              style={{
                gridColumn: '13 / 16',
                gridRow: `1 / ${maxRow + 1}`,
                borderLeft: '3px solid rgba(59, 130, 246, 0.3)',
                borderRight: '3px solid rgba(59, 130, 246, 0.3)',
                opacity: 0.6,
                pointerEvents: 'none',
              }}
            />

            {/* Grave tiles */}
            {cemeteryData.map((grave) => {
              const isFiltered = !filteredGraves.includes(grave);
              const isSelected = selectedGrave?.id === grave.id;

              return (
                <button
                  key={grave.id}
                  onClick={() => setSelectedGrave(grave)}
                  style={{
                    gridColumn: grave.col,
                    gridRow: grave.row,
                    opacity: isFiltered ? 0.2 : 1,
                    filter: isFiltered ? 'grayscale(100%)' : 'grayscale(0%)',
                  }}
                  className={`relative w-full h-full flex flex-col items-center justify-center p-1 rounded-t-lg transition-all duration-200 overflow-hidden shadow-md ${
                    isSelected 
                      ? 'bg-gradient-to-b from-stone-400 to-stone-500 shadow-2xl ring-2 ring-amber-400' 
                      : 'bg-gradient-to-b from-stone-300 to-stone-400 hover:from-stone-350 hover:to-stone-450 hover:shadow-lg'
                  }`}
                  style={{
                    ...{
                      gridColumn: grave.col,
                      gridRow: grave.row,
                      opacity: isFiltered ? 0.2 : 1,
                      filter: isFiltered ? 'grayscale(100%)' : 'grayscale(0%)',
                    },
                    clipPath: 'polygon(0 20%, 0 100%, 100% 100%, 100% 20%, 50% 0%)',
                  }}
                >
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-900 leading-tight text-center break-words whitespace-normal">
                    {grave.name}
                  </p>
                  <div className="text-[6px] md:text-[7px] text-slate-700 leading-tight text-center mt-0.5">
                    {grave.birthYear} - {grave.deathYear}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedGrave && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setSelectedGrave(null)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-4">
            <div className="bg-white rounded-lg shadow-2xl p-6 relative">
              <button
                onClick={() => setSelectedGrave(null)}
                className="absolute right-4 top-4 p-1 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>

              <div className="mb-6 pr-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{selectedGrave.name}</h2>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>Quê quán: <span className="font-semibold text-slate-800">{selectedGrave.hometown}</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <span className="text-sm font-medium text-slate-600">Ngày sinh</span>
                  <span className="text-sm font-semibold text-slate-800 text-right">
                    {selectedGrave.fullBirth}
                  </span>
                </div>

                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <span className="text-sm font-medium text-slate-600">Ngày hy sinh</span>
                  <span className="text-sm font-semibold text-slate-800 text-right">
                    {selectedGrave.fullDeath}
                  </span>
                </div>

                <div className="bg-slate-50 rounded-md p-3 mt-4">
                  <div className="text-xs text-slate-500 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="font-semibold text-slate-700">{selectedGrave.col}</div>
                      <div>Cột</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700">{selectedGrave.row}</div>
                      <div>Hàng</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700">{selectedGrave.id}</div>
                      <div>ID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-slate-700 italic" style={{ fontFamily: 'serif' }}>
          "Tôn vinh những người đã ngã xuống vì nước nhân dân"
        </p>
      </div>
    </div>
  );
}
