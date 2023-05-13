function fetchLatestInstagramPosts() {
    fetch("/api/latest-posts")
      .then((response) => response.json())
      .then((posts) => {
        const instagramSection = document.querySelector(".instagram-section");
  
        posts.forEach((postUrl) => {
          const img = document.createElement("img");
          img.src = postUrl;
          img.classList.add("instagram-image");
          instagramSection.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching Instagram posts:", error));
  }
  
  document.addEventListener("DOMContentLoaded", fetchLatestInstagramPosts);
  