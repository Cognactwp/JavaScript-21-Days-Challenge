(() => {
  // 1. How Asynchronous code works in JS
  // function simulateAsyncAPI(text, timeout){
  //     setTimeout(()=> console.log(text),timeout);
  // }

  // simulateAsyncAPI('A',1000);
  // simulateAsyncAPI('B',500);
  // simulateAsyncAPI('C',100);

  // 2. CallBack
  //   function simulateAsyncAPI(text, timeout, callback) {
  //     setTimeout(() => {
  //       console.log(text);

  //       if (callback) {
  //         callback();
  //       }
  //     }, timeout);
  //   }

  //   simulateAsyncAPI("A", 1000, () => {
  //     simulateAsyncAPI("B", 500, () => {
  //       simulateAsyncAPI("C", 100);
  //     });
  //   });

  // 3. Promise
  //   function simulateAsyncAPI(text, timeout) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         // if(text === 'B') return reject('B got rejectesd');
  //         console.log(text);
  //         resolve();
  //       }, timeout);
  //     });
  //   }

  //   simulateAsyncAPI('A', 1000)
  //     .then(() => {
  //       return simulateAsyncAPI('B', 500);
  //     })
  //     .then(() => {
  //       return simulateAsyncAPI('C', 100);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // 4. Async/Await
  function simulateAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if(text === 'B') return reject('B got rejectesd');
        console.log(text);
        resolve();
      }, timeout);
    });
  }

  async function run() {
    try {
      await simulateAsyncAPI("A", 1000);
      await simulateAsyncAPI("B", 500);
      await simulateAsyncAPI("C", 100);
    } catch (error) {
      console.log(error);
    }
  }
  run();
})();
