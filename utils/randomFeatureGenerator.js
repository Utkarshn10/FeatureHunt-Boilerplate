function generateRandomFeature() {
    const titles = [
      "Dark Mode",
      "Mobile App Support",
      "Integration with Slack",
      "Multi-language Support",
      "Analytics Dashboard",
      "Customizable Templates",
      "Two-factor Authentication",
      "Real-time Collaboration",
      "Automated Notifications",
      "Data Export Functionality"
    ];
  
    const descriptions = [
      "Enable dark mode for better visibility during nighttime usage.",
      "Develop a mobile application to provide on-the-go access to the platform.",
      "Integrate the product with Slack for seamless communication and collaboration.",
      "Add support for multiple languages to cater to a diverse user base.",
      "Provide an analytics dashboard to track usage and performance metrics.",
      "Allow users to customize templates according to their preferences.",
      "Implement two-factor authentication for enhanced security.",
      "Enable real-time collaboration features for team projects.",
      "Send automated notifications for important updates and reminders.",
      "Allow users to export their data in various formats for analysis."
    ];
  
    const randomIndex = Math.floor(Math.random() * titles.length);
  
    return {
      featureTitle: titles[randomIndex],
      description: descriptions[randomIndex],
      upvoteCount: Math.floor(Math.random() * 1000),
      currentUserUpvoted: false,
    };
  }
  
  function generateRandomFeatures(numFeatures) {
    const features = {};
    for (let i = 0; i < numFeatures; i++) {
      const feature = generateRandomFeature();
      features[`Feature ${i + 1}`] = feature;
    }
    return features;
  }

  export default function getRandomFeatureObject() {
    const numFeatures = 5; // Number of random features to generate
    const randomFeatures = generateRandomFeatures(numFeatures);
    return randomFeatures;
  }
  