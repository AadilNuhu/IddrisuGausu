import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import team from '../assets/team.jpg'
import team1 from '../assets/team1.jpg'

const Service = () => {
  return (  
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Coach on the field"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Coaching Portfolio</h1>
          <p className="text-xl md:text-2xl text-blue-300">Professional Track Record & Methodology</p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Professional Experience</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="relative md:flex justify-between items-center">
              <div className="md:w-5/12 md:pr-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Ashiaman Future Leaders FC</h3>
                  <p className="text-gray-600 mb-3">Head Coach | 2018-Present</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>3x Regional Champions (2020-2022)</li>
                    <li>82% win rate over 4 seasons</li>
                    <li>Developed 12 players who turned professional</li>
                    <li>Implemented performance analytics program</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-2/12 text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  1
                </div>
              </div>
              <div className="md:w-5/12">
                <img 
                  src={team} 
                  alt="Elite U17 FC team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative md:flex justify-between items-center flex-row-reverse">
              <div className="md:w-5/12 md:pl-8 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-2">Teshie Unique FC</h3>
                  <p className="text-gray-600 mb-3">Assistant Coach | 2012-2018</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Scouted 8 future professional players</li>
                    <li>Designed goalkeeper training curriculum</li>
                    <li>75% of players progressed to higher levels</li>
                    <li>Pioneered mental resilience program</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-2/12 text-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  2
                </div>
              </div>
              <div className="md:w-5/12">
                <img 
                  src={team1} 
                  alt="unique fc"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>            
              
          </div>
        </div>

        {/* Player Development Highlights */}
        <div className="mt-20 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-800">Player Development Success Stories</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Player 1"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">David Johnson</h4>
                  <p className="text-sm text-gray-600">Professional Club Academy</p>
                </div>
              </div>
              <p>"Coach transformed my understanding of the game. His tactical sessions gave me the edge I needed to go pro."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Player 2"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Williams</h4>
                  <p className="text-sm text-gray-600">Division 1 College Scholarship</p>
                </div>
              </div>
              <p>"The individual development plan Coach created helped me earn a full scholarship to my dream school."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/55.jpg" 
                  alt="Player 3"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Brown</h4>
                  <p className="text-sm text-gray-600">National Youth Team Call-up</p>
                </div>
              </div>
              <p>"Coach's emphasis on mental toughness prepared me for the pressures of international football."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy Section */}
      <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Coaching Philosophy</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tactical Approach</h3>
              <div className="space-y-6">
                <div className="bg-blue-900 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Formation Preferences
                  </h4>
                  <p>Primary: 4-3-3 with high press and positional rotation. Secondary: 4-2-3-1 for more defensive stability. Adaptable to opponent weaknesses and player strengths.</p>
                </div>
                
                <div className="bg-blue-900 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Playing Style
                  </h4>
                  <p>Possession with purpose. High-intensity pressing when out of possession. Quick transitions. Emphasis on creating numerical advantages in key areas.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Development Philosophy</h3>
              <div className="space-y-6">
                <div className="bg-blue-900 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Long-term Development vs. Winning
                  </h4>
                  <p>While winning is important, player development always comes first. We focus on skills that will serve players throughout their careers, even if it means short-term tactical compromises.</p>
                </div>
                
                <div className="bg-blue-900 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Team Culture
                  </h4>
                  <p>Discipline, accountability, and mutual respect form our foundation. Players learn leadership through rotating captaincies and team decision-making opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Training Methodology</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Technical Sessions</h4>
                <p>Position-specific drills with game-realistic pressure. Video analysis for individual technique refinement.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Tactical Sessions</h4>
                <p>Small-sided games emphasizing decision-making. Walkthroughs of game situations with frequent Q&A.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Physical Preparation</h4>
                <p>Football-specific conditioning. Injury prevention programs tailored to growth stages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Gallery & Media</h2>
        
        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div>
            <img 
              src={p1} 
              alt="Match day"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src={p2} 
              alt="Team celebration"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src={p3} 
              alt="Training drill"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>      
      </section>
    </div>
  )
}

export default Service