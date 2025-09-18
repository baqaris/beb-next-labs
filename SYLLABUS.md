# Front‑End SYLLABUS (Bab × Beb)

**Schedule:** Mon/Wed/Fri at 19:00 (Asia/Tbilisi)
**Repo:** `baqaris/beb-next-labs`
**Mentor:** Beb (teacher mode: on)
**Principle:** We do not move on until Bab truly understands the topic.

> **How we work**
>
> 1. Concept & “why” → 2) Live example together → 3) Bab completes a mini‑task → 4) Review → 5) Refactor.
>
> **PR/Branching:** For each task open a branch like `w01-a2-profile-card` and a PR to `master`. I leave review notes.
>
> **Checklists:** Mark tasks with `- [x]` when done. We update this file each session.

---

## Legend

* `A/B/C` = Sessions for the week (Mon/Wed/Fri)
* ✅ = already done
* 📁 = suggested folder

---

## Week 1 — Types → Components → Lists

**Focus:** TypeScript basics, component anatomy, props, lists, CSS Modules.

**Sessions**

* **A:** TypeScript basics (primitives, object, literal, union) → `type Person` ✅
* **B:** Component anatomy (props/children/composition) → `ProfileCard`
* **C:** List rendering + `key` + grid; design tokens (`--radius`, `--surface`)

**Assignments** (📁 `app/(exercises)/w01/profile-cards`)

* [x] **A1:** `type Person` + `people: Person[]` ✅
* [x] **A2:** `ProfileCard` component (+ hover scale)
* [x] **A3:** `ProfileCards` page (map + grid + correct `key`)

**Review criteria:** strict typing, clean JSX, hover/focus behavior, no console errors.

---

## Week 2 — Controls & Filters (Button, Input, Controlled state)

**Focus:** Reusable Button/Input, accessibility, controlled inputs, simple filters.

**Sessions**

* **A:** `Button` (variants: primary/ghost; sizes; loading/disabled; icon‑slots; a11y)
* **B:** `Input` (label, helper/error text, required; `aria-*`; controlled value)
* **C:** Mini‑form lab: search + role filter on `people`

**Assignments** (📁 `app/(exercises)/w02/controls`)

* [x] **A1:** `Button` component with props API + a11y
* [ ] **A2:** `Input` with label/error/helper (controlled)
* [ ] **A3:** Search + Role filter combo

**Review criteria:** focus-visible, keyboard navigation, prop design clarity.

---

## Week 3 — State & Effects Fundamentals

**Focus:** `useState`, derived vs source of truth, `useRef` (focus), `useEffect` (debounce).

**Sessions**

* **A:** Favorite/like toggle (per card); derived state discussion
* **B:** Input masking & simple validation (not empty, min length)
* **C:** `useRef` to manage focus; debounced search with `useEffect`

**Assignments** (📁 `app/(exercises)/w03/state-form`)

* [ ] **A1:** Favorite toggle per card
* [ ] **A2:** Mini‑validators (name/img)
* [ ] **A3:** Debounced search

**Review criteria:** no derived state bugs, effects with correct deps cleanup.

---

## Week 4 — Fetching 101 (axios + fetch) + Error/Loading UX

**Focus:** Next.js Route Handlers (mock API), axios/fetch service layer, `useEffect` patterns, loading skeletons, robust error handling.

**Sessions**

* **A:** `/api/people` (static/mock) + response shape; **axios instance** (baseURL, headers, interceptors)
* **B:** Client fetch with **axios** inside **`useEffect`** (cleanup/cancel, retries/backoff); loading skeletons; error UI
* **C:** Service layer (`getPeople`, `searchPeople`) + normalization; **request cancellation**; status-code based flows

**Assignments** (📁 `app/(exercises)/w04/fetching`)

* [ ] **A1:** Route handler for `/api/people`
* [ ] **A2:** axios instance (`api.ts`) + client fetch + list render with skeletons
* [ ] **A3:** Error state + retry button; normalized data; cancellation on unmount

**Review criteria:** network failure simulation handled; no unmounted state updates; interceptor design sane.

---

## Week 5 — Forms Pro (Zod + FormData)

**Focus:** Multi‑field forms, schema validation with **Zod**, file upload with `FormData`.

**Sessions**

* **A:** Controlled multi‑field form (register) + UX (disabled submit until valid)
* **B:** Zod schema + error map → field‑level errors
* **C:** `FormData` (photo preview, size/type checks)

**Assignments** (📁 `app/(exercises)/w05/forms`)

* [ ] **A1:** Register form (name/email/role/photo)
* [ ] **A2:** Zod validation + error rendering
* [ ] **A3:** File upload flow + preview

**Review criteria:** a11y labels/errors, good error copy, disabled/Loading states.

---

## Week 6 — Routing & Detail Pages

**Focus:** Dynamic routes, detail layout, 404 fallback, shareable links.

**Sessions**

* **A:** Dynamic route `/people/[slug]` + `Link`
* **B:** Detail page layout (breadcrumb, back link)
* **C:** 404/empty state; refresh & deep‑link stability

**Assignments** (📁 `app/(exercises)/w06/routing`)

* [ ] **A1:** Dynamic route
* [ ] **A2:** Detail content/layout
* [ ] **A3:** 404 fallback + tests (smoke)

**Review criteria:** stable routing, no hydration errors.

---

## Week 7 — App State & Data Layers

**Focus:** Lifting state, **Context/Reducer**, **Zustand** or Context‑only, **React Query**, **custom hooks**.

**Sessions**

* **A:** Context + reducer pattern; when to lift state; extracting **custom hooks** from components
* **B:** Zustand (thin global state) *or* Context‑only (decision) — derive selectors, avoid re‑renders
* **C:** React Query basics (cache, refetch, query keys); compose with **axios** service functions

**Assignments** (📁 `app/(exercises)/w07/state`)

* [ ] **A1:** Persist filters globally; extract `usePeopleFilters()`
* [ ] **A2:** Persist favorites globally; add `useLocalStorage(key)` hook
* [ ] **A3:** Query layer around mock API; add `usePeopleQuery(params)`

**Review criteria:** lean stores, no prop‑drilling, clear query keys, hooks with clean contracts.

---

## Week 8 — Performance

**Focus:** `memo`/`useMemo`/`useCallback`, Profiler, image optimization, **virtualization**.

**Sessions**

* **A:** When/why to memoize; render count debugging
* **B:** DevTools Profiler; eliminate wasteful renders
* **C:** `next/image` + list virtualization (1000+ items)

**Assignments** (📁 `app/(exercises)/w08/perf`)

* [ ] **A1:** Memoization exercise
* [ ] **A2:** Profile & fix hot path
* [ ] **A3:** Virtualized list

**Review criteria:** FPS/stutter, measurable improvement.

---

## Week 9 — Testing

**Focus:** **Vitest + React Testing Library**, **MSW** (mock network), basic Playwright E2E.

**Sessions**

* **A:** Unit/component tests (render + interactions)
* **B:** MSW for network mocking
* **C:** Playwright smoke (nav + submit)

**Assignments** (📁 `app/(exercises)/w09/tests`)

* [ ] **A1:** Key components covered
* [ ] **A2:** MSW handlers for API
* [ ] **A3:** E2E smoke tests

**Review criteria:** useful tests, stable CI, fast feedback.

---

## Week 10 — Auth & Guarding

**Focus:** Simple auth (mock/session), protected routes, role‑based UI, env handling.

**Sessions**

* **A:** Login flow (mock/session)
* **B:** Guards & role‑based rendering
* **C:** Error logging; env management

**Assignments** (📁 `app/(exercises)/w10/auth`)

* [ ] **A1:** Minimal auth flow
* [ ] **A2:** Protected routes
* [ ] **A3:** Role‑based UI

**Review criteria:** secure by default, no leaks, clear redirects.

---

## Week 11 — Accessibility & i18n

**Focus:** WAI‑ARIA, focus management, form a11y, i18n (ka/en toggle).

**Sessions**

* **A:** A11y foundations; keyboard users first
* **B:** Form a11y patterns
* **C:** i18n strings; locale switch

**Assignments** (📁 `app/(exercises)/w11/a11y-i18n`)

* [ ] **A1:** Axe/Lighthouse pass for key pages
* [ ] **A2:** Form a11y fixes
* [ ] **A3:** i18n integration

**Review criteria:** no critical a11y issues; language switch consistent.

---

## Week 12 — Capstone & Deployment

**Focus:** Mini‑app “Directory”: list, detail, filter, auth, forms; deploy to Vercel; portfolio polish.

**Sessions**

* **A:** Capstone plan & build
* **B:** Vercel deployment + envs + preview links
* **C:** README/Docs; LinkedIn update; portfolio entry

**Assignments** (📁 `app/(exercises)/w12/capstone`)

* [ ] **A1:** Directory app (MVP)
* [ ] **A2:** Deployed URL
* [ ] **A3:** Polished README

**Review criteria:** stable live demo, clear docs, recruiter‑friendly.

---

## Parallel Track — Algorithms (15–30m at start of each session)

**Coverage:** Arrays/Strings, Hash Map/Set, Two Pointers/Sliding Window, Stack, light Recursion.

**Core tasks** (📁 `algorithms/`)

* [ ] `isPalindrome(str)` + tests
* [ ] `countChars(str)` + tests
* [ ] `hasDuplicates(arr)` (Set) + tests
* [ ] `isAnagram(a,b)` (Map) + tests
* [ ] `maxSubarrayLenByRule(...)` (sliding window) + tests
* [ ] `isValidParens(s)` (stack) + tests
* [ ] `nestedSum(obj)` (recursion) + tests

---

## Hooks Deep Dive — All Official React Hooks (Cheat Sheet + Labs)

**Goal:** You can confidently choose and combine hooks. We’ll practice patterns and gotchas.

**Coverage & mini‑labs**

* **State:** `useState` (primitive/object/array patterns), **derived state**, `useReducer` for complex flows
* **Side‑effects:** `useEffect` (dependencies, cleanup, race conditions), **with axios** + cancellation
* **Refs:** `useRef` (DOM focus, mutable refs), `useImperativeHandle` (rare, for controlled components)
* **Memoization:** `useMemo`, `useCallback` (when/why; perf vs correctness)
* **Context:** `useContext` (scoping, avoiding re‑renders)
* **IDs & concurrency:** `useId`, `useTransition`, `useDeferredValue`
* **External stores & styling:** `useSyncExternalStore`, `useInsertionEffect` (FYI)
* **Debugging:** `useDebugValue` (for custom hooks)

**Deliverables** (📁 `app/(exercises)/hooks-labs`)

* [ ] `useAxios()` wrapper (abortable), `useToggle(initial?)`, `useLocalStorage(key)`
* [ ] `useDebouncedValue(value, delay)` used with search input
* [ ] `useDisclosure()` for modal/drawer open/close

**Review criteria:** correct deps arrays, no memory leaks, readable APIs for custom hooks.

---

## Admin & Hygiene

* Keep **README.md** with a small **Progress Checklist** and link to this SYLLABUS.
* Branch naming: `wXX-aY-*`; PR titles short & descriptive.
* After each session, we tick completed boxes here and in README.

**Last updated:** *fill this date after your first commit*
