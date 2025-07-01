import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AIChat from "@/components/AIChat";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Header */}
      <div className="bg-white border-b border-green-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
              <p className="text-gray-600 mt-1">Find answers to common questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Contact */}
        <Card className="mb-8 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
              Need immediate help?
            </CardTitle>
            <CardDescription>
              Contact our support team for personalized assistance or chat with our AI assistant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </Link>
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-FARM
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Sections */}
        <div className="space-y-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="how-it-works">
                  <AccordionTrigger>How does MicroFarmly work?</AccordionTrigger>
                  <AccordionContent>
                    MicroFarmly uses smart kiosks equipped with AI-powered sensors to grow fresh microgreens automatically. You subscribe to a plan, and we notify you when your crops are ready for pickup at your chosen location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="first-harvest">
                  <AccordionTrigger>When will I get my first harvest?</AccordionTrigger>
                  <AccordionContent>
                    Most microgreens are ready within 7-14 days of planting. You'll receive a notification via email and our mobile app when your harvest is ready for pickup.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="find-kiosk">
                  <AccordionTrigger>How do I find a kiosk near me?</AccordionTrigger>
                  <AccordionContent>
                    Use our kiosk locator map on the homepage or in our mobile app. You can filter by location, availability, and crop types to find the most convenient option.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>Subscriptions & Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="change-plan">
                  <AccordionTrigger>Can I change or cancel my subscription?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade, downgrade, or cancel your subscription at any time through your account dashboard. Changes take effect from the next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="billing">
                  <AccordionTrigger>When am I billed?</AccordionTrigger>
                  <AccordionContent>
                    Billing occurs weekly for all plans. Your first charge happens when you sign up, and subsequent charges occur on the same day each week.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="refunds">
                  <AccordionTrigger>What's your refund policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer full refunds within 7 days of your first harvest. For quality issues, we provide credits or replacements. Contact support for specific situations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>Pickup & Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="pickup-process">
                  <AccordionTrigger>How do I pick up my harvest?</AccordionTrigger>
                  <AccordionContent>
                    When your harvest is ready, you'll receive a QR code via email and app notification. Simply scan this code at the kiosk to unlock your fresh microgreens compartment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pickup-window">
                  <AccordionTrigger>How long do I have to pick up my harvest?</AccordionTrigger>
                  <AccordionContent>
                    You have 48 hours from the ready notification to pick up your harvest for optimal freshness. After this period, we may need to compost the greens and provide a replacement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="quality-guarantee">
                  <AccordionTrigger>What if my microgreens don't meet quality standards?</AccordionTrigger>
                  <AccordionContent>
                    We guarantee fresh, high-quality microgreens. If you're not satisfied, contact us within 24 hours of pickup for a replacement or credit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add AI Chat Component */}
      <AIChat />
    </div>
  );
};

export default HelpCenter;
