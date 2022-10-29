---
layout: layouts/home.njk
title: Home
metaDescription: The homepage for my small 11ty-based + Netlify + Netlify CMS flat-file microsite for showcasing skills, life events, and recipes.
date: 2022-10-15T00:00:00.000Z
permalink: /
eleventyNavigation:
  key: Home
  order: 0
---
^^^ container
## Running 'TODO' List

- [x] Set up SCSS theming (and Bootstrap).
- [x] Update `.eleventy.js` with SCSS changes (e.g.: Move everything into a `src/` folder to clean it up.)
- [x] Update Netlify CMS to use "Local" repo settings, instead of auto-publishing to a branch.
- [x] Add in Konami Code.
- [ ] Add a redirect to the "GitHub" Jekyll site, in order to unpublish it.
- [ ] Update content on the 'About' page.
- [x] Update 'Home' page.
- [x] Add `.editorconfig` file, with `.md` and `.njk` configs, so it auto-saves correctly.
- [ ] Update 'Contact' page.
- [ ] Finish 'Roadmap' page.
- [ ] Add first 'Showcase' post.
- :gear: Update `.nvmrc` from "12" to "16".
- [x] Update `_data/metadata.json` to actually have **MY** content (and any globals).
- [ ] Update existing 'Layouts' ( `_includes/layouts/` )
- [ ] Add new Layouts
  - [ ] Showcase
  - [ ] Taxonomy: Category
- [ ] Update existing 'Components' ( `_includes/components/` )
- [ ] Create 'Blocks' (and templates / layout) for 'Page Builder'.
- [ ] Create 'Showcase' homepage and initial content.
- [ ] Review and test converting from NunJucks.js to one of the [other available languages in 11ty](https://www.11ty.dev/docs/languages/).
^^^

## The Netlify + 11ty Build Kit

This sit was created using a template for building a simple blog website with the [Eleventy static site generator](https://www.11ty.dev), which has automated deployment to [Netlify](https://www.netlify.com).

- The one-click created site includes [Netlify CMS](https://www.netlifycms.org) for WYSIWYG content editing, and [Netlify Forms](https://www.netlify.com/docs/form-handling) for processing your form data.
- Though not built-in to the **kit**, AWS Lambda Functions are [baked into Netlify](https://www.netlify.com/products/functions/).  The site will (eventually) be updated to utilize these functions for, say, a custom 'TODO' list, which auto-updates to the Netlify CMS backend.

For more info on installation and usage of the original kit, view the [project repo](https://eleventy-netlify-boilerplate.netlify.app) on GitHub.

^^^ container
## Why Netlify?  Why 11ty?

::: row
### Why Netlify/11ty tl::dr

11ty style kits are _DEVELOPER_ friendly kits.  That said, nothing stopping you from building a Developer-Friendly Front-End/Site in something like 11ty and coming in afterwards to replace the variable calls with imported JSON content from a WP Backend....
:::

::: row
### Why Netlify/11ty Wall-of-Text

Is it faster? No... unless you've done it before and have boilerplate code.
Is it easier? Also no... unless, again, you've done it before and have boilerplate code.

If you **have** boilerplate code? Yes.  Its world's easier and faster than building something in Drupal or WordPress because a lot of the "overhead" with things like Paragraphs (Drupal), Advanced Custom Fields (WordPress), or custom Blocks (WordPress) are

On the flip-side, 11ty requires a higher willingness to work with **very** limited interfaces.  All the bells, whistles, widgets, easy plugins/modules, easily adding this or that functionality?  Only if it can be built _quickly_ using [AWS Lambda Functions](https://aws.amazon.com/lambda/).  Even then, you're using **AWS**.  One bad day and you're looking at a bill in the tens of thousands (or millions).

Is it good for **small** sites and/or prototyping?  **ABSOLUTELY**.

If you **know** your End-Users will number in the thousands on a _horrfically busy_ day?  Yeah. 11ty (or similar flat-file generators) with a Netlify CMS backend could save tons of Dev-hours, prep hours, etc. _while_ allowing for iterative Component Development.

Globals variables (like ACF's Theme Settings)?  Those are actually just `.json` data within the `_data/metadata.json` (or whatever we name it) file.  **SUPER** easier, yes.  But also _not_ PM/Client/etc. friendly.  Multiple theme-settings? Either use an array or create multiple files.  More data for actual _content_?  Could just dump it there too.
:::
^^^
