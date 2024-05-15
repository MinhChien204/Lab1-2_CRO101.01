const class1 = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    pointPractice: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    pointPractice: 10,
    status: 'pass',
  }
];

const class2 = [
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 5,
    pointPractice: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    pointPractice: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    pointPractice: 2,
    status: 'pass',
  },
];

// Gộp danh sách sinh viên của các lớp lại với nhau
const allStudents = class1.concat(class2);
console.log(allStudents);
// Lọc ra các sinh viên có status là 'pass'
const PassStudent = allStudents.filter(student => student.status === 'pass');
console.log(PassStudent);
// Sắp xếp danh sách sinh viên theo điểm số từ cao xuống thấp
const sortedByPoint = PassStudent.sort((a, b) => b.avgPoint - a.avgPoint);
console.log(sortedByPoint);
// Sắp xếp danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp
const sortedByTrainingPoint = PassStudent.sort((a, b) => b.pointPractice - a.pointPractice);
console.log(sortedByTrainingPoint);
// Lấy thông tin của Ong vàng
const ongVang = sortedByPoint[0];

console.log('Danh sách sinh viên theo điểm số từ cao xuống thấp:');
sortedByPoint.forEach(student => {
  console.log(`${student.mssv} - ${student.name}: ${student.avgPoint}`);
});

console.log('Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:');
sortedByTrainingPoint.forEach(student => {
  console.log(`${student.mssv} - ${student.name}: ${student.pointPractice}`);
});

console.log('Thông tin của Ong vàng:');
console.log(`MSSV: ${ongVang.mssv}`);
console.log(`Tên: ${ongVang.name}`);
console.log(`Điểm số: ${ongVang.avgPoint}`);
console.log(`Điểm rèn luyện: ${ongVang.pointPractice}`);