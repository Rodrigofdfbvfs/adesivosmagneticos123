'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating story captions based on a selected sticker.
 *
 * - generateStoryCaption - The main function to generate a story caption.
 * - GenerateStoryCaptionInput - The input type for the generateStoryCaption function.
 * - GenerateStoryCaptionOutput - The output type for the generateStoryCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryCaptionInputSchema = z.object({
  stickerDescription: z
    .string()
    .describe('A description of the sticker to generate a caption for.'),
});
export type GenerateStoryCaptionInput = z.infer<typeof GenerateStoryCaptionInputSchema>;

const GenerateStoryCaptionOutputSchema = z.object({
  caption: z.string().describe('A relevant caption or question for the story.'),
});
export type GenerateStoryCaptionOutput = z.infer<typeof GenerateStoryCaptionOutputSchema>;

export async function generateStoryCaption(input: GenerateStoryCaptionInput): Promise<GenerateStoryCaptionOutput> {
  return generateStoryCaptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoryCaptionPrompt',
  input: {schema: GenerateStoryCaptionInputSchema},
  output: {schema: GenerateStoryCaptionOutputSchema},
  prompt: `You are a social media expert. Generate a catchy and engaging caption or question to use with the following sticker on an Instagram story to boost engagement.  The caption should be less than 20 words.

Sticker Description: {{{stickerDescription}}}`,
});

const generateStoryCaptionFlow = ai.defineFlow(
  {
    name: 'generateStoryCaptionFlow',
    inputSchema: GenerateStoryCaptionInputSchema,
    outputSchema: GenerateStoryCaptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
