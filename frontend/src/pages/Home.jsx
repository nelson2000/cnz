import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MapPin, Phone, User, Shield, Clock, Heart, Activity } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import mockData from '../utils/mockData';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    careType: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCareTypeChange = (value) => {
    setFormData({ ...formData, careType: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon to discuss your care needs.",
    });
    setFormData({ fullName: '', email: '', phone: '', zip: '', careType: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i0.wp.com/www.helpinghandsrch.com/wp-content/uploads/2023/12/cropped-images-1-65836aebea726.webp?fit=512%2C512&ssl=1" 
              alt="Helping Hands Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">HELPING HANDS</h1>
              <p className="text-xs text-teal-600">RESIDENTIAL CARE HOME</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-teal-600 font-medium hover:text-teal-700 transition">HOME</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition">ABOUT</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition">SERVICES</a>
            <a href="#virtual-tour" className="text-gray-700 hover:text-teal-600 transition">VIRTUAL TOUR</a>
            <a href="#blog" className="text-gray-700 hover:text-teal-600 transition">BLOG</a>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">CONTACT US</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=1600')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        </div>
        
        {/* Decorative Sky Blue Elements */}
        <div className="absolute top-20 left-1/4 text-sky-400 text-8xl font-bold opacity-30 animate-pulse">1</div>
        <div className="absolute top-32 left-1/3 text-sky-400 text-6xl font-bold opacity-40">2</div>
        <div className="absolute top-48 left-[38%] text-sky-400 text-9xl font-bold opacity-30 animate-pulse">3</div>
        <div className="absolute top-64 left-[35%] w-1 h-96 bg-sky-400 opacity-40 transform -rotate-12"></div>
        <div className="absolute bottom-32 left-[20%] w-32 h-1 bg-sky-400 opacity-50"></div>
        <div className="absolute bottom-20 left-[15%] w-48 h-2 bg-sky-400 opacity-40 rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              You can't always be there.
              <br />
              <span className="text-sky-400">But we can.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
                CONTACT US
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-6 text-lg">
                REQUEST AN APPOINTMENT
              </Button>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                name="fullName"
                placeholder="FULL NAME" 
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
              <Input 
                name="email"
                type="email"
                placeholder="YOUR EMAIL" 
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-50"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  name="phone"
                  placeholder="PHONE" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-50"
                />
                <Input 
                  name="zip"
                  placeholder="ZIP" 
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="bg-gray-50"
                />
              </div>
              <Select onValueChange={handleCareTypeChange} value={formData.careType}>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="SELECT TYPE OF CARE" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daycare">Daycare</SelectItem>
                  <SelectItem value="longterm">Longterm care</SelectItem>
                  <SelectItem value="respite">Respite Care</SelectItem>
                  <SelectItem value="tour">Schedule Tour</SelectItem>
                  <SelectItem value="specialized">Specialized Care</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg">
                REQUEST A CALLBACK
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-sky-600 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center space-x-2 text-white">
          <MapPin className="h-5 w-5" />
          <span className="font-medium">HELPING HANDS RESIDENTIAL HOME CARE</span>
        </div>
      </section>

      {/* Transition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="h-1 w-20 bg-teal-500 mb-4"></div>
              <h3 className="text-4xl font-bold text-teal-700 mb-4">
                Experience a Smooth and Stress-Free Transition with Us
              </h3>
              <p className="text-gray-700 text-lg">
                Helping Hands Residential Care Home provides various programs with adaptable schedules and affordable service rates.
              </p>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg mt-6 md:mt-0">
              VIEW CARE SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1765896387387-0538bc9f997e?w=1600')`,
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-teal-700 mb-12">
            Personalized 24/7 Residential Care for Your Loved Ones
          </h3>
          
          <Tabs defaultValue="why" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="why" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white py-4">
                Why Helping Hands?
              </TabsTrigger>
              <TabsTrigger value="offer" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white py-4">
                What We Offer
              </TabsTrigger>
              <TabsTrigger value="start" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white py-4">
                How to start your care?
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="why" className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our Care program empowers you or your loved one to maintain a personalized schedule, ensuring our availability whenever you require assistance. We tailor custom plans to our clients based on a 24-hour day, which is adjusted following our free assessment.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our solutions are not only cost-effective but also deliver the utmost value to our clients by offering assistance precisely when it's needed.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                View Care Services
              </Button>
            </TabsContent>
            
            <TabsContent value="offer" className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-teal-700 mb-4">PROGRAMS & SERVICES</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We provide our residents with compassionate support for daily tasks, including personal hygiene, medication management, dressing, and mobility. Additionally, we offer oversight and coordination of healthcare needs, including doctor appointments, follow-up care, and a range of other health services.
                  </p>
                  <h4 className="text-2xl font-bold text-teal-700 mb-4">ENTERTAINMENT & ACTIVITIES</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We promote an active lifestyle for our residents, offering scheduled activities such as music and art programs, game nights, movie screenings, guided exercises, and leisurely pastimes throughout the week.
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1762955911769-d652ceaa94bb?w=800" 
                  alt="Social activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="start" className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                If you seek a comprehensive and cost-effective alternative to any facility, daily home care is the ideal choice for you. The emotional toll that comes with relocating from the familiarity and comfort of home frequently results in physical decline, a further loss of independence, and a reduced quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                  Request an Appointment
                </Button>
                <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3">
                  Call Us: (888) 814-7117
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-4"></div>
            <h3 className="text-4xl font-bold text-teal-700 mb-4">
              Why choose Helping Hands Residential Care Home?
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We are committed to being your shoulder to lean on and providing honest advice for your loved one's situation during this delicate time.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-6">
              READ TESTIMONIALS
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${feature.bgGradient} p-8 text-white h-full`}>
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-4"></div>
            <h3 className="text-4xl font-bold text-teal-700 mb-4">
              Our client satisfaction rate is unparalleled in our field.
            </h3>
            <p className="text-gray-700 text-lg">
              Read below what our clients have to say and learn more about what makes us the premier provider of senior care.
            </p>
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white mt-6">
              write review
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h5 className="font-bold text-gray-800">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Copyright © 2023 - Helping Hands Residential Care Home. All rights reserved.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <h6 className="font-semibold text-white mb-2">Related Pages:</h6>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-teal-400 transition">Adult Day Care</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Virtual Tour</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Respite Home Care</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-teal-400 transition">Long Term Care Port Saint Lucie</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Assisted Living</a></li>
                <li><a href="#" className="hover:text-teal-400 transition">Services</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-white mb-2">Keywords:</h6>
              <p className="text-xs">helping hand home care, assisted home care, residential care, respite care, adult day care, assisted living</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;