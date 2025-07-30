import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { NoteCard } from '@/components/NoteCard';
import { WaveBackground } from '@/components/WaveBackground';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Plus, LogOut, FileText, User } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface Profile {
  full_name: string;
  email: string;
}

export default function Dashboard() {
  const { user, signOut, loading: authLoading } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchNotes();
    }
  }, [user]);

  // Redirect if not authenticated
  if (!authLoading && !user) {
    return <Navigate to="/auth" replace />;
  }

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, email')
        .eq('id', user?.id)
        .maybeSingle();

      if (error) throw error;
      setProfile(data);
    } catch (error: any) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user?.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch notes. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCreateNote = async () => {
    if (!newTitle.trim()) {
      toast({
        title: "Title Required",
        description: "Please enter a title for your note.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('notes')
        .insert({
          user_id: user?.id,
          title: newTitle.trim(),
          content: newContent.trim(),
        });

      if (error) throw error;

      setNewTitle('');
      setNewContent('');
      setIsCreating(false);
      fetchNotes();
      toast({
        title: "Note Created",
        description: "Your new note has been created successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to create note. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (authLoading) {
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
      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FileText className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">Memoria Hub</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{profile?.full_name || user?.email}</span>
              </div>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Welcome Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Welcome back, {profile?.full_name || 'User'}!</CardTitle>
              <CardDescription>
                You have {notes.length} note{notes.length !== 1 ? 's' : ''} in your collection.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Create Note Section */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Create New Note</CardTitle>
                <Button
                  variant="default"
                  onClick={() => setIsCreating(!isCreating)}
                >
                  <Plus className="h-4 w-4" />
                  New Note
                </Button>
              </div>
            </CardHeader>
            
            {isCreating && (
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Note title..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="font-semibold"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Write your note..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    onClick={handleCreateNote}
                    disabled={loading}
                  >
                    Create Note
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsCreating(false);
                      setNewTitle('');
                      setNewContent('');
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Notes Grid */}
          {notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onNoteUpdated={fetchNotes}
                />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notes yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start by creating your first note to capture your thoughts and ideas.
                </p>
                <Button
                  variant="default"
                  onClick={() => setIsCreating(true)}
                >
                  <Plus className="h-4 w-4" />
                  Create Your First Note
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </WaveBackground>
  );
}