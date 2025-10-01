# `stories/` Directory

This directory contains Storybook Story files for the files in the `pages/` directory. This is necessary because Next.js scans this directory _before_ we have a chance to filter out the Story files from the build. As a result, Next.js will attempt to process Story files located in the `pages/` directory as additional pages in your application. Since they are not structured as a a Page is expected to be structured, this causes build errors.

Component-based Story files DO NOT belong in this directory. Those files can, and should, exist along side the component they are written for.
