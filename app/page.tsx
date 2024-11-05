'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Linkedin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import GEORGETOWN from '../public/GEORGETOWN.png'
import HS from '../public/hs.jpg'

export default function NusantaraRealEstate() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  const pages = ['home', 'about', 'projects', 'contact']

  const heroContent = {
    home: {
      title: "Transforming Healthcare Real Estate",
      subtitle: "Bridging institutional money with private developers and medical operators",
      image: "../public/building.mp4"
    },
    about: {
      title: "Our Story",
      subtitle: "Pioneering healthcare real estate solutions in Malaysia",
      image: "/placeholder.svg?height=600&width=1200&text=About+Hero+Image"
    },
    projects: {
      title: "Our Portfolio",
      subtitle: "Innovative healthcare facilities across Malaysia",
      image: "/placeholder.svg?height=600&width=1200&text=Projects+Hero+Image"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's discuss your healthcare real estate needs",
      image: "/placeholder.svg?height=600&width=1200&text=Contact+Hero+Image"
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [activePage])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/*<Image src="/placeholder.svg?height=50&width=50" alt="Nusantara Real Estate Logo" width={50} height={50} className="mr-2" />*/}
            <h1 className="text-2xl font-bold text-gray-800">Nusantara Real Estate</h1>
          </div>
          <nav className="hidden lg:flex items-center">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page)
                  setIsVisible(false)
                }}
                className={`py-2 px-4 text-lg capitalize ${activePage === page ? 'text-blue-800 font-semibold' : 'text-gray-600'} hover:bg-gray-100 rounded-md transition-colors`}
              >
                {page}
              </button>
            ))}
          </nav>
          <button onClick={toggleNav} className="lg:hidden">
            {isNavOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden bg-white shadow-md transition-all duration-300 fixed w-full z-20 top-16 ${isNavOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <div className="container mx-auto px-4 py-2 flex flex-col">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => {
                setActivePage(page)
                setIsNavOpen(false)
                setIsVisible(false)
              }}
              className={`py-2 px-4 text-lg capitalize ${activePage === page ? 'text-blue-800 font-semibold' : 'text-gray-600'} hover:bg-gray-100 rounded-md transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={true}
          muted
          loop={true}
          playsInline
        >
          <source src='https://videos.pexels.com/video-files/3586173/3586173-hd_1920_1080_25fps.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h2
              className={`text-white text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {heroContent[activePage].title}
            </h2>
            <p
              className={`text-white text-xl md:text-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {heroContent[activePage].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {activePage === 'home' && (
          <div className="space-y-16">
            <section>
              <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">Our Curated Real Estate
                Solutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "For Institutional Investors", content: "We provide access to rare and direct investment opportunities with long-term secured income in the tightly-held healthcare sector." },
                  { title: "For Healthcare Operators", content: "We provide solutions for business expansion utilising an asset light strategy to mitigate development risk and free up capital." },
                  { title: "For Real Estate Developers", content: "We provide opportunities to participate in build-to-suit developments to activate idle assets and add value to master development projects." },
                  { title: "For Private Equity Real Estate", content: "We provide deal-sourcing solutions for assets poised for capital growth and help structure the exit strategy." }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative">
                      <Image src={HS} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Featured Listings</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Georgetown, Penang", beds: 150, size: "RM400 mil" },
                  { title: "Shah Alam", beds: 120, size: "RM300 mil" },
                  { title: "Melaka", beds: 140, size: "RM26 mil" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative">
                      <Image src={GEORGETOWN} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h4>
                      <p className="mb-2">Beds: {item.beds}</p>
                      <p className="mb-4">Size: {item.size}</p>
                      <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Learn More</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button onClick={() => setActivePage('projects')} className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg flex items-center mx-auto">
                  View All Projects
                  <ArrowRight className="ml-2" />
                </button>
              </div>
            </section>
          </div>
        )}

        {activePage === 'about' && (
          <div className="space-y-16">
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Nusantara Real Estate</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="mb-4">Nusantara Real Estate was founded in 2023 by Muzaffar Bahir, who recognized the immense untapped potential of the Malaysian healthcare real estate sector and how more hospitals and other medical facilities were urgently required to alleviate an overburdened healthcare system.</p>
                  <p className="mb-4">While working on big-ticket real estate deals in virtually every other sector, Muzaffar realised that healthcare real estate as an asset class was largely overlooked in Malaysia and that by pairing institutional money with private developers and medical operators, a pipeline of modern facilities could quickly be developed to meet the people's needs while at the same time providing a long-term and secure income source for investors.</p>
                  <p>Nusantara Real Estate currently manages sale mandates for some RM1.5 billion (and growing) worth of medical-related real estate assets covering hospitals, specialist centres, aged-care facilities and development land earmarked for healthcare purposes.</p>
                </div>
                <div className="md:w-1/2">
                  <Image src={GEORGETOWN} alt="Nusantara Real Estate Office" width={600} height={400} className="rounded-lg" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">The Light That Guides Us</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Integrity + Professionalism", content: "As consultants, our integrity and professionalism are of utmost importance to us. We therefore hold ourselves to the highest standards in the real estate industry; adhering to ethical business practices, maintaining transparency and upholding a robust code of conduct." },
                  { title: "ESG", content: "Our dedication to ESG aligns with our mission to not only excel in real estate services but also to contribute to a sustainable and equitable future where all Malaysians will have easier access to world-class medical care and services." },
                  { title: "Emerging Asset Class", content: "We aspire to be a visionary force by staying ahead of industry trends & megatrends to provide seamless and modern real estate solutions to the clients and communities we serve." },
                  { title: "Exit-Centric", content: "We continuously keep pace with the capital markets and alternative financial instruments to curate exit strategies for our Clients." }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative">
                      <Image src={GEORGETOWN} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-6 flex-grow">
                      <h4 className="text-xl font-semibold mb-2 text-blue-800">{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Core Team</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "Muzaffar Bahir", role: "Managing Director", description: "Muzaffar has 20 years of professional experience in the real estate industry. Most of his career has been in agency practice, with multiple secondments in valuation, research and property management." },
                  { name: "James Goh", role: "Director, Investments", description: "James has 25 years of professional experience in the real estate industry where he has focused primarily on high-value capital market deals." },
                  { name: "Afiza Abdul Halin", role: "Head, ESG & Continuous Improvements", description: "Afiza has 18 years of professional experience in Multi-National Corporations providing IT solutions." },
                  { name: "Hafizah Adnan", role: "Head, Legal & Compliance", description: "Hafizah has 22 years of professional experience as a lawyer, where she practised mainly in real estate, banking & finance (conventional & Islamic) law." }
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative">
                      <Image src={GEORGETOWN} alt={member.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-6 flex-grow">
                      <h4 className="text-xl font-semibold mb-2 text-center text-blue-800">{member.name}</h4>
                      <p className="font-semibold text-center mb-4 text-gray-600">{member.role}</p>
                      <p className="text-center">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activePage === 'projects' && (
          <div className="space-y-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Current Instructions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { location: "Georgetown, Penang", description: "Prime healthcare & hospitality mixed development. Our mandate is to secure an operator and manage the forward sale exercise.", ticketSize: "Circa RM400  mil", beds: 150 },
                { location: "Kemaman, Terengganu", description: "Hospital development part of 35 acres commercial mixed development. We are mandated to secure an operator  and manage the forward sale exercise.", ticketSize: "Circa RM180 mil", beds: 103 },
                { location: "Shah Alam", description: "Hospital development on part of a 23 acre residential development. Our mandate is to first secure an operator and subsequently manage the forward sale exercise.", ticketSize: "Circa RM300 mil", beds: 120 },
                { location: "Melaka", description: "Hospital development site close to PLUS Melaka Interchange. We are mandated to manage the sale exercise of the land.", ticketSize: "Circa RM26 mil", beds: 140 },
                { location: "Shah Alam", description: "Hospital development site in one of the prime commercial district of a planned township. We are mandated to manage the forward sale.", ticketSize: "Circa RM280 mil", beds: 105 }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-48 relative">
                    <Image src={HS} alt={project.location} layout="fill" objectFit="cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.location}</h3>
                    <p className="mb-4 flex-grow">{project.description}</p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                      <p><strong>Ticket Size:</strong> {project.ticketSize}</p>
                      <p><strong>No of Beds:</strong> {project.beds}</p>
                    </div>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors self-start mt-auto">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'contact' && (
          <div className="space-y-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Get in touch with us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Contact Form</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
                </form>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Our Team</h3>
                {[
                  { name: "Muzaffar Bahir (E2879)", role: "Managing Director", phone: "+6 019 945 4544", email: "muz@nusantara-re.com", linkedin: "www.linkedin.com/in/muzaffarbahir" },
                  { name: "James Goh (REN3908)", role: "Director, Investments", phone: "+6 017 277 6784", email: "james@nusantara-re.com", linkedin: "www.linkedin.com/in/jamesgoh" }
                ].map((contact, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="text-xl font-semibold mb-2 text-blue-800">{contact.name}</h4>
                    <p className="font-semibold mb-2 text-gray-600">{contact.role}</p>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Phone size={18} className="mr-2 text-blue-800" />
                        <p>{contact.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail size={18} className="mr-2 text-blue-800" />
                        <p>{contact.email}</p>
                      </div>
                      <div className="flex items-center">
                        <Linkedin size={18} className="mr-2 text-blue-800" />
                        <p>{contact.linkedin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Office</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Image src="/placeholder.svg?height=300&width=400" alt="Office Location" width={400} height={300} className="rounded-lg" />
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 mt-1 text-blue-800" />
                    <p>
                      Level 11, Menara KEN TTDI,<br />
                      No 37 Jalan Burhanuddin Helmi,<br />
                      60000 Kuala Lumpur,<br />
                      Malaysia
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-blue-800" />
                    <p>+6 03 2935 0033</p>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-blue-800" />
                    <p>hello@nusantara-re.com</p>
                  </div>
                  <div className="flex items-center">
                    <Linkedin size={18} className="mr-2 text-blue-800" />
                    <p>www.linkedin.com/company/nusantara-re</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <Image src="/placeholder.svg?height=50&width=50" alt="Nusantara Real Estate Logo" width={50} height={50} className="mb-4 mx-auto md:mx-0" />
              <p className="text-lg font-semibold">Nusantara Real Estate</p>
              <p>&copy; 2023 All rights reserved.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Projects</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="hover:underline">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">LinkedIn</a></li>
                  <li><a href="#" className="hover:underline">Twitter</a></li>
                  <li><a href="#" className="hover:underline">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
