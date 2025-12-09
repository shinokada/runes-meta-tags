# Quick Reference: Multiple Meta Tags & App Cards

## Multiple Meta Tags Now Work Correctly! 🎉

The following scenarios now render multiple meta tags with the same key correctly:

### Multiple Article Authors

```typescript
<RunesMetaTags
  og={{
    type: 'article',
    article: {
      author: ['Alice', 'Bob', 'Charlie']
    }
  }}
/>
```

**Renders:**

```html
<meta property="article:author" content="Alice" />
<meta property="article:author" content="Bob" />
<meta property="article:author" content="Charlie" />
```

### Multiple Article Tags

```typescript
<RunesMetaTags
  og={{
    type: 'article',
    article: {
      tag: ['javascript', 'svelte', 'tutorial']
    }
  }}
/>
```

**Renders:**

```html
<meta property="article:tag" content="javascript" />
<meta property="article:tag" content="svelte" />
<meta property="article:tag" content="tutorial" />
```

### Multiple Locale Alternates

```typescript
<RunesMetaTags
  og={{
    localeAlternate: ['fr_FR', 'es_ES', 'de_DE']
  }}
/>
```

**Renders:**

```html
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="de_DE" />
```

---

## App Cards: Flexible Configuration

### Option 1: App IDs Only (NEW!)

Previously required `appName`. Now works without it!

```typescript
<RunesMetaTags
  twitter={{
    card: 'app',
    appIdIphone: '123456789',
    appIdIpad: '123456789',
    appIdGooglePlay: 'com.example.app',
    appCountry: 'US'
  }}
/>
```

**Renders:**

```html
<meta name="twitter:card" content="app" />
<meta name="twitter:app:id:iphone" content="123456789" />
<meta name="twitter:app:id:ipad" content="123456789" />
<meta name="twitter:app:id:googleplay" content="com.example.app" />
<meta name="twitter:app:country" content="US" />
```

### Option 2: Full App Card (Recommended)

```typescript
<RunesMetaTags
  twitter={{
    card: 'app',
    appName: 'My Awesome App',
    appIdIphone: '123456789',
    appIdIpad: '123456789',
    appIdGooglePlay: 'com.example.app',
    appCountry: 'US'
  }}
/>
```

**Renders:**

```html
<meta name="twitter:card" content="app" />
<meta name="twitter:app:name:iphone" content="My Awesome App" />
<meta name="twitter:app:name:ipad" content="My Awesome App" />
<meta name="twitter:app:name:googleplay" content="My Awesome App" />
<meta name="twitter:app:id:iphone" content="123456789" />
<meta name="twitter:app:id:ipad" content="123456789" />
<meta name="twitter:app:id:googleplay" content="com.example.app" />
<meta name="twitter:app:country" content="US" />
```

---

## Type Safety

All values are now safely converted to strings:

```typescript
// Numbers, booleans, and other primitives are automatically handled
<RunesMetaTags
  og={{
    imageWidth: 1200,      // Converted to "1200"
    imageHeight: 630,      // Converted to "630"
  }}
/>
```

---

## Testing Your Meta Tags

### Browser DevTools

1. Open DevTools (F12)
2. Go to Elements/Inspector tab
3. Expand the `<head>` element
4. Look for your meta tags

### Twitter Card Validator

https://cards-dev.twitter.com/validator

### Facebook Sharing Debugger

https://developers.facebook.com/tools/debug/

### Test Component

```typescript
import MultipleTagsDemo from 'runes-meta-tags/tests/MultipleTagsDemo.svelte';

// Use in your dev/test environment to see all generated tags
```

---

## Common Patterns

### Blog Post with Multiple Authors

```typescript
<RunesMetaTags
  title="Collaborative Guide to Svelte"
  description="A comprehensive guide by industry experts"
  og={{
    type: 'article',
    title: 'Collaborative Guide to Svelte',
    image: 'https://example.com/image.jpg',
    article: {
      author: ['Expert 1', 'Expert 2', 'Expert 3'],
      tag: ['svelte', 'javascript', 'tutorial'],
      publishedTime: '2024-12-01T00:00:00Z',
      section: 'Technology'
    }
  }}
/>
```

### Multilingual Content

```typescript
<RunesMetaTags
  og={{
    locale: 'en_US',
    localeAlternate: ['fr_FR', 'es_ES', 'de_DE', 'ja_JP']
  }}
/>
```

### App Promotion Tweet

```typescript
<RunesMetaTags
  title="Download Our App"
  twitter={{
    card: 'app',
    site: '@mycompany',
    appName: 'MyApp',
    appIdIphone: '929750075',
    appIdGooglePlay: 'com.mycompany.app',
    appCountry: 'US'
  }}
/>
```

---

## Migration Notes

**No breaking changes!** Everything that worked before still works. You just have more options now:

- ✅ App IDs work without app names
- ✅ Multiple tags with same key render correctly
- ✅ All primitive types are safely converted to strings

---

## Questions?

Check the full [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for technical details.
