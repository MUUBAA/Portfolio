'use client';

import { useState } from 'react';
import { Sparkles, Loader2, Check, X } from 'lucide-react';
import { suggestAlternativeContent } from '@/ai/flows/suggest-alternative-content';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type AiSuggestionProps = {
  originalContent: string;
  as?: React.ElementType;
  className?: string;
};

export function AiSuggestion({ originalContent, as: Component = 'span', className }: AiSuggestionProps) {
  const [content, setContent] = useState(originalContent);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { toast } = useToast();

  const handleSuggest = async () => {
    // If popover is already open for this component, do nothing. Let onOpenChange handle closing.
    if (popoverOpen) return;

    setIsLoading(true);
    try {
      const result = await suggestAlternativeContent({ originalContent: content });
      setSuggestion(result.suggestedContent);
      setPopoverOpen(true);
    } catch (error) {
      console.error('AI suggestion failed:', error);
      toast({
        title: 'AI Suggestion Failed',
        description: 'Could not fetch a suggestion at this time.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = () => {
    if (suggestion) {
      setContent(suggestion);
    }
    setPopoverOpen(false);
  };

  const handleDiscard = () => {
    setPopoverOpen(false);
  };

  return (
    <div className="group relative flex items-center gap-4">
      <Component className={cn(className)}>{content}</Component>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSuggest}
            disabled={isLoading}
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            aria-label="Get AI suggestion"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4 text-primary" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" side="top" align="start">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">AI Suggestion</h4>
              <p className="text-sm text-muted-foreground">{suggestion || 'Loading...'}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAccept} size="sm" className="w-full">
                <Check className="mr-2 h-4 w-4" /> Accept
              </Button>
              <Button onClick={handleDiscard} size="sm" variant="outline" className="w-full">
                <X className="mr-2 h-4 w-4" /> Discard
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
