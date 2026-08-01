// test-fetch.js
fetch("https://api.github.com/users/danskyvich/events/public?per_page=30", {
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
    },
})
    .then((res) => res.json())
    .then((data) => console.log("SUCCESS:", data.length, "events"))
    .catch((err) => console.error("FAILED:", err));