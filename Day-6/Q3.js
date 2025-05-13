// 3. Fetch data from a public API using `async`/`await`, display and handle errors.

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");
