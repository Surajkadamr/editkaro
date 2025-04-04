'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Image from 'next/image';

type PortfolioItem = {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    videoUrl: string;
    description: string;
};

// Video categories
const categories = [
    'All',
    'Short-form Videos',
    'Long-form Videos',
    'Gaming Videos',
    'Football Edits',
    'eCommerce Ads',
    'Documentary Style',
    'Color Grading',
    'Anime Videos',
    'Ads',
];

// Sample portfolio items with video data
// In a real implementation, this would come from a database or API
const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'Dynamic Football Highlights',
        category: 'Football Edits',
        thumbnail: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Fast-paced football highlights with dynamic transitions and effects.',
    },
    {
        id: 2,
        title: 'Product Showcase',
        category: 'eCommerce Ads',
        thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Sleek product showcase with professional lighting and animations.',
    },
    {
        id: 3,
        title: 'Gaming Montage',
        category: 'Gaming Videos',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Action-packed gaming highlights with synchronized audio effects.',
    },
    {
        id: 4,
        title: 'Short Social Media Clip',
        category: 'Short-form Videos',
        thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Engaging short-form content optimized for social media platforms.',
    },
    {
        id: 5,
        title: 'Wildlife Documentary',
        category: 'Documentary Style',
        thumbnail: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description:
            'Cinematic documentary footage with professional narration and sound design.',
    },
    {
        id: 6,
        title: 'Anime Trailer',
        category: 'Anime Videos',
        thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Stylized anime trailer with custom effects and transitions.',
    },
    {
        id: 7,
        title: 'Brand Commercial',
        category: 'Ads',
        thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description:
            'Professional commercial with compelling storytelling and brand messaging.',
    },
    {
        id: 8,
        title: 'Cinematic Color Grade',
        category: 'Color Grading',
        thumbnail: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Showcase of color grading techniques for cinematic visual appeal.',
    },
    {
        id: 9,
        title: 'Feature Film Excerpt',
        category: 'Long-form Videos',
        thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&h=640',
        videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
        description: 'Excerpt from a feature-length production with professional editing.',
    },
];

// Header Component
interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Editkaro.in
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#portfolio" className="hover:text-purple-400 transition-colors">
                        Portfolio
                    </a>
                    <a href="#services" className="hover:text-purple-400 transition-colors">
                        Services
                    </a>
                    <a href="#about" className="hover:text-purple-400 transition-colors">
                        About
                    </a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 py-4 absolute w-full border-b border-gray-800">
                    <div className="container mx-auto px-4 flex flex-col space-y-3">
                        <a
                            href="#portfolio"
                            className="hover:text-purple-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#services"
                            className="hover:text-purple-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="hover:text-purple-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-purple-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

// Hero Component
function Hero({ isVisible }: { isVisible: boolean }) {
    return (
        <section
            className={`relative h-[80vh] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/video-poster.jpg"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-editing-a-video-in-a-studio-22886-large.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            <div className="container mx-auto px-4 z-20 text-center relative">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="block">Transforming Ideas Into</span>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Visual Masterpieces
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Professional video editing and social media marketing services that elevate
                    your brand&apos;s presence
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#portfolio"
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg text-white"
                    >
                        View Our Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 text-white"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

// Portfolio Item Card Component
function PortfolioCard({ item, openVideoModal }: { item: PortfolioItem; openVideoModal: (item: PortfolioItem) => void }) {
    const imageWidth = 500;
    const imageHeight = 320;

    return (
        <div
            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative overflow-hidden aspect-[500/320]">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={imageWidth}
                    height={imageHeight}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ width: '100%', height: '100%' }}
                    priority={item.id <= 3}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                        <button
                            onClick={() => openVideoModal(item)}
                            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Play Video
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300 flex-shrink-0">
                        {item.category}
                    </span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
        </div>
    );
}

// Portfolio Section Component
function Portfolio({ selectedCategory, handleCategoryChange, filteredItems, openVideoModal }: {
    selectedCategory: string;
    handleCategoryChange: (category: string) => void;
    filteredItems: PortfolioItem[];
    openVideoModal: (item: PortfolioItem) => void;
}) {
    return (
        <section id="portfolio" className="py-20 container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore our diverse range of video editing projects across multiple
                    categories and styles
                </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mobile Category Dropdown */}
                <div className="md:hidden mb-8">
                    <label htmlFor="category-select" className="sr-only">Select Category</label>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <PortfolioCard key={item.id} item={item} openVideoModal={openVideoModal} />
                ))}
            </div>
        </section>
    );
}

// Services Section Component
function Services() {
    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Professional video editing and marketing solutions tailored to your
                        specific needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1: Video Editing */}
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                        <div className="w-14 h-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Video Editing</h3>
                        <p className="text-gray-400">
                            Professional editing for all types of content including short-form,
                            long-form, gaming, and documentary style videos.
                        </p>
                    </div>

                    {/* Service 2: Color Grading */}
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                        <div className="w-14 h-14 bg-pink-600/20 rounded-lg flex items-center justify-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Color Grading</h3>
                        <p className="text-gray-400">
                            Enhance the visual appeal of your videos with professional color
                            grading and correction techniques.
                        </p>
                    </div>

                    {/* Service 3: Motion Graphics */}
                     <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                         <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-5">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                             </svg>
                         </div>
                         <h3 className="text-xl font-semibold mb-3">Motion Graphics</h3>
                         <p className="text-gray-400">
                             Custom motion graphics and animations to make your videos more
                             engaging and professional.
                         </p>
                     </div>

                    {/* Service 4: Social Media Marketing */}
                     <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                         <div className="w-14 h-14 bg-green-600/20 rounded-lg flex items-center justify-center mb-5">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                             </svg>
                         </div>
                         <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
                         <p className="text-gray-400">
                             Strategic social media marketing to maximize the reach and impact of
                             your video content.
                         </p>
                     </div>

                    {/* Service 5: Commercial Production */}
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                        <div className="w-14 h-14 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-5">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Commercial Production</h3>
                        <p className="text-gray-400">
                           Full-service commercial production for brands and businesses looking
                           to create impactful advertisements.
                        </p>
                    </div>

                    {/* Service 6: Mobile-Optimized Content */}
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors">
                       <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-5">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                           </svg>
                       </div>
                       <h3 className="text-xl font-semibold mb-3">Mobile-Optimized Content</h3>
                       <p className="text-gray-400">
                           Specialized editing for mobile platforms, ensuring your content
                           looks great on all devices.
                       </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// About Section Component
function About() {
    const aboutImageWidth = 600;
    const aboutImageHeight = 400;

    return (
        <section id="about" className="py-20 container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Editkaro.in</h2>
                    <p className="text-gray-300 mb-6">
                        Editkaro.in is a premier video editing and social media marketing agency
                        dedicated to helping brands and creators tell their stories through
                        compelling visual content.
                    </p>
                    <p className="text-gray-300 mb-6">
                        With expertise across multiple video styles and formats, our team of
                        skilled editors and marketers work closely with clients to deliver
                        high-quality content that engages audiences and achieves business
                        objectives.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Whether you need short-form videos for social media, long-form content
                        for YouTube, or professional commercials for your brand, we have the
                        skills and experience to bring your vision to life.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="bg-gray-800 px-5 py-3 rounded-lg">
                            <p className="text-2xl font-bold text-purple-400">500+</p>
                            <p className="text-sm text-gray-400">Projects Completed</p>
                        </div>
                        <div className="bg-gray-800 px-5 py-3 rounded-lg">
                            <p className="text-2xl font-bold text-pink-400">50+</p>
                            <p className="text-sm text-gray-400">Happy Clients</p>
                        </div>
                        <div className="bg-gray-800 px-5 py-3 rounded-lg">
                            <p className="text-2xl font-bold text-blue-400">{categories.length -1}</p>
                            <p className="text-sm text-gray-400">Video Categories</p>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-xl aspect-[600/400]">
                        <Image
                            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000"
                            alt="Video editing workspace"
                            width={aboutImageWidth}
                            height={aboutImageHeight}
                            className="object-cover"
                            style={{ width: '100%', height: '100%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Our Editing Studio</h3>
                            <p className="text-gray-300 text-sm md:text-base">
                                Where creativity meets technical excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Contact Form Component
function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // --- Placeholder for actual form submission logic ---
        // In a real app, you'd send formData to an API endpoint:
        // try {
        //   const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData),
        //   });
        //   if (response.ok) {
        //     setSubmitStatus('success');
        //     setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        //   } else {
        //     setSubmitStatus('error');
        //   }
        // } catch (error) {
        //   setSubmitStatus('error');
        // } finally {
        //   setIsSubmitting(false);
        // }

        // Simulate submission delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form Data Submitted (Placeholder):', formData);
        setSubmitStatus('success'); // Simulate success
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setIsSubmitting(false);
         // Hide message after a delay
         setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        placeholder="Your email"
                    />
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                         value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        placeholder="Subject"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                         value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                        placeholder="Your message"
                    ></textarea>
                </div>
                 {submitStatus === 'success' && (
                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

// Contact Section Component
function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to take your video content to the next level? Contact us today to
                        discuss your project.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:contact@editkaro.in" className="text-white hover:text-purple-300 break-all">contact@editkaro.in</a>
                                </div>
                            </div>
                             {/* Phone */}
                            <div className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <a href="tel:+919876543210" className="text-white hover:text-purple-300">+91 98765 43210</a>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-start gap-3">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white">Mumbai, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-medium mb-3">Follow Us</h4>
                            <div className="flex gap-4">
                                {/* Replace # with actual links */}
                                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Youtube" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Component */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Editkaro.in
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Transforming Ideas Into Visual Masterpieces
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
                        <div>
                            <h4 className="text-lg font-medium mb-3">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
                                <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
                                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-3">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                {/* Replace # with actual service links if available */}
                                <li><a href="#services" className="hover:text-purple-400 transition-colors">Video Editing</a></li>
                                <li><a href="#services" className="hover:text-purple-400 transition-colors">Color Grading</a></li>
                                <li><a href="#services" className="hover:text-purple-400 transition-colors">Motion Graphics</a></li>
                                <li><a href="#services" className="hover:text-purple-400 transition-colors">Social Media Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Editkaro.in. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

// Video Modal Component
function VideoModal({ selectedVideo, closeVideoModal, modalRef }: {
    selectedVideo: PortfolioItem | null;
    closeVideoModal: () => void;
    modalRef: React.RefObject<HTMLDivElement>;
}) {
    if (!selectedVideo) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div
                ref={modalRef}
                className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
            >
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`${selectedVideo.videoUrl}?autoplay=1`}
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2 gap-4">
                        <div>
                            <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                            <p className="text-gray-400 mt-1 text-sm">{selectedVideo.description}</p>
                        </div>
                        <button
                            onClick={closeVideoModal}
                            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors flex-shrink-0"
                            aria-label="Close video modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main Page Component
export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(portfolioItems);
    const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Filter items based on selected category
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredItems(portfolioItems);
        } else {
            setFilteredItems(portfolioItems.filter((item) => item.category === selectedCategory));
        }
    }, [selectedCategory]);

    // Animation on page load
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Close modal when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeVideoModal();
            }
        }

        if (selectedVideo) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedVideo]);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              closeVideoModal();
           }
        };
        if (selectedVideo) {
            window.addEventListener('keydown', handleEsc);
        } else {
            window.removeEventListener('keydown', handleEsc);
        }

        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedVideo]);

    // Handle category selection
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsMenuOpen(false);
    };

    // Open video modal
    const openVideoModal = (item: PortfolioItem) => {
        setSelectedVideo(item);
        document.body.style.overflow = 'hidden';
    };

    // Close video modal
    const closeVideoModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    // Close mobile menu when window resizes to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <Hero isVisible={isVisible} />
                <Portfolio
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    filteredItems={filteredItems}
                    openVideoModal={openVideoModal}
                />
                <Services />
                <About />
                <Contact />
            </main>

            <Footer />

            <VideoModal
                selectedVideo={selectedVideo}
                closeVideoModal={closeVideoModal}
                modalRef={modalRef}
            />
        </div>
    );
}
