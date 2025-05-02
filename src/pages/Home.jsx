import React from 'react'

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center px-8 text-white">
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-black/60 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Coach on the pitch"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 text-shadow-lg/20">Iddris Gausu</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Head Coach – Ashiaman Future Leaders FC</h2>

                    <p className="text-xl md:text-2xl italic mb-8">"Building Champions on and off the Field"</p>

                    <div className="max-w-2xl mx-auto mb-8">
                        <p className="text-lg text-shadow-sm">
                            With over 15 years of coaching experience at youth and professional levels,
                            I'm dedicated to developing young athletes into skilled players and outstanding individuals.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/resume.pdf"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            View My Resume
                        </a>
                        <a
                            href="#contact"
                            className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl text-indigo-500 text-shadow-sm md:text-4xl font-bold text-center mb-12">My Coaching Philosophy</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">Player Development</h3>
                            <p>Focus on technical skills, tactical awareness, and physical conditioning tailored to each player's potential.</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">Character Building</h3>
                            <p>Instilling discipline, teamwork, and sportsmanship that extends beyond the football pitch.</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">Winning Mindset</h3>
                            <p>Developing competitive players who understand that success comes from preparation and perseverance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-8 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl text-indigo-500 md:text-4xl font-bold text-center mb-12">My Experience</h2>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl text-indigo-500 font-bold mb-1">Ashiaman Future Leaders FC</h3>
                            <p className="text-gray-600 mb-2">Head Coach | 2018 - Present</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Led team to 3 regional championships</li>
                                <li>Developed 12 players who progressed to professional academies</li>
                                <li>Implemented modern training methodologies</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl text-indigo-500 font-bold mb-1">Teshie Unique FC</h3>
                            <p className="text-gray-600 mb-2">Assistant Coach | 2016     - 2018</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Specialized in all players training</li>
                                <li>Coordinated scouting for U14-U16 teams</li>
                                <li>Helped develop curriculum for youth development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl text-indigo-500 font-bold mb-1">King Faisail FC</h3>
                            <p className="text-gray-600 mb-2">Player  | 2010 - 2016</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Helped develop curriculum for youth development</li>
                                <li>Mid Fielder - Offensive and Deffensive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-8 bg-indigo-700 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Players & Parents Say</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-800 p-6 shadow-md/30 rounded-lg">
                            <p className="italic mb-4">"Coach Sabato transformed my son's approach to the game. His technical skills improved dramatically, but more importantly, he learned discipline and teamwork that helped him in school as well."</p>
                            <p className="font-bold">- Michael T., Parent</p>
                        </div>

                        <div className="bg-blue-800 p-6 shadow-md/30 rounded-lg">
                            <p className="italic mb-4">"The most impactful coach I've ever had. He sees potential you don't see in yourself and pushes you to reach it while making sure you understand the why behind every drill."</p>
                            <p className="font-bold">- Jamie L., Former Player (Now at Pro Academy)</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )
}

export default Home