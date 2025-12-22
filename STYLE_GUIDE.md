Style guide — Global CSS source of truth

Decision:
- `src/styles/globals.css` is the canonical, active global stylesheet for this project.
- Do not edit `app/globals.css` directly for runtime styling; it may remain as a reference or backup.

Rationale:
- The app layout imports `src/styles/globals.css` from `src/app/layout.jsx`.
- Consolidating into a single source reduces confusion and prevents style overrides.

Conventions:
- Keep colors and palette limited to the established values (caramel→beige gradient, white glass cards, gold accents).
- Use the variables defined in `:root` for spacing, shadows, transitions and typography.
- When adding new CSS rules, prefer extending or adding modifiers (e.g., `.card--primary`) rather than changing existing class names.

If you'd like, I can remove or archive `app/globals.css` after your review; I left it untouched as a backup.
