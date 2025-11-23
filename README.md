# New2Canada

A comprehensive web application designed to help newcomers and visitors navigate settling in Canada. Built with Next.js and powered by the Gemini API for intelligent chatbot assistance.

## 🇨🇦 About

New2Canada provides essential, government-sourced information for people moving to or visiting Canada. The application features:

- **Provincial Information**: Detailed guides for all 13 provinces and territories, including healthcare wait periods, winter tire laws, and driver's license requirements
- **User Segmentation**: Tailored content for Visitors, New Canadians (permanent residents/refugees), and General Information
- **AI Chatbot**: RAG-powered chatbot using Gemini API to answer questions about settling in Canada
- **Canadian Branding**: Red and white themed interface with authentic maple leaf iconography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Google AI Studio API key (for the chatbot feature)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new2canada
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```bash
GOOGLE_AI_STUDIO_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with custom Canadian color palette
- **AI/LLM**: Google Gemini API (`gemini-2.0-flash-exp`)
- **Embeddings**: `text-embedding-004`
- **Language**: TypeScript

## 📁 Project Structure

```
new2canada/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── provinces/
│   │   │   ├── page.tsx             # Province selection
│   │   │   └── [slug]/page.tsx      # Individual province pages
│   │   └── api/
│   │       └── chat/route.ts        # Chatbot API endpoint
│   ├── components/
│   │   ├── Header.tsx               # Sticky header with branding
│   │   ├── StickyFooter.tsx         # Mobile/desktop footer navigation
│   │   ├── CanadianFlagIcon.tsx     # Maple leaf icon component
│   │   └── SectionCard.tsx          # Reusable card component
│   └── lib/
│       └── gemini.ts                # Gemini API wrapper with rate limiting
├── content/
│   ├── healthcare.md                # Healthcare wait periods by province
│   ├── winter_tires.md              # Winter tire laws by province
│   └── drivers_license.md           # Driver's license information
└── public/
    ├── maple_leaf.svg               # Official Canadian maple leaf
    └── canadian_flag_hero.png       # Hero image
```

## 🤖 Chatbot Features

The AI chatbot is powered by Gemini API with:

- **RAG Architecture**: Retrieval-Augmented Generation for accurate, context-based responses
- **Rate Limiting**: Exponential backoff (2s → 4s → 8s) for 429 errors
- **Error Handling**: User-friendly messages when quota is exceeded
- **System Prompt**: Strictly uses retrieved context to ensure accuracy

## 🎨 Design Features

- **Canadian Color Palette**: 
  - `--color-canadian-red: #FF0000`
  - `--color-white: #FFFFFF`
  - `--color-text-primary: #333333`
- **Responsive Design**: Mobile-first approach with sticky footer navigation
- **Accessibility**: High contrast text and touch-friendly buttons
- **Authentic Branding**: Official Canadian maple leaf SVG from Wikimedia Commons

## 📊 Provincial Data

The application includes comprehensive data for all Canadian provinces and territories:

- Healthcare coverage wait periods for immigrants
- Winter tire laws and requirements
- Driver's license exchange information
- Special notes (e.g., Quebec language laws)

## 🧪 Testing

Run the build to verify everything works:
```bash
npm run build
```

Stress test the Gemini API:
```bash
npx tsx scripts/stress-test.ts
```

## 📝 License

This project is built for educational and informational purposes. All government information is sourced from official Canadian websites.

## 🙏 Acknowledgments

- Information sourced from [Canada.ca](https://www.canada.ca)
- Maple leaf icon from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Maple_Leaf.svg)
- Built with [Next.js](https://nextjs.org)
- Powered by [Google Gemini API](https://ai.google.dev)
