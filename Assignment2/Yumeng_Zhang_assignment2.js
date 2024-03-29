// Q1
const arr = [];
arr.push({ quantity: 1, price: 200 });
arr.push({ quantity: 3, price: 350 });
arr.push({ quantity: 5, price: 400 });

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//1.1
function doubleValue(input) {
  const newArr = [];
  input.map((e) => {
    newArr.push({ quantity: e.quantity * 2, price: e.price * 2 });
  });
  console.log("1.1: ");
  console.log(newArr);
  return newArr;
}
doubleValue(arr);

//1.2
function filterValue(input) {
  const newArr = [];
  input.map((e) => {
    if (e.quantity > 2 && e.price > 300) {
      newArr.push({ quantity: e.quantity, price: e.price });
    }
  });
  console.log("1.2: ");
  console.log(newArr);
  return newArr;
}

filterValue(arr);

//1.3
function caculateValue(input) {
  const totalValue = { totalQuantity: 0, totalPrice: 0 };
  input.forEach((e) => {
    totalValue.totalQuantity += e.quantity;
    totalValue.totalPrice += e.price;
  });
  console.log("1.3: ");
  console.log(totalValue);
  return totalValue;
}

caculateValue(arr);

// Q2

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function modifyString(input) {
  const arr = input.toLowerCase();
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/i)) {
      newStr += arr[i];
    }
  }
  console.log("2: ");
  console.log(newStr);
}

modifyString(string);

// Q3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function mergeArray(arr1, arr2) {
  //Deduped array of uuid
  const ids = [
    ...new Set([...arr1.map((e) => e.uuid), ...arr2.map((e) => e.uuid)]),
  ];
  //Loop to join elements from both arrays :
  const res = [];
  ids.forEach((e) => {
    let cur = new Object();
    cur.uuid = e;
    let a1 = arr1.find((o) => o.uuid === e);
    if (a1 == undefined) {
      cur.name = null;
    } else {
      cur.name = a1.name;
    }
    let a2 = arr2.find((o) => o.uuid === e);
    if (a2 == undefined) {
      cur.role = null;
    } else {
      cur.role = a2.role;
    }
    res.push(cur);
  });
  res.sort((a, b) => a.uuid - b.uuid);

  console.log("3: ");
  console.log(res);
}
const mergeTwoArray = (first, second) => {
  const map = {};
  [...first, ...second].forEach(({ uuid, role, name }) => {
    if (!map[uuid]) {
      map[uuid] = {
        uuid,
        ...{ role: role ? role : null },
        ...{ name: name ? name : null },
      };
    } else {
      map[uuid] = {
        ...map[uuid],
        //conditional add properties to object
        ...(role && { role: role ? role : null }),
        ...(name && { name: name ? name : null }),
      };
    }
  });
  return Object.values(map);
};
console.log(mergeTwoArray(first, second));
//mergeArray(first, second);
