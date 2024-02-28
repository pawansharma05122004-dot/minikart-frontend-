const name = [1, 'ram22', 2, 'sheeta44', 3, 'gita555', 3, 'gita555']
const subject = [30, 'english', 50, 'maths', 20, 'hindi']
const mergeArray = [];
let studentData;
for (let i = 0; i < name.length; i++) {
  mergeArray[i] = name[i]
}
for (let i = 0; i < subject.length; i++) {
  mergeArray[name.length + i] = subject[i]
}
mergeArray.forEach((item) => {
  if (typeof item === 'number') {
    if (item < 10) {
      studentData = Object.assign({ id: item })
    } else if (item > 10) {
      studetnData = Object.assign({ markes: item })
    }

  } else if (typeof item === 'string') {
    let updateName = item.replace(/[0-9]/g, '')
    studentData = Object.assign({ name: item })
  }

})
console.log(studentData)
