const products = [
  { code: 'P001', name: 'Product 1', price: 10 },
  { code: 'P002', name: 'Product 2', price: 20 },
  { code: 'P003', name: 'Product 3', price: 30 },
  { code: 'P004', name: 'Product 4', price: 40 },
  { code: 'P005', name: 'Product 5', price: 50 },
  { code: '', name: 'Product 6', price: 60 },
  { code: 'P007', name: '', price: 70 },
  { code: 'P008', price: 80 },
  { code: 'P009', name: 'Product 9' },
  { code: 'P010', name: 'Product 10', price: null },
  { code: 'P011', name: 'Product 11', price: undefined },
];

function convertArrayToObject(arr) {
  const obj = Object.fromEntries(arr.map(item => [item.code, item]));
  const validKeys = Object.keys(obj).filter(key => {
    const { code, name, price } = obj[key];
    return code && name && price !== null && price !== undefined;
  });
  const newData = {
    data: obj,
    searchProduct: function(code) {
      if (validKeys.includes(code)) {
        return obj[code];
      } else {
        return null;
      }
    }
  };
  return newData;
}

const data = convertArrayToObject(products);
console.log(data.searchProduct('P003'));
console.log(data.searchProduct('P006'));
