'use server';

/**
 * @fileOverview AI flow for suggesting alternative or enhanced content for key textual elements of a website.
 *
 * - suggestAlternativeContent - A function that suggests alternative content for a given text.
 * - SuggestAlternativeContentInput - The input type for the suggestAlternativeContent function.
 * - SuggestAlternativeContentOutput - The return type for the suggestAlternativeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAlternativeContentInputSchema = z.object({
  originalContent: z.string().describe('The original content to be improved or varied.'),
});
export type SuggestAlternativeContentInput = z.infer<typeof SuggestAlternativeContentInputSchema>;

const SuggestAlternativeContentOutputSchema = z.object({
  suggestedContent: z.string().describe('The AI suggested alternative content.'),
});
export type SuggestAlternativeContentOutput = z.infer<typeof SuggestAlternativeContentOutputSchema>;

export async function suggestAlternativeContent(
  input: SuggestAlternativeContentInput
): Promise<SuggestAlternativeContentOutput> {
  return suggestAlternativeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAlternativeContentPrompt',
  input: {schema: SuggestAlternativeContentInputSchema},
  output: {schema: SuggestAlternativeContentOutputSchema},
  prompt: `You are an AI content enhancer. Given the original content, suggest an alternative that is more engaging and semantically rich.\n\nOriginal Content: {{{originalContent}}}\n\nSuggested Content:`,
});

const suggestAlternativeContentFlow = ai.defineFlow(
  {
    name: 'suggestAlternativeContentFlow',
    inputSchema: SuggestAlternativeContentInputSchema,
    outputSchema: SuggestAlternativeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {suggestedContent: output!.suggestedContent};
  }
);
