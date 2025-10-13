# src/studio

This directory contains the Sanity Studio code for mcnuggies.dev. Sanity is a highly-flexible Content Management System (CMS) that allows the developer to host and maintain their own "Studio", where all content management operations occur. The Studio can be interacted with locally and in the hosted version.

## Directory Structure

```
schemas/                # Contains the developer-defined project schema
    └── documents/      # Contains the individual schema definition files (one per file)
static/                 # Contains static resources for the Sanity studio (available at the `/static` endpoint)
```

## Development Notes

- Objects are "schema-less".
  - Because of this, you can publish fields to objects that haven't been pushed to production.
    - This leads to an "unrecognized field" error, if viewed in production (can be ignored).
- Publishing content DOES modify data in the dataset, even if new fields only exist locally.
