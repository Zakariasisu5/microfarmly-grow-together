
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { MapPin, Clock, Wifi, Coffee } from 'lucide-react';

const KioskLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: "Green Bean Cafe",
      address: "123 Main St, Downtown",
      status: "Active",
      amenities: ["WiFi", "Seating", "Coffee"],
      hours: "6 AM - 8 PM",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: "Urban Workspace",
      address: "456 Innovation Blvd, Tech District",
      status: "Active",
      amenities: ["WiFi", "Parking", "24/7 Access"],
      hours: "24/7",
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: 3,
      name: "Community Center",
      address: "789 Oak Ave, Midtown",
      status: "Active",
      amenities: ["Parking", "Events Space"],
      hours: "8 AM - 6 PM",
      coordinates: { lat: 40.7505, lng: -73.9934 }
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "WiFi":
        return <Wifi className="h-4 w-4" />;
      case "Coffee":
        return <Coffee className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-green-800 mb-4">Kiosk Locations</h1>
            <p className="text-xl text-gray-600">Find a MicroFarmly kiosk near you</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
              </div>
            </div>

            {/* Locations List */}
            <div className="space-y-4">
              {locations.map((location) => (
                <Card 
                  key={location.id} 
                  className={`cursor-pointer transition-all ${
                    selectedLocation === location.id 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-green-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-green-700">{location.name}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        {location.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {location.address}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {location.hours}
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        {location.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
                            {getAmenityIcon(amenity)}
                            <span className="ml-1">{amenity}</span>
                          </div>
                        ))}
                      </div>
                      {selectedLocation === location.id && (
                        <div className="mt-4">
                          <Button className="w-full bg-green-600 hover:bg-green-700">
                            Select This Location
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskLocations;
