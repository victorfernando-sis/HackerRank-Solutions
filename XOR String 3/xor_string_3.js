// https://www.hackerrank.com/challenges/three-month-preparation-kit-strings-xor/problem?

function xorString() {
  let result = "";
  const inputInt = input.split("\n");

  const stringS = [...inputInt[0]];
  const stringT = [...inputInt[1]];

  stringS.forEach((item, index) => {
    result += item ^ stringT[index];
  });
  console.log(result);
}
