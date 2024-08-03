async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => {
      setTimeout(() => resolve('Data from API 1'), 2000);
    });
  
    const fetchData2 = () => new Promise(resolve => {
      setTimeout(() => resolve('Data from API 2'), 3000);
    });
  
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log('Combined Results:', result1, result2);
  }
  