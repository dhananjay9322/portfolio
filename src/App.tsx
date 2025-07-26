import React, { useState } from 'react';
import EnhancedNavbar from './components/EnhancedNavbar';
import EnhancedHero from './components/EnhancedHero';
import EnhancedSkills from './components/EnhancedSkills';
import EnhancedProjects from './components/EnhancedProjects';
import EnhancedEducation from './components/EnhancedEducation';
import EnhancedContact from './components/EnhancedContact';
import EnhancedFooter from './components/EnhancedFooter';
import CloudBackground from './components/CloudBackground';
import LoadingScreen from './components/LoadingScreen';
import ThemeProvider from './contexts/ThemeContext';
import EnhancedBlogCaseStudies from './components/EnhancedBlogCaseStudies';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <ThemeProvider>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        <EnhancedNavbar />
        <CloudBackground />
        <CloudBackground 
          variant="hero"
          enableMatrix={false}
          enableCircuits={true}
          enableTechIcons={true}
        />
        <main>
          <EnhancedHero />
          <EnhancedSkills />
          <EnhancedProjects />
          <EnhancedBlogCaseStudies postsData={[
              {
                title: "5 GUI programs and find commands working behind them",
                description: "Ever wonder what Linux GUI tools really do behind the scenes? Here’s how 5 popular apps map directly to powerful terminal commands — become a smarter, command-line-savvy user today!",
                tags: ["NetworkManager", "GNOME System Monitor", "Synaptic Package Manager", "Nautilus", "GParted", "Linux"],
                type: "Case Study",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linux-opensource-sysadmin-activity-7349639733225938947-LTr_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "Change the logo or icon of any program",
                description: "Personalize your Linux apps by changing their icons with simple tweaks — no advanced tools needed! Works across GNOME, KDE, XFCE, and more for a cleaner, branded workspace.",
                tags: ["GUI", "UIUX", "Linux"],
                type: "Case Study",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linux-opensource-customization-activity-7350016620909539328-aGax?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "Add more terminals and GUI interfaces",
                description: "🚀 Take your Linux setup to the next level with advanced terminals, tiling window managers, and polished desktop tweaks — perfect for power users, devs, and customization lovers alike!",
                tags: ["Linux"],
                type: "Case Study",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linux-terminal-opensource-activity-7351256821686337536-hbZb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "How command working behind the Ctrl+C and Ctrl+Z interrupt signals",
                description: "Learn how these keyboard shortcuts interrupt or pause commands using signal-based control under the Linux hood.",
                tags: ["Signals", "Bash", "Linux"],
                type: "Case Study",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linux-opensource-customization-activity-7350016620909539328-aGax?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "🚀 Why Companies Are Embracing Kubernetes",
                description: "Kubernetes is the leading platform for automating containerized applications, enabling businesses like Spotify, Airbnb, and BMW to scale efficiently, streamline DevOps, and accelerate innovation.",
                tags: ["Kubernetes", "CICD"],
                type: "Blog",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_kubernetes-cloudcomputing-devops-activity-7352657279877337091-2mUc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "🗂️ Understanding S3 Storage Classes",
                description: "Amazon S3 offers six smart storage classes tailored to different access patterns and cost needs — from frequently accessed data to deep archives — helping you store more efficiently and cost-effectively.",
                tags: ["AWS S3", "Glacier", "One Zone"],
                type: "Blog",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_aws-s3-cloudstorage-activity-7352615757798666240-bKJf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "🚀 How Top Companies Use AWS to Scale Faster",
                description: "AWS powers innovation at scale — from LinkedIn’s global connectivity to Moderna’s rapid vaccine development — proving cloud is not just infrastructure, but a strategic advantage.",
                tags: ["AWS"],
                type: "Blog",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_aws-cloudcomputing-casestudy-activity-7352579619536998400-ktMF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "💡 Why Companies Use Docker",
                description: "Top tech companies like Spotify, PayPal, and ADP use Docker to streamline development, boost scalability, and accelerate delivery — making it a key driver of modern DevOps and digital transformation.",
                tags: ["Docker", "Spotify", "PayPal", "ADP"],
                type: "Blog",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_docker-devops-containers-activity-7350067715748810752-BtLA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "⁉️ Why Top Companies Choose Linux Over Other Operating Systems 🔧💻",
                description: "From Google to NASA, top companies choose Linux for its unmatched flexibility, security, and cost efficiency — making it the backbone of modern infrastructure and innovation.",
                tags: ["Linux", "Google", "NASA"],
                type: "Blog",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linux-opensource-techleadership-activity-7349535460836200450-EWIn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              },
              {
                title: "⁉️ Why LinkedIn Uses AWS 💻",
                description: "LinkedIn leverages AWS for global scalability, top-tier security, and AI-driven innovation — enabling faster deployments, lower costs, and a smarter user experience for over a billion professionals.",
                tags: ["AWS", "LinkedIn"],
                type: "Case Study",
                readLink: "https://www.linkedin.com/posts/dhananjay-kharat-4844222a7_linkdein-aws-amazon-activity-7348953603920850944-7LAp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnsUiQB_YTfoPGfGHNVqrqejy1DZ8m39iY"
              }
            ]} />
            <EnhancedEducation />
            <EnhancedContact />
          </main>
          <EnhancedFooter />
        </div>
    </ThemeProvider>
  );
}

export default App;