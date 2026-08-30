# Naming Conventions

## Source files

- Astro components and layouts use PascalCase: `PageLayout.astro`.
- TypeScript modules use lowercase kebab-case: `images-optimization.ts`.
- Astro route files follow Astro's routing conventions, including `index.astro`, `[slug].astro`, and `rss.xml.ts`.

## Code symbols

- Variables, functions, parameters, and data properties use camelCase: `featuredWorks`, `getPermalink`.
- Types, interfaces, and component names use PascalCase: `Work`, `Metadata`, `PageLayout`.
- Immutable configuration values shared across a module may use UPPER_SNAKE_CASE: `POST_PERMALINK_PATTERN`.
- Do not use leading underscores to denote private or cached values. Use descriptive names such as `cachedPosts`.

## Assets and CSS

- Asset filenames use lowercase kebab-case in the form `{purpose}-{subject}.{extension}`: `hero-cube-de-pon.png`.
- CSS classes use lowercase BEM naming: `ununse-screen__image`.

## Compatibility exceptions

- Public URL slugs, Astro route filenames, and third-party configuration keys retain the names required by their interfaces.
- Astro dynamic tag identifiers retain PascalCase when required by Astro, for example `WrapperTag`.
