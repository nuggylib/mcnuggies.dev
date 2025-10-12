# src/next

This directory contains the Next.js application code for mcnuggies.dev; this is the core code for the entire site.

## Directory Structure

```
next/           # Next.js frontend application
├── components/ # React components organized by feature
├── github/     # GitHub client configuration files
├── hooks/      # Custom React hooks
├── pages/      # Next.js pages and API routes
├── public/     # Site-public assets, such as icons, images and the favicon
├── redux/      # Redux store and slices
├── sanity/     # Sanity client configuration
├── stories/    # Storybook Story files for root pages ONLY (components defined in the pages/ directory)
├── styles/     # SASS stylesheets
├── types/      # TypeScript type definitions
└── util/       # Miscellaneous helper and script files
```

## Development Notes

- The Sanity Types in `src/next/types/sanity.ts` are generated using the `generateSchemaTypes` script.
