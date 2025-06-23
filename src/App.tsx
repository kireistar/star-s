"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Terminal,
  Coffee,
  Heart,
  ArrowUpRight,
  ArrowUp,
  Zap,
  Brain,
  Bot,
  Cpu,
  Network,
  Sun,
  Moon,
  Sparkles,
  TrendingUp,
  Award,
  BookOpen,
  Code,
  Database,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Send,
} from "lucide-react"

// --- UI COMPONENT STUBS ---
// Simple stubs for Button and Card to make the component self-contained.
// Replace these with your actual component library imports (e.g., from ./components/ui/button).

const Button = ({ className, children, ...props }: React.ComponentProps<"button">) => (
  <button className={className} {...props}>
    {children}
  </button>
)
const Card = ({ className, children, ...props }: React.ComponentProps<"div">) => (
  <div className={className} {...props}>
    {children}
  </div>
)
const CardContent = ({ className, children, ...props }: React.ComponentProps<"div">) => (
  <div className={className} {...props}>
    {children}
  </div>
)

// --- CUSTOM HOOK STUB ---
// Simple stub for useTheme hook.
// Replace with your actual theme hook logic.
const useTheme = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  
  // Effect to apply the theme class to the body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);


  const toggleTheme = () => setIsDark(!isDark)
  return { isDark, toggleTheme }
}

// --- NAVIGATION COMPONENT ---
interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

function Navbar({ isDark, toggleTheme, scrollToSection, isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`${isDark ? "glass-dark" : "glass"} rounded-2xl px-4 py-2 border ${isDark ? "border-white/10" : "border-black/10"} backdrop-blur-xl shadow-lg`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-lg font-bold ai-gradient flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("home")}
            >
              <Brain className="mr-2" size={18} />
              <span className="hidden sm:block">Bintang AI</span>
              <span className="sm:hidden">BA</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 bg-white/5 rounded-xl p-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`${isDark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-black/5"} transition-all duration-300 text-sm font-medium px-3 py-1.5 rounded-lg relative`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-xl ${isDark ? "hover:bg-white/10" : "hover:bg-black/5"} transition-colors duration-300`}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun size={16} className="text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon size={16} className="text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* CTA Button - Desktop */}
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Send className="mr-1.5 transition-transform duration-300 group-hover:-rotate-12" size={14} />
                  Hire Me
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={18} className={isDark ? "text-white" : "text-gray-900"} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={18} className={isDark ? "text-white" : "text-gray-900"} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-2 mx-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div
                className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-4 border ${isDark ? "border-white/10" : "border-black/10"} backdrop-blur-xl shadow-xl`}
              >
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.name);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left ${isDark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-black/5"} transition-all duration-300 font-medium py-2.5 px-4 rounded-xl`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="pt-3"
                  >
                    <Button
                      onClick={() => {
                        scrollToSection("contact");
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-lg flex items-center justify-center"
                    >
                      <Send className="mr-2" size={16} />
                      Hire Me
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}


// --- FOOTER COMPONENT ---
interface FooterProps {
  isDark: boolean;
  scrollToSection: (sectionId: string) => void;
}

function Footer({ isDark, scrollToSection }: FooterProps) {
  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kireistar", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@bintang.ai", label: "Email" },
  ];

  return (
    <motion.footer
      className={`relative py-12 border-t ${isDark ? "border-white/10" : "border-black/10"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & Description */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold ai-gradient mb-4 flex items-center group"
              whileHover={{ scale: 1.05 }}
              aria-label="Back to Top"
            >
              <Brain className="mr-2 group-hover:rotate-6 transition-transform" size={24} />
              Bintang AI
              <ArrowUp size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-6 font-light max-w-lg text-sm leading-relaxed`}>
              Building the future with <span className="highlight">Artificial Intelligence</span>. Passionate about
              creating intelligent systems that matter for Indonesia and beyond.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition-all duration-300 group`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <social.icon
                    size={16}
                    className={`${isDark ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-black"} transition-colors duration-300`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className={`${isDark ? "text-white" : "text-gray-900"} font-semibold mb-4 text-sm tracking-wide`}>Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.name)}
                    className={`${isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-300 font-light text-sm`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className={`${isDark ? "text-white" : "text-gray-900"} font-semibold mb-4 text-sm tracking-wide`}>Current Status</h3>
            <div className="space-y-3">
              <motion.div className="flex items-center" whileHover={{ x: 3 }}>
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2.5 shadow-[0_0_8px_0px_#4ade80]"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className={`${isDark ? "text-gray-400" : "text-gray-600"} font-light text-sm`}>
                  Open for AI opportunities
                </span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 3 }}>
                <Coffee size={14} className="text-blue-400 mr-2.5" />
                <span className={`${isDark ? "text-gray-400" : "text-gray-600"} font-light text-sm`}>
                  Fueled by Indonesian coffee
                </span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 3 }}>
                <Brain size={14} className="text-purple-400 mr-2.5" />
                <span className={`${isDark ? "text-gray-400" : "text-gray-600"} font-light text-sm`}>
                  Training models since 2022
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={`pt-6 border-t ${isDark ? "border-white/10" : "border-black/10"} flex flex-col sm:flex-row justify-between items-center gap-y-2`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"} font-light text-xs text-center sm:text-left`}>
            © 2025 Bintang AI. Crafted with <Heart size={12} className="inline text-red-400 mx-0.5" /> and neural networks.
          </p>
          <p className={`${isDark ? "text-gray-500" : "text-gray-500"} text-xs`}>
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}



// --- MAIN APP COMPONENT ---
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const projects = [
        {
          title: "Neural Vision System",
          description:
            "Advanced computer vision platform for real-time object detection and classification. Built with deep learning models achieving high accuracy on custom datasets.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
          tech: ["Python", "PyTorch", "OpenCV", "YOLO", "Flask", "Docker"],
          github: "https://github.com",
          live: "https://demo.com",
          status: "production",
          highlight: "Computer Vision",
        },
        {
          title: "Indonesian Sentiment Analyzer",
          description:
            "Natural language processing model specifically trained for Indonesian text sentiment analysis using transformer architecture and BERT models.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
          tech: ["Python", "Transformers", "BERT", "FastAPI", "TensorFlow", "Streamlit"],
          github: "https://github.com",
          live: "https://demo.com",
          status: "beta",
          highlight: "NLP & AI",
        },
        {
          title: "Smart Analytics Dashboard",
          description:
            "Machine learning pipeline for predictive analytics with real-time data visualization and business intelligence insights for decision making.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
          tech: ["Python", "Scikit-learn", "React", "D3.js", "PostgreSQL", "Redis"],
          github: "https://github.com",
          live: "https://demo.com",
          status: "development",
          highlight: "Data Science",
        },
      ];

  const techStack = {
    "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Pandas", "NumPy"],
    "Web Development": ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flask", "TypeScript", "JavaScript"],
    "Database & Cloud": ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Git", "Linux", "Firebase"],
    "Data & Analytics": ["Jupyter", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Tableau", "Power BI", "Excel"],
  };

  const hardSkills = [
    { name: "Machine Learning", icon: Brain, description: "Deep Learning, Neural Networks, Model Training" },
    { name: "Data Science", icon: TrendingUp, description: "Statistical Analysis, Data Visualization, Insights" },
    { name: "Computer Vision", icon: Network, description: "Image Processing, Object Detection, CNN" },
    { name: "Natural Language Processing", icon: MessageSquare, description: "Text Analysis, Transformers, BERT" },
    { name: "Web Development", icon: Code, description: "Full-Stack Development, APIs, Responsive Design" },
    { name: "Database Management", icon: Database, description: "SQL, NoSQL, Data Modeling, Optimization" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, description: "Analytical thinking and creative solutions" },
    { name: "Team Collaboration", icon: Users, description: "Effective communication and teamwork" },
    { name: "Project Management", icon: Target, description: "Planning, execution, and delivery" },
    { name: "Continuous Learning", icon: BookOpen, description: "Staying updated with latest technologies" },
    { name: "Communication", icon: MessageSquare, description: "Technical writing and presentation skills" },
    { name: "Leadership", icon: Award, description: "Mentoring and guiding team members" },
  ];

  const achievements = [
    { title: "AI Research Publication", desc: "Published in IEEE Conference on AI", icon: BookOpen },
    { title: "Kaggle Competition Expert", desc: "Top 5% in multiple ML competitions", icon: Award },
    { title: "Google AI Certification", desc: "TensorFlow Developer Certified", icon: Sparkles },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${isDark
        ? "bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 text-white"
        : "bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-900"
        }`}
    >
      {/* Animated Background */}
      <motion.div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ y }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* RENDER THE REFACTORED NAVBAR */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        scrollToSection={scrollToSection} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.div
                className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 glow"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className={`w-full h-full rounded-2xl ${isDark ? "bg-gray-900" : "bg-white"} flex items-center justify-center`}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain size={40} className="text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6 mb-12" variants={itemVariants}>
              <motion.div
                className="text-sm text-blue-400 font-medium tracking-wider uppercase flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Cpu className="mr-2" size={16} />
                AI & Machine Learning Student
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="ai-gradient">Bintang</span>
              </motion.h1>

              <motion.div
                className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto font-light leading-relaxed`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Passionate about <span className="highlight">Artificial Intelligence</span> and{" "}
                <span className="highlight">Machine Learning</span>. Currently building intelligent systems that solve
                real-world problems and exploring the frontiers of <span className="highlight">Deep Learning</span> and{" "}
                <span className="highlight">Computer Vision</span>.
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium glow transition-all duration-300 group flex items-center">
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className={`border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center ${isDark ? "bg-transparent" : "bg-white"}`}
                >
                  <ArrowUpRight className="mr-2" size={18} />
                  View AI Projects
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="flex justify-center space-x-6 mb-12" variants={itemVariants}>
              {[
                { icon: Github, href: "https://github.com", label: "github" },
                { icon: Linkedin, href: "https://linkedin.com", label: "linkedin" },
                { icon: Mail, href: "mailto:hello@bintang.ai", label: "email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-full ${isDark ? "glass-dark hover:glass" : "glass hover:bg-white/80"} transition-all duration-300 glow`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon
                    size={20}
                    className={`text-blue-400 group-hover:${isDark ? "text-white" : "text-blue-600"} transition-colors duration-300`}
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`${isDark ? "glass-dark" : "glass"} rounded-xl p-4 border ${isDark ? "border-white/10" : "border-black/10"}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <achievement.icon className="text-blue-400 mb-2 mx-auto" size={20} />
                  <h4 className="font-semibold text-sm">{achievement.title}</h4>
                  <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{achievement.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-blue-400 font-medium tracking-wider uppercase mb-4 flex items-center justify-center">
              <Network className="mr-2" size={16} />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient">My Journey in AI</h2>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto font-light`}>
              Passionate about <span className="highlight">Artificial Intelligence</span> and{" "}
              <span className="highlight">Machine Learning</span>, building the future with intelligent systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-6 border ${isDark ? "border-white/10" : "border-black/10"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-blue-400 mb-4 font-medium flex items-center">
                  <Bot className="mr-2" size={16} />
                  My Story
                </div>
                <p className={`text-base ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-4`}>
                  I'm an <span className="highlight">AI & Machine Learning student</span> from Indonesia, passionate
                  about developing intelligent systems that solve real-world problems. Currently pursuing advanced
                  studies in <span className="highlight">Deep Learning</span>,{" "}
                  <span className="highlight">Computer Vision</span>, and{" "}
                  <span className="highlight">Natural Language Processing</span>.
                </p>
                <p className={`text-base ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                  My journey involves building <span className="highlight">neural networks</span>, training{" "}
                  <span className="highlight">ML models</span>, and creating AI-powered applications. I'm particularly
                  interested in <span className="highlight">Indonesian NLP</span> and{" "}
                  <span className="highlight">computer vision</span> applications for Southeast Asian markets.
                </p>
              </motion.div>
              <motion.div
                className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-6 border ${isDark ? "border-white/10" : "border-black/10"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-blue-400 mb-4 font-medium flex items-center">
                  <Code className="mr-2" size={16} />
                  Tech Stack & Tools
                </div>
                <div className="space-y-4">
                  {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2 text-sm`}>
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className={`px-2.5 py-1 ${isDark ? "glass-dark text-blue-400" : "glass text-blue-600"} rounded-full text-xs font-medium border ${isDark ? "border-white/10" : "border-black/10"}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.03 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-6 border ${isDark ? "border-white/10" : "border-black/10"}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm text-blue-400 mb-4 font-medium flex items-center">
                  <Brain className="mr-2" size={16} />
                  Technical Skills
                </div>
                <div className="space-y-3">
                  {hardSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0">
                        <skill.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"} text-sm`}>
                          {skill.name}
                        </h4>
                        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className={`${isDark ? "glass-dark" : "glass"} rounded-2xl p-6 border ${isDark ? "border-white/10" : "border-black/10"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm text-blue-400 mb-4 font-medium flex items-center">
                  <Users className="mr-2" size={16} />
                  Soft Skills
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex-shrink-0">
                        <skill.icon size={12} className="text-white" />
                      </div>
                      <div>
                        <h5 className={`font-medium ${isDark ? "text-white" : "text-gray-900"} text-xs`}>
                          {skill.name}
                        </h5>
                        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"} leading-tight`}>
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-blue-400 font-medium tracking-wider uppercase mb-4 flex items-center justify-center">
                <Sparkles className="mr-2" size={16} />
                Featured Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient">AI & ML Projects</h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto font-light`}>
                A collection of <span className="highlight">AI & ML projects</span> demonstrating expertise in intelligent
                system development
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                  <Card
                    className={`group ${isDark ? "glass-dark border-white/10 hover:border-white/20" : "glass border-black/10 hover:border-black/20"} transition-all duration-300 overflow-hidden bg-transparent h-full flex flex-col`}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-3 left-3">
                        <motion.span
                          className="px-2.5 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {project.highlight}
                        </motion.span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            project.status === "production"
                              ? "bg-green-500/20 text-green-400"
                              : project.status === "beta"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-grow">
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                            {project.title}
                        </h3>
                        <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4 font-light text-sm leading-relaxed flex-grow`}>
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.map((tech) => (
                            <span key={tech} className={`px-2 py-1 ${isDark ? "glass-dark text-blue-400" : "glass text-blue-600"} rounded-full text-xs font-medium border ${isDark ? "border-white/10" : "border-black/10"}`}>
                                {tech}
                            </span>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-auto">
                            <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-300 font-medium text-sm`} whileHover={{ scale: 1.05, x: 3 }}>
                                <Github size={16} className="mr-1.5" /> Source
                            </motion.a>
                            <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"} transition-colors duration-300 font-medium text-sm`} whileHover={{ scale: 1.05, x: 3 }}>
                                <ExternalLink size={16} className="mr-1.5" /> Demo
                            </motion.a>
                        </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-blue-400 font-medium tracking-wider uppercase mb-4 flex items-center justify-center">
                <Terminal className="mr-2" size={16} />
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient">Let's Collaborate</h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto font-light`}>
                Ready to build the future with <span className="highlight">AI</span>? Let's discuss{" "}
                <span className="highlight">machine learning projects</span> and opportunities!
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`${isDark ? "glass-dark border-white/10" : "glass border-black/10"} bg-transparent`}>
                <CardContent className="p-6">
                  <form className="space-y-5">
                    <motion.div
                      className="grid md:grid-cols-2 gap-5"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"} mb-2`}>
                          Name
                        </label>
                        <motion.input
                          type="text"
                          className={`w-full px-4 py-3 rounded-xl ${isDark ? "glass-dark border-white/10 text-white placeholder-gray-500" : "glass border-black/10 text-gray-900 placeholder-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                          placeholder="Your Name"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"} mb-2`}>
                          Email
                        </label>
                        <motion.input
                          type="email"
                          className={`w-full px-4 py-3 rounded-xl ${isDark ? "glass-dark border-white/10 text-white placeholder-gray-500" : "glass border-black/10 text-gray-900 placeholder-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                          placeholder="your@email.com"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"} mb-2`}>
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl ${isDark ? "glass-dark border-white/10 text-white placeholder-gray-500" : "glass border-black/10 text-gray-900 placeholder-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="AI Project Inquiry"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"} mb-2`}>
                        Message
                      </label>
                      <motion.textarea
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl ${isDark ? "glass-dark border-white/10 text-white placeholder-gray-500" : "glass border-black/10 text-gray-900 placeholder-gray-400"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                        placeholder="Tell me about your AI project or opportunity..."
                        whileFocus={{ scale: 1.01 }}
                      />
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r self-center from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium glow transition-all duration-300 group flex items-center justify-center">
                          <Zap className="mr-2" size={18} />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* RENDER THE REFACTORED FOOTER */}
      <Footer isDark={isDark} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;