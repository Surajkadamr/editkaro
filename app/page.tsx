'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
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
    const portfolioItems = [
        {
            id: 1,
            title: 'Dynamic Football Highlights',
            category: 'Football Edits',
            thumbnail: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Fast-paced football highlights with dynamic transitions and effects.',
        },
        {
            id: 2,
            title: 'Product Showcase',
            category: 'eCommerce Ads',
            thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Sleek product showcase with professional lighting and animations.',
        },
        {
            id: 3,
            title: 'Gaming Montage',
            category: 'Gaming Videos',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Action-packed gaming highlights with synchronized audio effects.',
        },
        {
            id: 4,
            title: 'Short Social Media Clip',
            category: 'Short-form Videos',
            thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Engaging short-form content optimized for social media platforms.',
        },
        {
            id: 5,
            title: 'Wildlife Documentary',
            category: 'Documentary Style',
            thumbnail: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description:
                'Cinematic documentary footage with professional narration and sound design.',
        },
        {
            id: 6,
            title: 'Anime Trailer',
            category: 'Anime Videos',
            thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Stylized anime trailer with custom effects and transitions.',
        },
        {
            id: 7,
            title: 'Brand Commercial',
            category: 'Ads',
            thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description:
                'Professional commercial with compelling storytelling and brand messaging.',
        },
        {
            id: 8,
            title: 'Cinematic Color Grade',
            category: 'Color Grading',
            thumbnail: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Showcase of color grading techniques for cinematic visual appeal.',
        },
        {
            id: 9,
            title: 'Feature Film Excerpt',
            category: 'Long-form Videos',
            thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
            videoUrl: 'https://www.youtube.com/embed/5O0YDHiosD0',
            description: 'Excerpt from a feature-length production with professional editing.',
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(portfolioItems);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const modalRef = useRef(null);

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
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedVideo(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsMenuOpen(false);
    };

    // Open video modal
    const openVideoModal = (item) => {
        setSelectedVideo(item);
        document.body.style.overflow = 'hidden';
    };

    // Close video modal
    const closeVideoModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
            data-oid="y-xuvr6"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800"
                data-oid="vr5p1r-"
            >
                <div
                    className="container mx-auto px-4 py-4 flex justify-between items-center"
                    data-oid="n_ec8kn"
                >
                    <div className="flex items-center" data-oid="6zd9i1:">
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                            data-oid="m6pxle5"
                        >
                            Editkaro.in
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6" data-oid="j0sw_he">
                        <a
                            href="#portfolio"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="too3iq5"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#services"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="7gs6jr2"
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="sph9t64"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="p_.u0.t"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        data-oid="lyymznh"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="o.3pv7c"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                data-oid="b27pi1:"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900 py-4" data-oid="qn6umrd">
                        <div
                            className="container mx-auto px-4 flex flex-col space-y-3"
                            data-oid="lvdqp62"
                        >
                            <a
                                href="#portfolio"
                                className="hover:text-purple-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                data-oid="o9bgxx0"
                            >
                                Portfolio
                            </a>
                            <a
                                href="#services"
                                className="hover:text-purple-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                data-oid="49tajuu"
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="hover:text-purple-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                data-oid=":5hpj81"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-purple-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                data-oid="b.xyqr0"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section
                className={`relative h-[80vh] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                data-oid="g63bhca"
            >
                <div className="absolute inset-0 z-0" data-oid="658lwcx">
                    <div
                        className="absolute inset-0 bg-black/70 z-10 left-[1280px] top-[270px]"
                        data-oid="frxlnkw"
                    ></div>
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-oid="zqtf6bq"
                    >
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-editing-a-video-in-a-studio-22886-large.mp4"
                            type="video/mp4"
                            data-oid="qkzit4b"
                        />
                    </video>
                </div>

                <div className="container mx-auto px-4 z-20 text-center" data-oid="tw_bkk8">
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        data-oid="vd-b_.u"
                    >
                        <span className="block" data-oid="jm1yesy">
                            Transforming Ideas Into
                        </span>
                        <span
                            className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                            data-oid="lvcpvuo"
                        >
                            Visual Masterpieces
                        </span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        data-oid="jnqlci9"
                    >
                        Professional video editing and social media marketing services that elevate
                        your brand's presence
                    </p>
                    <div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        data-oid="y-c.ppv"
                    >
                        <a
                            href="#portfolio"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                            data-oid="zmqoeao"
                        >
                            View Our Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
                            data-oid="z-i9qq_"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 container mx-auto px-4" data-oid=":7vownv">
                <div className="text-center mb-12" data-oid="uwrzh88">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="_u5io0k">
                        Our Portfolio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto" data-oid="k:8w11y">
                        Explore our diverse range of video editing projects across multiple
                        categories and styles
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-12" data-oid="sj1f9rd">
                    <div
                        className="hidden md:flex flex-wrap justify-center gap-3 mb-8"
                        data-oid="7f076pa"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-full transition-all ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                }`}
                                data-oid="qy4luix"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Category Dropdown */}
                    <div className="md:hidden mb-8" data-oid="1pdw.bi">
                        <select
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            data-oid="fpx1626"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category} data-oid="dd1p.ru">
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="5cvg0t_"
                >
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2"
                            data-oid=":nq34t."
                        >
                            <div className="relative overflow-hidden" data-oid="ip5.i8p">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-oid="r1z-2t-"
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                                    data-oid="hfidvw1"
                                >
                                    <div className="p-4 w-full" data-oid="c914g7o">
                                        <button
                                            onClick={() => openVideoModal(item)}
                                            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform"
                                            data-oid="-c41-vm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid=":rwz8xx"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                    clipRule="evenodd"
                                                    data-oid="7m82sh8"
                                                />
                                            </svg>
                                            Play Video
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5" data-oid="y7783zc">
                                <div
                                    className="flex justify-between items-start mb-2"
                                    data-oid="a1::2vl"
                                >
                                    <h3 className="text-xl font-semibold" data-oid="xmkmvs3">
                                        {item.title}
                                    </h3>
                                    <span
                                        className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300"
                                        data-oid="hysr:xa"
                                    >
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm" data-oid="j_f:mnn">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-900" data-oid="krg.wwp">
                <div className="container mx-auto px-4" data-oid="u8e5v2z">
                    <div className="text-center mb-16" data-oid="b3.nfsh">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="gj44z90">
                            Our Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="z8_pxq8">
                            Professional video editing and marketing solutions tailored to your
                            specific needs
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid=":vg_b-c"
                    >
                        {/* Service 1 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid="kl7an94"
                        >
                            <div
                                className="w-14 h-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid=":qbl6eh"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-purple-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ja45m7b"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        data-oid="674r_kc"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="3yjxhev">
                                Video Editing
                            </h3>
                            <p className="text-gray-400" data-oid="o4x3k83">
                                Professional editing for all types of content including short-form,
                                long-form, gaming, and documentary style videos.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid="dzx5-8l"
                        >
                            <div
                                className="w-14 h-14 bg-pink-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid="n:ntyg6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="pyj:c75"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                        data-oid="nbyxu:_"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="t5vcmwa">
                                Color Grading
                            </h3>
                            <p className="text-gray-400" data-oid="bypffw8">
                                Enhance the visual appeal of your videos with professional color
                                grading and correction techniques.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid="a8d8ki_"
                        >
                            <div
                                className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid="xh2kf0m"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-blue-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="437o.na"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                        data-oid="eci30._"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="9ysxt3n">
                                Motion Graphics
                            </h3>
                            <p className="text-gray-400" data-oid="yx222uk">
                                Custom motion graphics and animations to make your videos more
                                engaging and professional.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid=":o0gf1z"
                        >
                            <div
                                className="w-14 h-14 bg-green-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid="r3wcms:"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="1t92.o0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        data-oid="4u97sde"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="1cd1zn-">
                                Social Media Marketing
                            </h3>
                            <p className="text-gray-400" data-oid="9ej34xq">
                                Strategic social media marketing to maximize the reach and impact of
                                your video content.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid="ic9joq6"
                        >
                            <div
                                className="w-14 h-14 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid="b3f.cch"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-yellow-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":-7ifok"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        data-oid="63:9w33"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="zx6oohq">
                                Commercial Production
                            </h3>
                            <p className="text-gray-400" data-oid="64jd69g">
                                Full-service commercial production for brands and businesses looking
                                to create impactful advertisements.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-800/80 transition-colors"
                            data-oid="8qc3wdl"
                        >
                            <div
                                className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-5"
                                data-oid="8piab65"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="j_64ipl"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        data-oid="f9vd1wg"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="yokmwus">
                                Mobile-Optimized Content
                            </h3>
                            <p className="text-gray-400" data-oid="t.bzy15">
                                Specialized editing for mobile platforms, ensuring your content
                                looks great on all devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 container mx-auto px-4" data-oid="m9cev65">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    data-oid="qhe4vwd"
                >
                    <div data-oid="2pr4pfl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="7yt0nhr">
                            About Editkaro.in
                        </h2>
                        <p className="text-gray-300 mb-6" data-oid="nzp79cb">
                            Editkaro.in is a premier video editing and social media marketing agency
                            dedicated to helping brands and creators tell their stories through
                            compelling visual content.
                        </p>
                        <p className="text-gray-300 mb-6" data-oid="nlf06k2">
                            With expertise across multiple video styles and formats, our team of
                            skilled editors and marketers work closely with clients to deliver
                            high-quality content that engages audiences and achieves business
                            objectives.
                        </p>
                        <p className="text-gray-300 mb-6" data-oid="dv4tbck">
                            Whether you need short-form videos for social media, long-form content
                            for YouTube, or professional commercials for your brand, we have the
                            skills and experience to bring your vision to life.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8" data-oid="1ldpc.g">
                            <div className="bg-gray-800 px-5 py-3 rounded-lg" data-oid="ke:j:0h">
                                <p
                                    className="text-2xl font-bold text-purple-400"
                                    data-oid="lms:bvw"
                                >
                                    500+
                                </p>
                                <p className="text-sm text-gray-400" data-oid="72zphhd">
                                    Projects Completed
                                </p>
                            </div>
                            <div className="bg-gray-800 px-5 py-3 rounded-lg" data-oid="ugpr:lq">
                                <p className="text-2xl font-bold text-pink-400" data-oid="912hsr9">
                                    50+
                                </p>
                                <p className="text-sm text-gray-400" data-oid="ncizeex">
                                    Happy Clients
                                </p>
                            </div>
                            <div className="bg-gray-800 px-5 py-3 rounded-lg" data-oid="65ut4is">
                                <p className="text-2xl font-bold text-blue-400" data-oid="21x0p1p">
                                    9
                                </p>
                                <p className="text-sm text-gray-400" data-oid="39d28zl">
                                    Video Categories
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative" data-oid="b-5k7h1">
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-30 blur-xl"
                            data-oid="q1meyjq"
                        ></div>
                        <div
                            className="relative bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                            data-oid="wydldin"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000"
                                alt="Video editing workspace"
                                className="w-full h-auto"
                                data-oid="20:ne5m"
                            />

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                                data-oid="24bjds_"
                            ></div>
                            <div className="absolute bottom-0 left-0 p-6" data-oid="l9l:alf">
                                <h3 className="text-xl font-bold mb-2" data-oid="fpxzirk">
                                    Our Editing Studio
                                </h3>
                                <p className="text-gray-300" data-oid="ulv_jpg">
                                    Where creativity meets technical excellence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900" data-oid="ue2okvh">
                <div className="container mx-auto px-4" data-oid="j747zb:">
                    <div className="text-center mb-12" data-oid="-rjotdr">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ogl6j0n">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto" data-oid="9-jw4_c">
                            Ready to take your video content to the next level? Contact us today to
                            discuss your project.
                        </p>
                    </div>

                    <div
                        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                        data-oid="tbyr8lx"
                    >
                        <div className="bg-gray-800 p-6 rounded-xl" data-oid="vfdnjap">
                            <h3 className="text-xl font-semibold mb-4" data-oid="hulw5d5">
                                Contact Information
                            </h3>
                            <div className="space-y-4" data-oid="b:x8hnw">
                                <div className="flex items-start gap-3" data-oid="tp:m31y">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-purple-400 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="kcwyzi5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="a-f7vpc"
                                        />
                                    </svg>
                                    <div data-oid="lc5xmom">
                                        <p className="text-sm text-gray-400" data-oid="vrkzn71">
                                            Email
                                        </p>
                                        <p className="text-white" data-oid="qtchhzw">
                                            contact@editkaro.in
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3" data-oid="2v.fnvt">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-purple-400 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="hj1v4ct"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="g_e4stp"
                                        />
                                    </svg>
                                    <div data-oid="sox725o">
                                        <p className="text-sm text-gray-400" data-oid="czeqtsh">
                                            Phone
                                        </p>
                                        <p className="text-white" data-oid="f5c0w8_">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3" data-oid="wns26lk">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-purple-400 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="v1bdoim"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="yx7n573"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="bhxw0ex"
                                        />
                                    </svg>
                                    <div data-oid="-jnhpky">
                                        <p className="text-sm text-gray-400" data-oid="-75:uvl">
                                            Location
                                        </p>
                                        <p className="text-white" data-oid="kj1r0_5">
                                            Mumbai, Maharashtra, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8" data-oid="07k_hsq">
                                <h4 className="text-lg font-medium mb-3" data-oid="wymn8q.">
                                    Follow Us
                                </h4>
                                <div className="flex gap-4" data-oid=".u9t::c">
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                                        data-oid="so9vmc6"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                            data-oid="l2zt1dk"
                                        >
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                data-oid="ygl9cp0"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                                        data-oid="1-hd4bm"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-youtube"
                                            viewBox="0 0 16 16"
                                            data-oid="d3:e1td"
                                        >
                                            <path
                                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                                data-oid="ra004m:"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                                        data-oid="eer7p-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-facebook"
                                            viewBox="0 0 16 16"
                                            data-oid="i9pg-d-"
                                        >
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                                data-oid="hpse66r"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                                        data-oid="-n.e:tx"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-twitter"
                                            viewBox="0 0 16 16"
                                            data-oid="7ho6a7k"
                                        >
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                data-oid="ruyybqt"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl" data-oid="i53vvkd">
                            <h3 className="text-xl font-semibold mb-4" data-oid="febthus">
                                Send Us a Message
                            </h3>
                            <form className="space-y-4" data-oid="fsbclpj">
                                <div data-oid="nl4vdde">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-400 mb-1"
                                        data-oid="s5z6y9_"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Your name"
                                        data-oid="zwh3dhn"
                                    />
                                </div>
                                <div data-oid="_2xoo.q">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-400 mb-1"
                                        data-oid="uld:6c:"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Your email"
                                        data-oid="e.1.l9k"
                                    />
                                </div>
                                <div data-oid="30qjmw_">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-400 mb-1"
                                        data-oid="n_vgrnd"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Subject"
                                        data-oid="0zwlm08"
                                    />
                                </div>
                                <div data-oid="4nk_-bb">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-400 mb-1"
                                        data-oid="95i3ygo"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Your message"
                                        data-oid="dh-h_n1"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                                    data-oid="bwqah2c"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12" data-oid="..s1yd.">
                <div className="container mx-auto px-4" data-oid="1_:v4-q">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="vcwrl9-"
                    >
                        <div className="mb-6 md:mb-0" data-oid="59g_5uc">
                            <h2
                                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                                data-oid="nrzz:28"
                            >
                                Editkaro.in
                            </h2>
                            <p className="text-gray-400 mt-2" data-oid="yhitqi0">
                                Transforming Ideas Into Visual Masterpieces
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8" data-oid="zc2z9w2">
                            <div data-oid="zq0:ioe">
                                <h4 className="text-lg font-medium mb-3" data-oid="6yf:ujg">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2 text-gray-400" data-oid="tz-xhe8">
                                    <li data-oid="uuaecah">
                                        <a
                                            href="#portfolio"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="-r3hfca"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                    <li data-oid=".l0e89s">
                                        <a
                                            href="#services"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="vmsj.c7"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li data-oid="84pl0_n">
                                        <a
                                            href="#about"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="evb4:13"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li data-oid="_:uockk">
                                        <a
                                            href="#contact"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="je1_sv6"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="_jjjiuc">
                                <h4 className="text-lg font-medium mb-3" data-oid="ravur0k">
                                    Services
                                </h4>
                                <ul className="space-y-2 text-gray-400" data-oid="2o:1:pq">
                                    <li data-oid="b4mel-c">
                                        <a
                                            href="#"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="nono52i"
                                        >
                                            Video Editing
                                        </a>
                                    </li>
                                    <li data-oid="llbzf.h">
                                        <a
                                            href="#"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="50k1-:4"
                                        >
                                            Color Grading
                                        </a>
                                    </li>
                                    <li data-oid="aaojoak">
                                        <a
                                            href="#"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="ygh52g6"
                                        >
                                            Motion Graphics
                                        </a>
                                    </li>
                                    <li data-oid="05m.r.-">
                                        <a
                                            href="#"
                                            className="hover:text-purple-400 transition-colors"
                                            data-oid="htug-vu"
                                        >
                                            Social Media Marketing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
                        data-oid="am46:f4"
                    >
                        <p data-oid="j0l2w0r">
                            &copy; {new Date().getFullYear()} Editkaro.in. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    data-oid="q:eh8rm"
                >
                    <div
                        ref={modalRef}
                        className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
                        data-oid=":bb6xtu"
                    >
                        <div className="relative pt-[56.25%]" data-oid="yba09q:">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={selectedVideo.videoUrl}
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                data-oid="i63jx9-"
                            ></iframe>
                        </div>
                        <div className="p-6" data-oid="-.fl2c_">
                            <div
                                className="flex justify-between items-start mb-4"
                                data-oid="i0dx:7u"
                            >
                                <div data-oid="_f4h9-a">
                                    <h3 className="text-xl font-semibold" data-oid="aesqrg5">
                                        {selectedVideo.title}
                                    </h3>
                                    <p className="text-gray-400" data-oid="ijdpp1_">
                                        {selectedVideo.description}
                                    </p>
                                </div>
                                <button
                                    onClick={closeVideoModal}
                                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                                    data-oid="cdwoqvd"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="xfr46s_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="5bd4wm:"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
