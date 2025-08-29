// Callbacks
setTimeout(() => console.log("Done!"), 1000);

// Promises
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchData().then((data) => console.log(data));

// Async/await
async function load() {
  const data = await fetchData();
  console.log(data);
}
load();


// ✅ Understand:

// Callbacks

// Promises

// Async/await