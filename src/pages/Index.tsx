
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Leaf, Users, Smartphone, Brain, MapPin, Bell, Zap, Shield, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="h-16 w-16 text-green-600 mr-4" />
            <h1 className="text-5xl font-bold text-green-800">MicroFarmly</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered hyperlocal farming platform. Fresh microgreens grown right next to you - 
            in cafes, coworking spaces, and urban communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Start Growing Today
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
              View Kiosk Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Grow Together, Eat Fresher
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-green-700">For Consumers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Subscribe to fresh microgreens, choose pickup locations, get harvest notifications, 
                  and scan QR codes to claim your produce.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-blue-700">Kiosk Operators</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Monitor farming kiosks, view sensor data, control lights and pumps remotely, 
                  and receive AI-powered harvest predictions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-purple-700">AI-Powered</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Real-time sensor tracking, predictive harvest algorithms, automated alerts, 
                  and IoT integration for optimal growing conditions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Built with Modern Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Hyperlocal</h3>
              <p className="text-sm text-gray-600">Grow and consume within walking distance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Bell className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Real-time</h3>
              <p className="text-sm text-gray-600">Live sensor data and instant notifications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-10 w-10 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Automated</h3>
              <p className="text-sm text-gray-600">Smart irrigation and lighting systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Sustainable</h3>
              <p className="text-sm text-gray-600">Eco-friendly vertical farming methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Globe className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Join the Urban Farming Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your community with sustainable, AI-powered micro-farming kiosks. 
            Fresh produce, grown locally, consumed responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3">
              Install a Kiosk
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700 px-8 py-3">
              Start Subscription
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold">MicroFarmly</h3>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered hyperlocal farming platform for sustainable urban agriculture.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2024 MicroFarmly. All rights reserved. Built with ❤️ for sustainable urban farming.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
