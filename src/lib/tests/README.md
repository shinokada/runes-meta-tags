# Tests

This directory contains tests and demos for the runes-meta-tags library.

## Files

### `multiple-tags.test.ts`

Comprehensive unit tests for multiple meta tag scenarios.

**Test Coverage:**

- Multiple `og:locale:alternate` tags
- Multiple `article:author` tags (array and string)
- Multiple `article:tag` tags (array and string)
- App Card IDs without `appName`
- App Card with both names and IDs
- Value normalization with `String()`
- Complex scenarios with multiple duplicate tags

**Run Tests:**

```bash
npm test
```

### `MultipleTagsDemo.svelte`

Interactive visual demonstration of meta tag rendering.

**Features:**

- Three test scenarios:
  1. Article with multiple authors & tags
  2. App Card with IDs only (no name)
  3. Full App Card (with name and IDs)
- Real-time tag generation display
- Visual highlighting of duplicate keys
- DOM inspection instructions
- Console logging capability

**Usage:**
Import this component in your development environment to see the meta tags in action:

```svelte
<script>
  import MultipleTagsDemo from 'runes-meta-tags/tests/MultipleTagsDemo.svelte';
</script>

<MultipleTagsDemo />
```

## What These Tests Validate

### 1. Multiple Tags with Same Key

Ensures that tags with identical `name` or `property` attributes render correctly in the DOM:

```typescript
// Input
article: {
  author: ['Alice', 'Bob', 'Charlie']
}

// Expected Output (3 separate tags)
<meta property="article:author" content="Alice" />
<meta property="article:author" content="Bob" />
<meta property="article:author" content="Charlie" />
```

### 2. App Card Flexibility

Validates that App Card IDs work independently of app names:

```typescript
// This now works (previously didn't)
twitter: {
  card: 'app',
  appIdIphone: '123456789'
  // No appName required!
}
```

### 3. Type Safety

Confirms that all values are properly converted to strings:

```typescript
imageWidth: 1200; // Number
// Becomes
content = '1200'; // String
```

## Running the Tests

### Unit Tests

```bash
# Run all tests
npm test

# Run in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

### Visual Demo

1. Start your development server
2. Navigate to the demo component
3. Select different test scenarios
4. Open DevTools and inspect `<head>` element
5. Verify meta tags render correctly

## Test Results

All tests should pass with the following expectations:

- ✅ Multiple locale alternates render (3 tags)
- ✅ Multiple article authors render (3 tags)
- ✅ Multiple article tags render (4 tags)
- ✅ App IDs render without app name
- ✅ Numbers convert to strings
- ✅ Complex scenarios handle correctly

## Debugging Tips

### Meta Tags Not Visible in Browser?

1. Check the `<head>` element in DevTools
2. Look for `<meta>` tags with the expected attributes
3. Use the demo component's console logging feature

### Test Failing?

1. Check that you're using the latest code
2. Ensure dependencies are installed: `npm install`
3. Clear any cached builds
4. Review the test output for specific failures

### Svelte Keying Issues?

1. Verify the `each` block uses index-based keys
2. Check that keys are unique for each tag
3. Look for console warnings about duplicate keys

## Further Reading

- [IMPLEMENTATION_SUMMARY.md](../../IMPLEMENTATION_SUMMARY.md) - Technical details
- [QUICK_REFERENCE.md](../../QUICK_REFERENCE.md) - Usage examples
- [VISUAL_DIFF.md](../../VISUAL_DIFF.md) - Code changes visualization

## Contributing

When adding new tests:

1. Follow the existing test structure
2. Add clear descriptions
3. Test both success and edge cases
4. Update this README if adding new test files
