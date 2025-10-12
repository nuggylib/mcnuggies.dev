# src/next

This directory contains the Next.js application code for mcnuggies.dev; this is the core code for the entire site.

## Directory Structure

```
next/           # Next.js frontend application
├── components/ # React components organized by feature
├── pages/      # Next.js pages and API routes
├── styles/     # SASS stylesheets
├── redux/      # Redux store and slices
├── sanity/     # Sanity client configuration
└── types/      # TypeScript type definitions
```

## Development Notes

- The Sanity Types in `src/next/types/sanity.ts` are generated using the `generateSchemaTypes` script.
