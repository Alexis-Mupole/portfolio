
import { GoogleGenAI } from "@google/genai";

export const getDigitalAdvice = async (userQuery: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    Tu es Alexis Mupole Uwizeye, informaticien et développeur web expert des solutions numériques en Afrique (RDC et Ouganda).
    Ton style est professionnel, pragmatique et pédagogue.
    Tu conseilles des entreprises, des ONG et des particuliers sur leur transformation digitale.
    Tes réponses doivent toujours tenir compte des réalités locales :
    - Connexions internet limitées/instables.
    - Électricité intermittente.
    - Budgets serrés.
    - Personnel parfois peu formé.
    Propose des solutions comme des sites web légers, des outils hors ligne, des paiements mobiles (M-Pesa, Orange Money) et des outils open-source.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de conseil pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la consultation de votre conseiller digital.";
  }
};
