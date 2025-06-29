
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowDown, ArrowUp, Calendar, Heart, Leaf, MapPin, Monitor, Phone, Settings, Sprout, Star, Users, Zap } from "lucide-react";

const Index = () => {
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    message: ''
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    plan: ''
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner inquiry:', partnerForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setPartnerForm({
      name: '',
      business: '',
      email: '',
      phone: '',
      location: '',
      type: '',
      message: ''
    });
  };

  const handleStartGrowing = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBecomePartner = () => {
    // Scroll to partner section
    document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = (plan: string) => {
    console.log('Selected plan:', plan);
    // Here you would typically redirect to a signup form or open a modal
    alert(`Starting ${plan} plan signup process...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                MicroFarmly
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#partners" className="text-gray-700 hover:text-green-600 transition-colors">Partners</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <Button 
                onClick={handleStartGrowing}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-radial"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              🌱 Smart Agriculture Revolution
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Grow Fresh,{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Eat Local
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary micro-farming kiosks that bring fresh, locally-grown microgreens to your neighborhood. 
              Sustainable, automated, and always fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleStartGrowing}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 text-lg"
              >
                Start Growing Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleBecomePartner}
                className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Become a Partner
              </Button>
            </div>
          </div>
          
          {/* Floating illustration */}
          <div className="mt-16 relative">
            <div className="animate-float">
              <Card className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm border-green-200 shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sprout className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Smart Growing</h3>
                      <p className="text-sm text-gray-600">AI-powered automation ensures optimal growth conditions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Local Access</h3>
                      <p className="text-sm text-gray-600">Find kiosks in your neighborhood for easy pickup</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Always Fresh</h3>
                      <p className="text-sm text-gray-600">Harvest-to-table freshness guaranteed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How MicroFarmly Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From seed to harvest, our smart kiosks handle everything automatically
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-200">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plant & Monitor</h3>
              <p className="text-gray-600">AI-powered sensors monitor soil, light, and water conditions 24/7</p>
              <ArrowDown className="w-6 h-6 text-green-500 mx-auto mt-4 md:hidden" />
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-200">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Growing</h3>
              <p className="text-gray-600">Automated watering and LED lighting optimize growth cycles</p>
              <ArrowDown className="w-6 h-6 text-emerald-500 mx-auto mt-4 md:hidden" />
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-200">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Harvest</h3>
              <p className="text-gray-600">Get notified when your microgreens are perfectly ripe</p>
              <ArrowDown className="w-6 h-6 text-green-500 mx-auto mt-4 md:hidden" />
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-200">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Pickup</h3>
              <p className="text-gray-600">Scan your QR code at the kiosk for instant fresh harvest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible subscription options to fit your fresh food needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900">Starter</CardTitle>
                <CardDescription className="text-gray-600">Perfect for individuals</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$15</span>
                  <span className="text-gray-600">/week</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>2 harvest containers</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Weekly pickup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic microgreens mix</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Mobile app access</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleGetStarted('Starter')}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-400 relative shadow-lg scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900">Family</CardTitle>
                <CardDescription className="text-gray-600">Best for families & small groups</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$28</span>
                  <span className="text-gray-600">/week</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>4 harvest containers</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Bi-weekly pickup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium microgreens variety</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom crop requests</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleGetStarted('Family')}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900">Business</CardTitle>
                <CardDescription className="text-gray-600">For restaurants & cafes</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$75</span>
                  <span className="text-gray-600">/week</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>12 harvest containers</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Daily pickup available</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Chef-selected varieties</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Bulk pricing discounts</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleGetStarted('Business')}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Inquiry */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-600">
              Bring fresh, local microgreens to your community with a MicroFarmly kiosk
            </p>
          </div>
          
          <Card className="shadow-xl border-green-200">
            <CardContent className="p-8">
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({...partnerForm, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business">Business Name</Label>
                    <Input
                      id="business"
                      value={partnerForm.business}
                      onChange={(e) => setPartnerForm({...partnerForm, business: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={partnerForm.location}
                      onChange={(e) => setPartnerForm({...partnerForm, location: e.target.value})}
                      placeholder="City, State"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Business Type</Label>
                    <Select onValueChange={(value) => setPartnerForm({...partnerForm, type: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="cafe">Cafe</SelectItem>
                        <SelectItem value="grocery">Grocery Store</SelectItem>
                        <SelectItem value="office">Office Building</SelectItem>
                        <SelectItem value="community">Community Center</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your interest</Label>
                  <Textarea
                    id="message"
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your location, foot traffic, and why you'd like to partner with MicroFarmly..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-3">
                  Submit Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MicroFarmly?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary technology meets sustainable farming
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Monitor className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Growth</h3>
                <p className="text-gray-600">Machine learning optimizes growing conditions for maximum yield and quality.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficient</h3>
                <p className="text-gray-600">LED grow lights and smart sensors minimize energy consumption.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Control</h3>
                <p className="text-gray-600">Monitor your crops and manage subscriptions from your smartphone.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-600">Building stronger local food systems in neighborhoods everywhere.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Automated</h3>
                <p className="text-gray-600">From planting to harvest, our kiosks handle everything automatically.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Consistent, high-quality microgreens with optimal nutrition density.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">MicroFarmly</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionary micro-farming technology bringing fresh, sustainable food to communities everywhere.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">📧 hello@microfarmly.com</p>
                <p className="text-gray-400">📱 (555) 123-FARM</p>
                <p className="text-gray-400">📍 San Francisco, CA</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors">Pricing</a></li>
                <li><a href="#partners" className="text-gray-400 hover:text-green-400 transition-colors">Partners</a></li>
                <li><Link to="/help" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-400 hover:text-green-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 MicroFarmly. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
