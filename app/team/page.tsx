import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team - Helpers Hub',
  description: 'Meet the dedicated professionals behind Helpers Hub.',
}

export default function TeamPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      bio: 'With 15+ years of experience in community care, Sarah leads our mission with passion and dedication.',
      icon: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Director of Programs',
      bio: 'Michael oversees all our service programs, ensuring quality and impact in every initiative.',
      icon: '👨‍💼',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach Manager',
      bio: 'Emily builds meaningful connections with our community and coordinates volunteer efforts.',
      icon: '👩‍🤝‍👨',
    },
    {
      name: 'David Thompson',
      role: 'Healthcare Coordinator',
      bio: 'David ensures our healthcare services meet the highest standards of care and compassion.',
      icon: '👨‍⚕️',
    },
    {
      name: 'Lisa Martinez',
      role: 'Education Program Lead',
      bio: 'Lisa develops innovative educational programs that empower individuals and families.',
      icon: '👩‍🏫',
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      bio: 'James ensures our operations run smoothly, supporting all our teams and initiatives.',
      icon: '👨‍💻',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-300">Dedicated professionals committed to making a difference</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team brings together diverse expertise and a shared commitment to serving our community with excellence and compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-orange font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Our Team?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Make an Impact',
                desc: 'Work with a team dedicated to creating meaningful change in our community.',
              },
              {
                title: 'Professional Growth',
                desc: 'Develop your skills and advance your career in a supportive environment.',
              },
              {
                title: 'Collaborative Culture',
                desc: 'Be part of a diverse team that values every voice and perspective.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-blue">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Joining Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We are always looking for passionate individuals to join our team. Check out our current openings and apply today.
          </p>
          <button className="bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition">
            View Careers
          </button>
        </div>
      </section>
    </div>
  )
}
