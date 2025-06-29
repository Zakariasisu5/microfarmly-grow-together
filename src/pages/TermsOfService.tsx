
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-1">Last updated: December 29, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-green-200">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using MicroFarmly's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                MicroFarmly provides automated micro-farming kiosk services that grow and distribute fresh microgreens to subscribers. Our service includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Smart kiosk-based micro-farming technology</li>
                <li>Subscription-based fresh microgreen delivery</li>
                <li>Mobile application for service management</li>
                <li>Customer support and maintenance services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscription Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Billing and Payment</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Subscriptions are billed weekly in advance</li>
                    <li>Payment is automatically charged to your chosen payment method</li>
                    <li>You must maintain valid payment information</li>
                    <li>Failed payments may result in service suspension</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Cancellation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>You may cancel your subscription at any time</li>
                    <li>Cancellation takes effect at the end of your current billing period</li>
                    <li>No refunds for partial billing periods</li>
                    <li>Outstanding harvests remain available for pickup</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">As a user of our service, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete account information</li>
                <li>Pick up your harvests within the specified time window</li>
                <li>Use kiosks responsibly and report any technical issues</li>
                <li>Not share your account access credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect kiosk locations and surrounding property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quality Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide fresh, high-quality microgreens. Our quality commitment includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fresh microgreens grown in controlled environments</li>
                <li>Regular quality monitoring and maintenance</li>
                <li>Replacement or credit for quality issues reported within 24 hours</li>
                <li>Clear harvest-ready notifications to ensure optimal freshness</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                MicroFarmly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive for 99% uptime, we cannot guarantee uninterrupted service. Kiosk maintenance, weather conditions, or technical issues may temporarily affect service availability. We will provide advance notice when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of our service are owned by MicroFarmly and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will be conducted in San Francisco, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant changes via email and app notifications. Continued use of our service after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: legal@microfarmly.com</p>
                <p>Phone: (555) 123-FARM</p>
                <p>Address: 123 Green Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
