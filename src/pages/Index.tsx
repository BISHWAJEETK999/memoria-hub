import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WaveBackground } from '@/components/WaveBackground';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, FileText, Sparkles, Star, Users } from 'lucide-react';
import heroImage from '@/assets/memory-hero-bg.jpg';
import memoryIcons from '@/assets/memory-icons.jpg';

export default function Index() {
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
            <p className="text-muted-foreground font-inter">Loading your digital sanctuary...</p>
          </div>
        </div>
      </WaveBackground>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-glow/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Memoria Hub
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-delay">
              <Sparkles className="h-6 w-6 text-primary animate-glow" />
              <p className="text-xl md:text-2xl text-muted-foreground font-playfair italic">
                Your Digital Memory Palace
              </p>
              <Sparkles className="h-6 w-6 text-primary animate-glow" />
            </div>
          </div>
          
          <div className="animate-fade-in-delay">
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your thoughts into lasting memories. Create, organize, and cherish your digital notes 
              in a sanctuary designed for your mind's most precious moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 font-medium"
                onClick={() => window.location.href = '/auth'}
              >
                <Brain className="mr-2 h-5 w-5" />
                Begin Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5 font-medium"
              >
                <FileText className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
              Why Choose Memoria Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of simplicity and power in your personal knowledge sanctuary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Intelligent Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Your thoughts, beautifully organized. Smart categorization and instant search make finding your memories effortless.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Your memories are sacred. Advanced encryption and secure authentication keep your thoughts protected and private.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Seamless Sync</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Access your thoughts anywhere, anytime. Real-time synchronization across all your devices keeps you connected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Capture thoughts at the speed of thinking. Instant note creation and blazing-fast performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Elegance meets functionality. A distraction-free interface that inspires creativity and focus.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">Personal Sanctuary</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Your digital memory palace. A personal space where every thought finds its perfect home.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Ready to Build Your Digital Memory Palace?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their note-taking experience. Start your journey towards organized thoughts and cherished memories.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 font-medium"
              onClick={() => window.location.href = '/auth'}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating Memories
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free to start • No credit card required • Your memories, your sanctuary
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-playfair font-semibold">Memoria Hub</span>
          </div>
          <p className="text-muted-foreground">
            Crafted with ❤️ for those who value their thoughts and memories
          </p>
        </div>
      </footer>
    </div>
  );
}