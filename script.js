const usernameInput = document.getElementById("usernameInput"); // Changed from "username" to "usernameInput"
const searchButton = document.getElementById("search");
const loadingMessage = document.getElementById("loading");
const error = document.getElementById("error");
const profileCard = document.getElementById("profile-card");

async function searchUser(username) {
  if (!username.trim()) {
    return;
  }

  // Hide previous results
  document.getElementById("profile-content").classList.remove("show");
  profileCard.classList.remove("show");
  error.style.display = "none";
  loadingMessage.style.display = "flex"; // Changed to flex to match CSS

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("User not found");
      } else if (response.status === 403) {
        throw new Error("API rate limit exceeded");
      } else {
        throw new Error("HTTP error: " + response.status);
      }
    }
    const user = await response.json();

    // Update profile info
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("name").textContent =
      user.name || "No name available";
    document.getElementById("username").textContent = `@${user.login}`; // Fixed ID
    document.getElementById("user-bio").textContent =
      user.bio || "No bio available";

    // Update stats
    document.getElementById("repo-count").textContent =
      user.public_repos.toLocaleString() || 0;
    document.getElementById("follower-count").textContent =
      user.followers.toLocaleString() || 0;
    document.getElementById("following-count").textContent =
      user.following.toLocaleString() || 0;
    document.getElementById("gist-count").textContent =
      user.public_gists.toLocaleString() || 0;

    // Update profile link
    document.getElementById("profile-link").href = user.html_url;

    // Show profile content
    loadingMessage.style.display = "none";
    error.style.display = "none";

    setTimeout(() => {
      document.getElementById("profile-content").classList.add("show");
      profileCard.classList.add("show");
    }, 100);
  } catch (err) {
    console.error("Search error:", err);
    loadingMessage.style.display = "none";
    document.getElementById("profile-content").classList.remove("show");

    error.style.display = "flex"; // Changed to flex to match CSS

    if (err.message.includes("Rate Limit")) {
      error.querySelector(".error-message").textContent =
        "Rate limit exceeded. Please try again later.";
    } else if (err.message.includes("failed to fetch")) {
      error.querySelector(".error-message").textContent =
        "Unable to connect. Please check your internet connection.";
    } else {
      error.querySelector(".error-message").textContent =
        "The GitHub user doesn't exist or the profile is private. Please check the username once again.";
    }

    error.classList.add("show");
  }
}

// Add event listeners
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("usernameInput").value;
  searchUser(username);
});

searchButton.addEventListener("click", () => {
  searchUser(usernameInput.value);
});

usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchUser(usernameInput.value);
  }
});

usernameInput.focus(); // Set focus on the input field when the page loads
