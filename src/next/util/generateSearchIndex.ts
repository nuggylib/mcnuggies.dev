/**
 * Script to generate the search index as a static JSON file during build time.
 * This should be run as part of the build process.
 */
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'

// Load environment variables from .env.local BEFORE any other imports
const envPath = path.join(process.cwd(), `.env.local`)
if (fs.existsSync(envPath)) {
  config({ path: envPath })
} else {
  // Fallback to regular .env
  config()
}

async function generateSearchIndex() {
  console.log(`Generating search index...`)

  // Import buildSearchIndex AFTER environment variables are loaded
  const { buildSearchIndex } = await import(`./buildSearchIndex`)
  const searchIndex = await buildSearchIndex()

  const outputPath = path.join(process.cwd(), `public`, `search-index.json`)

  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2))

  console.log(`Search index generated at ${outputPath}`)
  console.log(`Total items: ${searchIndex.articles.length} articles, ${searchIndex.projects.length} projects, ${searchIndex.creators.length} creators`)
}

generateSearchIndex().catch(error => {
  console.error(`Error generating search index:`, error)
  process.exit(1)
})
