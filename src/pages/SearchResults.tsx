import { useSearchParams, Link } from 'react-router-dom';
import { guideContent } from '@/data/guideContent';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search } from 'lucide-react';
import { useMemo } from 'react';

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const matches: Array<{
      section: typeof guideContent[0];
      subsection?: NonNullable<typeof guideContent[0]['subsections']>[0];
      matchType: 'title' | 'content' | 'description';
    }> = [];

    guideContent.forEach((section) => {
      // Check section title and description
      if (
        section.title.toLowerCase().includes(lowerQuery) ||
        section.description.toLowerCase().includes(lowerQuery)
      ) {
        matches.push({
          section,
          matchType: 'title',
        });
      }

      // Check subsections
      section.subsections?.forEach((subsection) => {
        if (
          subsection.title.toLowerCase().includes(lowerQuery) ||
          subsection.content.toLowerCase().includes(lowerQuery)
        ) {
          matches.push({
            section,
            subsection,
            matchType: subsection.title.toLowerCase().includes(lowerQuery) ? 'title' : 'content',
          });
        }
      });
    });

    return matches;
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <h1 className="text-3xl font-bold">Search Results</h1>
        </div>
        <p className="text-muted-foreground">
          {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>

      {results.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No results found</CardTitle>
            <CardDescription>
              Try searching with different keywords or browse the guide sections.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-4">
          {results.map((result, index) => {
            const url = result.subsection
              ? `/guide/${result.section.id}/${result.subsection.id}`
              : `/guide/${result.section.id}`;

            const title = result.subsection?.title || result.section.title;
            const description = result.subsection?.content || result.section.description;

            return (
              <Link key={index} to={url}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-primary mb-1">
                          {result.section.title}
                          {result.subsection && ` > ${result.subsection.title}`}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {title}
                        </CardTitle>
                        <CardDescription className="mt-2 line-clamp-2">
                          {description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
