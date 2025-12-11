// Before (v0.4.x and earlier):
import { RunesMetaTags } from 'runes-meta-tags';

// After (v0.5.0+):
import { MetaTags } from 'runes-meta-tags';

// In your +layout.svelte:
// ❌ Old (deprecated, will be removed in v1.0.0)
<RunesMetaTags {...metaTags} />

// ✅ New (recommended)
<MetaTags {...metaTags} />

// Everything else stays the same!
// The component behavior is identical, just the name changed.