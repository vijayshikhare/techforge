import React, { useState, useEffect } from 'react';
import { Rocket, Code, Smartphone, Globe, Cloud, Shield, Target, Users, Award, Clock, CheckCircle, Menu, X, ArrowRight, Sparkles, Zap, Heart, TrendingUp } from 'lucide-react';

export default function ITSolutionsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native & cross-platform apps that deliver exceptional user experiences on iOS and Android.",
      features: ["Native & Hybrid Apps", "App Store Optimization", "Maintenance & Updates"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Stunning, responsive websites and web applications built with cutting-edge technologies.",
      features: ["Responsive Design", "E-Commerce Solutions", "Progressive Web Apps"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that captivate users and drive engagement.",
      features: ["User Research", "Wireframing", "Brand Identity"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "CRM Solutions",
      description: "Powerful CRM systems to streamline your business operations and boost productivity.",
      features: ["Custom Development", "Integration Services", "Training & Support"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses seeking flexibility and growth.",
      features: ["AWS, Azure, GCP", "Migration Services", "Performance Optimization"],
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const projects = [
    {
      title: "EduTech Platform",
      description: "AI-powered learning companion helping 50K+ students achieve their goals with personalized study paths.",
      tags: ["React Native", "Node.js", "AI/ML"],
      gradient: "from-blue-600 to-indigo-600",
      type: "Mobile App"
    },
    {
      title: "CodeQuest Academy",
      description: "Interactive coding bootcamp platform with live mentorship and real-world projects.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      gradient: "from-purple-600 to-pink-600",
      type: "Web Platform"
    },
    {
      title: "Elite Events Hub",
      description: "Premium event planning platform connecting clients with top-tier vendors and services.",
      tags: ["PHP", "Laravel", "MySQL"],
      gradient: "from-red-600 to-orange-600",
      type: "Website"
    }
  ];

  const stats = [
    { icon: <Code />, value: "15+", label: "Web Projects", color: "text-blue-500" },
    { icon: <Smartphone />, value: "8+", label: "Mobile Apps", color: "text-purple-500" },
    { icon: <Target />, value: "3", label: "CRM Systems", color: "text-pink-500" },
    { icon: <Rocket />, value: "2025", label: "Founded", color: "text-orange-500" }
  ];

  const process = [
    {
      title: "Discovery & Strategy",
      description: "We immerse ourselves in your vision, analyze market trends, and craft a strategic roadmap aligned with your goals.",
      icon: <TrendingUp />
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create stunning wireframes, mockups, and interactive prototypes that bring your ideas to life.",
      icon: <Sparkles />
    },
    {
      title: "Development & QA",
      description: "Expert developers build scalable, clean code while our QA team ensures flawless functionality across all platforms.",
      icon: <Code />
    },
    {
      title: "Launch & Growth",
      description: "We handle seamless deployment and provide 24/7 support, updates, and optimization to fuel your success.",
      icon: <Rocket />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                TechForge
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {[ 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-lg font-bold text-gray-700 hover:text-purple-600 transition-all group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-base hover:shadow-2xl transition-all transform hover:scale-105 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-purple-600" />
              ) : (
                <Menu className="w-7 h-7 text-purple-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {['About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
              <button 
                className="w-full mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Complete IT Solutions Since 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Vision Into
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted partner for innovative IT solutions. We craft exceptional digital experiences that drive growth and transform businesses.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all">
                  Free Consultation
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-float">
                    <Globe className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mb-3" />
                    <div className="text-xs md:text-sm text-gray-600 mb-1">Web Development</div>
                    <div className="text-xl md:text-2xl font-bold text-blue-600">15+ Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-5 md:p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all animate-float-delayed">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 mb-3" />
                    <div className="text-xs md:text-sm mb-1 opacity-90">Fast Delivery</div>
                    <div className="text-xl md:text-2xl font-bold">On Time</div>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-5 md:p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all animate-float-slow">
                    <Smartphone className="w-8 h-8 md:w-10 md:h-10 mb-3" />
                    <div className="text-xs md:text-sm mb-1 opacity-90">Mobile Apps</div>
                    <div className="text-xl md:text-2xl font-bold">8+ Apps</div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-float-reverse">
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-red-500 mb-3" />
                    <div className="text-xs md:text-sm text-gray-600 mb-1">Client Love</div>
                    <div className="text-xl md:text-2xl font-bold text-red-600">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-all">
                  <div className={`${stat.color} mx-auto mb-3 w-12 h-12 flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">About TechForge</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Your Trusted Partner for
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Complete Digital Transformation
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                TechForge is your partner for complete digital transformation. Founded in 2025, we're a full-service IT solutions provider specializing in turning innovative ideas into market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">User-Centric Design</h3>
                    <p className="text-gray-600">Intuitive UI/UX that guarantees satisfaction and engagement</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">Latest frameworks and tools for scalable, robust solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-xl">
                  <div className="bg-pink-600 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Client-Focused Approach</h3>
                    <p className="text-gray-600">Your success is our priority, every step of the way</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all">
                <CheckCircle className="w-12 h-12 mb-4" />
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all">
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <div className="text-5xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-lg text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all">
                <Clock className="w-12 h-12 text-blue-500 mb-4" />
                <div className="text-5xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-lg text-gray-600">Support Available</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all">
                <Zap className="w-12 h-12 mb-4" />
                <div className="text-5xl font-bold mb-2">Fast</div>
                <div className="text-lg opacity-90">Turnaround Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Comprehensive Solutions for
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Digital Success
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Process Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
  <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-semibold uppercase tracking-wide">How We Work</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Our Development Process
      </h2>
      <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
        A proven methodology that ensures quality, efficiency, and client satisfaction at every step
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {process.map((step, index) => (
        <div key={index} className="relative group h-full">
          {/* Connector Line (hidden on mobile, shown on desktop) */}
          {index < process.length - 1 && (
            <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-white/30 z-0"></div>
          )}
          
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 hover:shadow-2xl border border-white/20 h-full flex flex-col">
            {/* Number Badge */}
            <div className="bg-gradient-to-br from-white to-purple-100 text-purple-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
              {index + 1}
            </div>
            
            {/* Icon */}
            <div className="text-white mb-6 bg-white/10 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all flex-shrink-0">
              {React.cloneElement(step.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight flex-shrink-0">{step.title}</h3>
            
            {/* Description */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed flex-grow">{step.description}</p>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center space-x-2">
        <span>Start Your Project</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real solutions for real businesses - explore our successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center`}>
                  <div className="text-6xl font-bold text-white/20">{index + 1}</div>
                </div>
                <div className="bg-white p-6">
                  <div className="text-sm font-semibold text-purple-600 mb-2">{project.type}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Open Source Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Community Contributions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Open Source & Innovation Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our contributions to AI, automation, and educational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "DeepFake Detection",
                subtitle: "AI/ML Summar Internship Project",
                tags: ["AI/ML", "Jupyter"],
                description: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks.",
                gradient: "from-purple-600 to-indigo-600",
                icon: <Shield className="w-8 h-8" />
              },
              {
                name: "NootBot",
                subtitle: "Intelligent Python Automation Bot",
                tags: ["Python", "Automation"],
                description: "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflows.",
                gradient: "from-emerald-600 to-teal-600",
                icon: <Code className="w-8 h-8" />
              },
              {
                name: "EduTools",
                subtitle: "Educational Web Platform",
                tags: ["HTML/CSS", "Education"],
                description: "Collection of educational tools and utilities for students and teachers, featuring interactive learning modules.",
                gradient: "from-pink-600 to-rose-600",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                name: "DialogFlow Chatbot",
                subtitle: "Conversational AI Assistant",
                tags: ["DialogFlow", "NLP"],
                description: "Intelligent chatbot using Google's DialogFlow ES for natural language understanding and automated support.",
                gradient: "from-cyan-600 to-blue-600",
                icon: <Globe className="w-8 h-8" />
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${project.gradient} p-6 text-white h-full flex flex-col`}>
                  <div className="mb-4 opacity-90">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{project.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-4 opacity-80 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-white font-semibold hover:gap-3 transition-all">
                    <span className="text-sm">View on GitHub</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your digital goals. Get a free consultation today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer id='contact' className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
      {/* Brand Section */}
      <div className="sm:col-span-2 lg:col-span-1">
        <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TechForge
          </span>
        </div>
        <p className="text-base leading-relaxed text-gray-400 mb-6">
          Transforming ideas into digital reality since 2025. Your trusted partner for innovative IT solutions.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
  {[
    {
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      link: "https://vijayshikhare.github.io/vijayshikhare-portfolio-site", // 🌐 your portfolio or website
    },
    {
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      link: "https://github.com/vijayshikhare", // 💻 GitHub
    },
    {
      icon: <Heart className="w-5 h-5" />,
      color: "from-pink-500 to-red-500",
      link: "https://www.linkedin.com/in/vijayshikhare", // ❤️ LinkedIn or other social
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-orange-500 to-yellow-500",
      link: "https://x.com/vijayshikhre", // ✨ Twitter/X
    },
  ].map((social, idx) => (
    <a
      key={idx}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gradient-to-br ${social.color} p-2.5 rounded-lg text-white hover:shadow-lg transition-all transform hover:scale-110 hover:-translate-y-1`}
    >
      {social.icon}
    </a>
  ))}
</div>

      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
          Services
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
        </h4>
        <ul className="space-y-3">
          {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Cybersecurity', 'CRM Systems'].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="text-base">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
          Company
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
        </h4>
        <ul className="space-y-3">
          {['About Us', 'Portfolio', 'Careers', 'Contact', 'Blog', 'Team'].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="text-base">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
          Stay Updated
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
        </h4>
        <p className="text-gray-400 text-base mb-4">
          Get the latest updates on our projects and services.
        </p>
        <div className="flex flex-col space-y-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-base"
          />
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-base text-center md:text-left">
          &copy; 2025 <span className="text-white font-semibold">TechForge</span>. All rights reserved. Developed by <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> Vijay Shikhare.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
            <a 
              key={idx}
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-base"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}