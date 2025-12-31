import { User, Clock, Heart, Shield } from 'lucide-react';
import React from 'react';

const mockData = {
  features: [
    {
      title: 'Daily care experts',
      description: 'We specialize in around the clock care to help seniors live well at our facility.',
      icon: <User className="h-12 w-12" />,
      bgGradient: 'bg-gradient-to-br from-purple-600 to-purple-800'
    },
    {
      title: 'Available 24/7',
      description: 'We are available 24 hours a day to provide your loved one with the right care.',
      icon: <Clock className="h-12 w-12" />,
      bgGradient: 'bg-gradient-to-br from-pink-600 to-pink-800'
    },
    {
      title: 'Balanced care',
      description: 'Our unique approach to care promotes healthy mind, body and spirit.',
      icon: <Heart className="h-12 w-12" />,
      bgGradient: 'bg-gradient-to-br from-red-500 to-orange-600'
    },
    {
      title: 'security',
      description: 'Takes safety and security seriously to ensure the well-being and peace of mind of residents and their families.',
      icon: <Shield className="h-12 w-12" />,
      bgGradient: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    }
  ],
  testimonials: [
    {
      name: 'Shara M.',
      role: 'Caregiving daughter',
      quote: 'Your help and assistance in this challenging period is greatly appreciated. Our entire family extends our thanks for all you have done.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=200&h=200&fit=crop'
    },
    {
      name: 'Barbara S.',
      role: 'Family Member',
      quote: 'I am more than fully satisfied with the excellent service provided so carefully and so sincerely by each and every one.',
      image: 'https://images.unsplash.com/photo-1580869318757-a6c605b061ed?w=200&h=200&fit=crop'
    },
    {
      name: 'Habib M.',
      role: 'Son',
      quote: 'We are confident leaving mother in Helping Hands quality care! They deliver wonderful service with a personal touch!',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?w=200&h=200&fit=crop'
    }
  ],
  careTypes: [
    { value: 'daycare', label: 'Daycare' },
    { value: 'longterm', label: 'Longterm care' },
    { value: 'respite', label: 'Respite Care' },
    { value: 'tour', label: 'Schedule Tour' },
    { value: 'specialized', label: 'Specialized Care' }
  ]
};

export default mockData;