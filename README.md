# GitHub Profile Viewer

A sleek, responsive web application that allows users to search and view GitHub profiles with detailed statistics and information. Built with vanilla HTML, CSS, and JavaScript, featuring a modern dark theme and smooth animations.

## ✨ Features

- **Real-time Profile Search**: Search for any GitHub user by username
- **Comprehensive Profile Display**: Shows avatar, name, bio, and key statistics
- **Interactive Statistics**: View repositories, followers, following, and gists count
- **Direct GitHub Access**: One-click button to visit the user's GitHub profile
- **Responsive Design**: Works seamlessly across different screen sizes
- **Loading States**: Smooth loading animations while fetching data
- **Error Handling**: User-friendly error messages for invalid usernames or API issues
- **Modern UI**: Dark theme with elegant typography and hover effects
- **Smooth Animations**: Fade-in effects and interactive hover states

## 🖼️ Design

The interface was carefully designed using **Figma** to create a modern, user-friendly experience with:
- Clean, minimalist layout
- Professional color scheme with dark backgrounds
- Typography using Google Fonts (Inknut Antiqua & Tenor Sans)
- Interactive elements with hover effects and transitions
- Background images and visual elements for enhanced aesthetics

## 🚀 Demo

Simply enter a GitHub username in the search field and press "Search" to view the profile information instantly.
<img src="https://github.com/user-attachments/assets/104180df-82ba-4cab-90da-20c6fe56ed12" />


## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, animations, and transitions
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **GitHub API**: Fetching real-time user data
- **Google Fonts**: Custom typography (Inknut Antiqua, Tenor Sans)
- **Figma**: UI/UX design and prototyping

## 📁 Project Structure

```
github-profile-viewer/
├── index.html          # Main HTML file
├── style.css         # Stylesheet with responsive design
├── script.js         # JavaScript functionality and API integration
├── headerImg.png     # Header background image
├── bgImg.png         # Main container background image
└── README.md         # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blah-bleh-hmm/github-profile-viewer.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd github-profile-viewer
   ```

3. **Open in browser**:
   - Simply open `index.html` in your preferred web browser


4. **Start searching**:
   - Enter any GitHub username and click "Search"
   - View the profile information and statistics

## 📱 Usage

1. **Search for a User**: Enter a GitHub username in the search field
2. **View Profile**: The application displays:
   - Profile avatar
   - Full name and username
   - Bio/description
   - Repository count
   - Followers and following counts
   - Public gists count
3. **Visit GitHub**: Click "View on GitHub" to open the user's profile in a new tab
4. **Error Handling**: If a user doesn't exist, you'll see a helpful error message

## 🎨 Key Features Breakdown

### Search Functionality
- Real-time validation
- Enter key support
- Loading states with spinner animation

### Profile Display
- Responsive card layout
- Professional information presentation
- Interactive hover effects

### Statistics Cards
- Four key metrics displayed in grid layout
- Hover animations for enhanced interactivity
- Formatted numbers with locale-specific formatting

### Error States
- User-friendly error messages
- Different error types (user not found, rate limits, network issues)
- Visual error indicators

## 🌐 API Integration

The application uses the GitHub REST API v3:
- **Endpoint**: `https://api.github.com/users/{username}`
- **Rate Limit**: 60 requests per hour for unauthenticated requests
- **Error Handling**: Comprehensive error handling for various API responses

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add feature-name'`
5. **Push to the branch**: `git push origin feature-name`
6. **Open a Pull Request**


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ by [blah-bleh-hmm](https://github.com/blah-bleh-hmm)

---

**Note**: This application uses the GitHub API and is subject to rate limiting. For heavy usage, consider implementing GitHub OAuth for higher rate limits.
