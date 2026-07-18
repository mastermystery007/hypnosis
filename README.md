# Practical Hypnosis

A premium, offline-first Expo / React Native course application covering consent-first hypnosis, suggestion, ideomotor response, inductions, performance phenomena, self-hypnosis and safe reorientation.

## Current implementation

- 15 expanded lessons with detailed theory chapters
- Learning objectives and estimated duration
- Step-by-step practice procedures
- Model wording and scripts
- Skill drills and capstone assignments
- Troubleshooting and safety boundaries
- Interactive knowledge checks with explanations
- Persistent completion tracking and bookmarks
- Search across titles, summaries, levels and objectives
- Dark responsive mobile interface
- No ads, subscriptions or locked lesson packs

## Run locally

```bash
npm install
npm start
```

Use the Expo development client or Expo Go-compatible workflow appropriate to the installed Expo SDK.

## Validate

```bash
npm run typecheck
```

A GitHub Actions TypeScript workflow is included at `.github/workflows/typecheck.yml`.

## Important files

- `App.tsx` — course reader, search, bookmarks, progress and quizzes
- `src/course.ts` — complete structured lesson content
- `PRODUCTION_MANIFEST.md` — exact remaining video, audio, printable and store assets
- `app.json` — Expo application identity

## Release status

The application and written curriculum are implemented. A public-store release still requires original app artwork, screenshots, lesson media, a hosted privacy policy, signed production builds and physical-device testing. The exact backlog and acceptance criteria are in `PRODUCTION_MANIFEST.md`.

## Safety scope

This product is for education, consensual demonstrations and self-practice. It is not medical or psychological treatment. It must not be used for covert control, unsafe stunts, humiliation or work with a person who cannot provide informed consent.
