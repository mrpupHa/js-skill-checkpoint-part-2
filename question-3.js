// เริ่มเขียนโค้ดตรงนี้
let getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

async function getUserData() {
  try {
    const userData = await getUser();
    const userNameFilter = userData
      .filter((user) => user.name.length > 17)
      .map((user) => user.name);
    console.log(userNameFilter);
  } catch (error) {
    console.log(error);
  }
}

getUserData();
//ไม่แน่ใจว่า <ให้แปลงข้อมูลที่ได้จาก Server ให้อยู่ในรูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร> คือเอาเฉพาะชื่อคนที่ยาวมากกว่า 17 ตัวอักษรใช่มั้ยครับ5555 แต่จากคำตอบน่าจะถูกนะ
