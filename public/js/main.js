const button = document.querySelector("#get-posts-btn");
const output = document.querySelector("#output");

// get and show posts
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("h3");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

// event listeners
button.addEventListener("click", showPosts);
