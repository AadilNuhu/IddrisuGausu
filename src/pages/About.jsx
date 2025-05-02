import React from 'react'
import coach from '../assets/coach.jfif'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'

const About = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Banner */}
            <div className="relative h-64 md:h-96 bg-gray-900 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Coach on the field"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">About Coach</h1>
                    <p className="text-xl md:text-2xl text-indigo-300">My Journey in Football</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                {/* Coaching Journey */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img
                                src={coach}
                                alt="Young coach starting out"
                                className="rounded-lg shadow-xl w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">My Coaching Journey</h2>
                            <div className="prose max-w-none">
                                <p className="text-lg mb-4">
                                    My love for football began as a young player in the streets of Lagos, where the beautiful game was more than just a sport—it was a way of life. After playing competitively through university, injuries cut my playing career short, but my passion for the game only grew stronger.
                                </p>
                                <p className="text-lg mb-4">
                                    I began coaching youth teams while completing my education, discovering a natural ability to teach and inspire young players. What started as volunteer work with local clubs evolved into a professional coaching career that has now spanned over 15 years across three continents.
                                </p>
                                <p className="text-lg">
                                    Today, I'm proud to lead the Ashiama Future Leaders FC program, where we develop not just footballers, but well-rounded individuals prepared for success on and off the pitch.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coaching Philosophy */}
                <section className="mb-20 bg-white p-8 md:p-12 rounded-xl shadow-md">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-800">My Coaching Philosophy</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600">
                            <h3 className="text-xl font-bold mb-3">Tactical Mindset</h3>
                            <p>
                                I believe in adaptable, intelligent football. My teams learn multiple systems and develop the game intelligence to read situations and make smart decisions under pressure.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600">
                            <h3 className="text-xl font-bold mb-3">Player Development</h3>
                            <p>
                                Every player has unique potential. My approach combines technical mastery with position-specific training and individualized development plans.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600">
                            <h3 className="text-xl font-bold mb-3">Discipline & Character</h3>
                            <p>
                                Excellence requires discipline. We build habits of punctuality, preparation, and perseverance that translate to all areas of life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-800">Certifications & Education</h2>
                </section>

                <section style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                    padding: '20px'
                }}>
                    <img
                        src={c1}
                        alt=""
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                    <img
                        src={c3}
                        alt=""
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                    <img
                        src={c4}
                        alt=""
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                    <img
                        src={c2}
                        alt=""
                        style={{
                            width: '100%',
                            maxWidth: '250px',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                </section>


                {/* Personal Mission */}
                <section className="mb-20 bg-indigo-800 text-white p-8 md:p-12 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Personal Mission as a Coach</h2>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl mb-6">
                            "To develop players who excel technically, think tactically, and carry themselves with integrity. I measure success not just by trophies won, but by the lifelong impact we have on our players as people."
                        </p>
                        <p className="text-lg">
                            Football is more than a game—it's a vehicle for teaching life lessons about teamwork, perseverance, and excellence. My mission is to create an environment where young athletes can discover their potential, develop their character, and prepare for success in all their future endeavors.
                        </p>
                    </div>
                </section>

                {/* Testimonials */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-800">What Others Say</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                            <blockquote className="mb-4 italic text-lg">
                                "His attention to detail in player development is unmatched. I've seen average players transform into exceptional talents under his guidance."
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Coach Johnson"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">Coach Johnson</p>
                                    <p className="text-gray-600">Director, Regional Football Association</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                            <blockquote className="mb-4 italic text-lg">
                                "Coach changed my life. He saw potential in me that no one else did and taught me that discipline and hard work beat talent alone every time."
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/men/22.jpg"
                                    alt="David M."
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">David M.</p>
                                    <p className="text-gray-600">Former Player, Now Professional</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                            <blockquote className="mb-4 italic text-lg">
                                "The way he connects tactical understanding with player psychology is masterful. His teams are always prepared and adaptable."
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Sarah K."
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">Sarah K.</p>
                                    <p className="text-gray-600">Opposition Coach</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
                            <blockquote className="mb-4 italic text-lg">
                                "As a parent, I appreciate how he emphasizes education and character as much as football skills. My son has grown tremendously under his guidance."
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src="https://randomuser.me/api/portraits/women/63.jpg"
                                    alt="Amina B."
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">Amina B.</p>
                                    <p className="text-gray-600">Parent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default About