# Changelog

## [Unreleased]

### Fixed

- **Multiple meta tags with same key now render correctly** - Fixed Svelte keying issue that prevented multiple tags with the same `name` or `property` attribute from rendering (e.g., multiple `article:author`, `article:tag`, or `og:locale:alternate` tags). Changed from composite key to index-based key to ensure each tag gets a unique DOM node.

### Changed

- **Improved value normalization** - Changed from manual type checking to `String()` for more robust primitive value conversion in `mapToMetaTags` helper function. This ensures consistent handling of numbers, booleans, and other primitive types.
- **Decoupled Twitter App Card IDs from app name** - App Card ID tags (`appIdIphone`, `appIdIpad`, `appIdGooglePlay`) and `appCountry` now render independently of `appName`. Previously, these tags only rendered if `appName` was provided, which was overly restrictive. This aligns with Twitter's App Card documentation where app IDs are the primary identifiers.

### Added

- **Comprehensive test suite** for multiple meta tags scenarios (`src/lib/tests/multiple-tags.test.ts`)
- **Interactive demo component** (`src/lib/tests/MultipleTagsDemo.svelte`) showcasing:
  - Articles with multiple authors and tags
  - App cards with IDs only (no name)
  - Full app cards with names and IDs
- **Documentation** for the changes:
  - `IMPLEMENTATION_SUMMARY.md` - Technical details and migration guide
  - `QUICK_REFERENCE.md` - Quick examples and common patterns

### Technical Details

These changes are **fully backward compatible** with no breaking changes. The improvements enhance functionality while maintaining the existing API.

**Files Modified:**

- `src/lib/helpers.ts` - Value normalization and app card decoupling
- `src/lib/RunesMetaTags.svelte` - Fixed keyed each block
- `src/lib/types.ts` - Added optional `id` field to `GenericMetaTag` interface

**Files Added:**

- `src/lib/tests/multiple-tags.test.ts` - Unit tests
- `src/lib/tests/MultipleTagsDemo.svelte` - Interactive demo
- `IMPLEMENTATION_SUMMARY.md` - Technical documentation
- `QUICK_REFERENCE.md` - Usage examples

### Credits

These improvements were identified and implemented based on suggestions from CodeRabbitAI code review.
