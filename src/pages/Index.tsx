import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WaveBackground } from '@/components/WaveBackground';
import { useAuth } from '@/hooks/useAuth';
import { FileText, Users, Shield, Zap } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();

  // Redirect to dashboard if already authenticated
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  if (loading) {
    return (
      <WaveBackground>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </WaveBackground>
    );
  }

  return (
    <WaveBackground>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Memoria Hub</span>
          </div>
          <Link to="/auth">
            <Button variant="auth">Get Started</Button>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your digital
            <span className="text-primary block">memory palace</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capture, organize, and access your thoughts instantly. Memoria Hub makes note-taking 
            effortless with a beautiful, secure, and intuitive interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="auth" size="lg" className="w-full sm:w-auto">
                Start Taking Notes
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Create and edit notes instantly with our optimized interface.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your notes are encrypted and only accessible by you.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Intuitive design that gets out of your way and lets you focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WaveBackground>
  );
};

export default Index;
