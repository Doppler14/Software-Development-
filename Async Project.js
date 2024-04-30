    //Task 1
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    }

  // Example usage
    iterateWithAsyncAwait([1, 2, 3, 4, 5]);

    //Task 2
    async function awaitCall() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }
    
      // Example usage
    awaitCall();
    
    //Task 3
    async function awaitCall() {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
            throw new Error('Failed to fetch data: ' + response.status);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    
      // Example usage
    awaitCall();
    