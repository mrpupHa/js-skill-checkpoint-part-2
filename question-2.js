const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let scoreGreaterThan50 = students.filter((student) => student.score > 50);
let scoreAdd10Percent = scoreGreaterThan50.map(
  (student) => student.score + 0.1 * student.score
);
let sumScore = scoreAdd10Percent.reduce((acc, curr) => acc + curr, 0);
console.log(`Total score is ${sumScore}`);
