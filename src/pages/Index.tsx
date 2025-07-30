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

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/10 font-inter relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary-glow/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--primary)_0%,_transparent_50%)] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_var(--accent)_0%,_transparent_50%)] opacity-40"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Image with Multiple Overlays */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[20s] hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-accent/20 to-primary/30"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/40 to-background/80"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary)_/_0.1)_50%,transparent_75%)]"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full animate-float opacity-60 blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-primary-glow to-accent rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-float opacity-50 blur-sm" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-7 h-7 bg-gradient-to-r from-accent to-primary-glow rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/5 w-5 h-5 bg-gradient-to-r from-primary-glow to-primary rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/5 right-1/5 w-3 h-3 bg-accent rounded-full animate-float opacity-70 blur-sm" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent drop-shadow-2xl animate-glow">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Memoria</span>
              {" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300 delay-100">Hub</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-delay">
              <Sparkles className="h-7 w-7 text-accent animate-pulse" />
              <p className="text-xl md:text-3xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent font-playfair italic font-bold animate-glow">
                Your Digital Memory Palace
              </p>
              <Sparkles className="h-7 w-7 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <div className="animate-fade-in-delay relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20 blur-xl"></div>
            <p className="relative text-lg md:text-xl bg-gradient-to-r from-foreground via-accent/80 to-foreground bg-clip-text text-transparent font-semibold mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
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
                className="text-lg px-8 py-6 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 font-medium transition-all duration-300"
                onClick={scrollToFeatures}
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
      <section id="features-section" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Why Choose Memoria Hub?
            </h2>
            <p className="text-xl text-foreground font-medium max-w-3xl mx-auto">
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
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Intelligent Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
                  Your thoughts, beautifully organized. Smart categorization and instant search make finding your memories effortless.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
                  Your memories are sacred. Advanced encryption and secure authentication keep your thoughts protected and private.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Seamless Sync</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
                  Access your thoughts anywhere, anytime. Real-time synchronization across all your devices keeps you connected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
                  Capture thoughts at the speed of thinking. Instant note creation and blazing-fast performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
                  Elegance meets functionality. A distraction-free interface that inspires creativity and focus.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-memory transition-all duration-300 border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit group-hover:animate-glow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl text-accent font-semibold">Personal Sanctuary</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed text-foreground/90 font-medium">
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent">
              Ready to Build Your Digital Memory Palace?
            </h2>
            <p className="text-xl text-foreground font-medium mb-8 max-w-2xl mx-auto">
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