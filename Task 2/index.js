async function awaitCall() {
    // Simulating an API call
    const fetchData = () => new Promise(resolve => {
      setTimeout(() => resolve('Fetched data from API'), 2000); // Simulated delay
    });
  
    const data = await fetchData();
    console.log(data);
  }
  
