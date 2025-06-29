
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';
import { Leaf } from 'lucide-react';

const Auth: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <Leaf className="h-8 w-8 text-green-600 animate-spin mx-auto mb-2" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-10 w-10 text-green-600 mr-2" />
            <h1 className="text-3xl font-bold text-green-800">MicroFarmly</h1>
          </div>
          <p className="text-gray-600">Grow Together, Eat Fresher</p>
        </div>
        
        <AuthForm mode={mode} onToggleMode={toggleMode} />
      </div>
    </div>
  );
};

export default Auth;
