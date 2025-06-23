"use client"

import { motion } from "framer-motion"
import { Brain, Github, Linkedin, Mail, Coffee, Heart, ArrowUp } from "lucide-react"

interface FooterProps {
  isDark: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ isDark, scrollToSection }: FooterProps) {
  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@bintang.ai", label: "Email" },
  ]

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
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-6 font-light max-w-md text-sm leading-relaxed`}>
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
            © 2024 Bintang AI. Crafted with <Heart size={12} className="inline text-red-400 mx-0.5" /> and neural networks.
          </p>
          <p className={`${isDark ? "text-gray-500" : "text-gray-500"} text-xs`}>
            Built with Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}