import { Link, useParams } from 'react-router-dom';
import { ScrollArea } from './ui/scroll-area';
import { guideContent } from '@/data/guideContent';
import { useProgress } from '@/hooks/useProgress';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { sectionId } = useParams();
  const { isCompleted } = useProgress();
  const [expandedSections, setExpandedSections] = useState<string[]>([sectionId || '']);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : <Circle className="h-5 w-5" />;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => {}}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-16 bottom-0 z-40 w-64 bg-card border-r transition-transform duration-300 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <ScrollArea className="h-full py-6 px-4">
          <nav className="space-y-2">
            {guideContent.map((section) => {
              const isExpanded = expandedSections.includes(section.id);
              const hasSubsections = section.subsections && section.subsections.length > 0;

              return (
                <div key={section.id} className="space-y-1">
                  <div
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-accent transition-colors',
                      sectionId === section.id && 'bg-accent'
                    )}
                    onClick={() => hasSubsections && toggleSection(section.id)}
                  >
                    {hasSubsections && (
                      <ChevronRight
                        className={cn(
                          'h-4 w-4 transition-transform',
                          isExpanded && 'rotate-90'
                        )}
                      />
                    )}
                    <Link
                      to={`/guide/${section.id}`}
                      className="flex items-center gap-2 flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getIcon(section.icon)}
                      <span className="text-sm font-medium">{section.title}</span>
                    </Link>
                  </div>

                  {isExpanded && hasSubsections && (
                    <div className="ml-9 space-y-1">
                      {section.subsections!.map((subsection) => (
                        <Link
                          key={subsection.id}
                          to={`/guide/${section.id}/${subsection.id}`}
                          className={cn(
                            'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-accent transition-colors',
                            isCompleted(subsection.id) && 'text-primary'
                          )}
                        >
                          {isCompleted(subsection.id) ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Circle className="h-4 w-4" />
                          )}
                          <span>{subsection.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
