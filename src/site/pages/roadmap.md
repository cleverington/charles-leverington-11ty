---
title: Roadmap of Planned Changes
metaDescription: This is the initial Roadmap of planned changes and how this portolio app for Charles Leverington will be built.
date: 2022-10-25T00:00:00.000Z
permalink: /about/roadmap/index.html
eleventyNavigation:
  key: Roadmap
  order: 1
---
## Background

There's a lot of thought, background, features, and functionality that have spurned the idea of creating this 'Portfolio App' (from scratch, mind).

I've got a _lot_ of skills across a broad range of venues from Front-End, Back-End, Front of the Back-End, Back of the Front-End, DevOps/TechOps, CI/CD Integrations, Server maintenance, Business Analysis, Quality Assurance....  The list goes on.

By building this app, I'll have **one** single 'source' which can be quickly filtered to focus on (and search) skills that might be important to someone.  (Which also means a good way of combating object permanence issues by creating my lists! ^-^)

## Phase 1 | The Build

The focus of Phase 1 is going to be setup-and-prep.  I may not even _publish_ Phase 1, outside of the default Netlify link that exists.

Features to add Include:
- The initial 11ty + Netlify Build.
- Setting up Content Types within Netlify:
  - Pages | Default 'pages' content type.
  - Posts | Default 'posts' content type.
  - Showcase:
    - This c-type _might_ be split up between "Recipes", "Showcase", and "Advice".
    - The primary goal of this c-type is data-points which can be fed into a filter page (with Accessible modal) that can be quickly sorted across a range of "Types", searched by "Tags", and further sorted by "Category".
  - Taxonomy: Category | A c-type managed taxonomy that I'll be leveraing Netlify's [Relation](https://www.netlifycms.org/docs/widgets/#relation) and [List](https://www.netlifycms.org/docs/widgets/#relation) Widget's to take advantage of.
- Adding Bootstrap 5, because why put out effort to custom theme it? I've got _other_ things that can showcase my CSS/JS skills.
- Creating the initial "Page Builder" tooling (by, again, abusing the [List](https://www.netlifycms.org/docs/widgets/#relation) Widget).
- Adding Components to the "Page Builder" tooling for the 'Page' and 'Posts' c-types. MAYBE not the 'Showcase'.  Probably will add it to the 'Category' c-type, as the focus **of** the 'Category' c-type is a pseudo-glossary which **also** doubles as a Knowledge Base on my skills.
- Updating the 'Taxonomy: Category' c-type (building it _plain_, to start) to include things like "Proficiency", "References", etc.

## Phase 2 | The Content

Here's where I'll be taking the _long slog_ to add in all the various skills, update the pages, etc. in order to truly showcase my various skillsets across the various industries.

Other things that _might_ get added in Phase 2:
- Twitter/Facebook/LinkedIn/etc. integrations.
- Proof-of-Concept adding a WP Backend for some data (and real-time showing how to 'hybrid' the Headless).

### Content Item: Timeline

This will, eventually, replace the 'About Me' page with a javascript/jQuery based timeline of dates and data-points throughout my career.  Hopefully with colors showcasing different _stages_ of the career.

### Content Item: Filters

This will be the main focal point of the Portfolio App:  Creating a _usable_ filter-based system for showcasing and adding notes / thoughts on the huge amount of skills, abilities, knowledge, digital tools, etc. that I've used, been exposed to, loved, hated, etc. through the last two decades and a handful of years.
