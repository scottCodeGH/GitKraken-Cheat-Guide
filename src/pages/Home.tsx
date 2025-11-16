import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { guideContent } from '@/data/guideContent';
import * as Icons from 'lucide-react';
import { ArrowRight, BookOpen, Zap } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';

export function Home() {
  const { progress } = useProgress();

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null;
  };

  const totalSubsections = guideContent.reduce((acc, section) => {
    return acc + (section.subsections?.length || 0);
  }, 0);

  const completionPercentage = Math.round(
    (progress.completedSections.length / totalSubsections) * 100
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-3xl">GK</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Master GitKraken
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive guide to the legendary Git GUI client. Learn everything from basics to advanced workflows.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link to="/guide/getting-started">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          {progress.lastVisited && (
            <Button asChild variant="outline" size="lg">
              <Link to={`/guide/${progress.lastVisited}`}>
                Continue Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Progress Card */}
      {progress.completedSections.length > 0 && (
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Your Progress
            </CardTitle>
            <CardDescription>
              Keep up the great work! You've completed {progress.completedSections.length} of {totalSubsections} lessons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{completionPercentage}% Complete</span>
                <span className="text-muted-foreground">
                  {progress.completedSections.length}/{totalSubsections}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Guide Sections */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Learning Path</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guideContent.map((section) => (
            <Link key={section.id} to={`/guide/${section.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {getIcon(section.icon)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{section.subsections?.length || 0} lessons</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-6 md:grid-cols-3 pt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Interactive Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Step-by-step guides with practical examples and tips from real-world workflows.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Track Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Mark lessons as complete and bookmark important sections for quick reference.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Keyboard Shortcuts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn essential shortcuts to speed up your workflow across all platforms.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
