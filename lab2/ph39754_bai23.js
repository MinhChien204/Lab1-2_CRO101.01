const firtPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error: some bug')); // Chuyển đổi chuỗi thành một đối tượng lỗi
  }, 2000);
});

const getList = async () => {
  const response = await fetch('https://64d8a86c5f9bf5b879cedd9.mockapi.io/api/v1/moviesNow');
  return response.json();
};

// Yêu cầu thứ nhất: Dừng khi một promise thất bại và log lỗi
Promise.all([firtPromise, secondPromise.catch(error => error), getList()])
  .then((results) => {
    console.log('All promises completed:', results);
    console.log('Success!');
  })
  .catch((error) => {
    console.log('One or more promises failed:', error);
  });

// Yêu cầu thứ hai: Luôn chạy bất kể promise thất bại hay thành công và log ra thông báo
Promise.allSettled([firtPromise, secondPromise, getList()])
  .then((results) => {
    console.log('All promises completed:', results);
    console.log('Success!');
  })
  .finally(() => {
    console.log('Done!');
  });
