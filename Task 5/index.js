async function parallelCalls(urls) {
    const fetchData = (url) => new Promise(resolve => {
      setTimeout(() => resolve(`Fetched data from ${url}`), 1000); // Simulated fetch with a delay
    });
  
    const requests = urls.map(url => fetchData(url)); // Map URLs to fetch promises
    const responses = await Promise.all(requests); // Wait for all to complete
    console.log('Responses:', responses);
  }
  