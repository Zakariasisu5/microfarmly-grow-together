
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Check, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Subscription = () => {
  const { toast } = useToast();

  const handleSubscribe = (plan: string, price: string) => {
    toast({
      title: "Subscription Started",
      description: `You've selected the ${plan} plan for ${price}/week. Redirecting to payment...`,
    });
    // Here you would typically integrate with a payment processor like Stripe
    console.log(`Subscribing to ${plan} plan at ${price}/week`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-green-800 mb-4">Start Growing Today</h1>
            <p className="text-xl text-gray-600">Choose your microgreens subscription plan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Starter</CardTitle>
                <CardDescription>Perfect for individuals</CardDescription>
                <div className="text-3xl font-bold text-green-600">$15<span className="text-lg text-gray-600">/week</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />2 microgreen varieties</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Weekly harvest notifications</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />1 pickup location</li>
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleSubscribe('Starter', '$15')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 ring-2 ring-green-300">
              <CardHeader>
                <CardTitle className="text-green-700">Family</CardTitle>
                <CardDescription>Best value for families</CardDescription>
                <div className="text-3xl font-bold text-green-600">$35<span className="text-lg text-gray-600">/week</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />5 microgreen varieties</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Twice weekly harvests</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />3 pickup locations</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Priority notifications</li>
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleSubscribe('Family', '$35')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Community</CardTitle>
                <CardDescription>For communities & offices</CardDescription>
                <div className="text-3xl font-bold text-green-600">$75<span className="text-lg text-gray-600">/week</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />10+ microgreen varieties</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Daily harvest availability</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Unlimited pickup locations</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Custom growing requests</li>
                </ul>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleSubscribe('Community', '$75')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
