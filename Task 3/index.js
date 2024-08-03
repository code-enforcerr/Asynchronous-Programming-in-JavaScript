async function awaitCallWithErrorHandling() {
    // Simulating an API call
    const fetchData = () => new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('API call failed')), 2000); // Simulated delay with error
    });
  
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message); // User-friendly error message
    }
  }
  