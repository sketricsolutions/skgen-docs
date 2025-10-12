# Prompt to Convert MDX Documents for LLM Training

## Overview

This document provides a systematic approach for converting MDX documentation files into optimized markdown format suitable for AI agent training. The conversion process ensures that AI agents can properly reference documents, display images, and navigate between related content.

## Background

When training AI agents on documentation, it's crucial that:
- All references are absolute URLs so agents can provide proper links to users
- Images have descriptive alt text so agents understand visual content
- Documents are in pure markdown format for maximum compatibility
- Internal links work correctly across different deployment environments

## Conversion Steps

Follow these steps for each document to optimize it for AI Agent training data:

### 1. Rename Files from .mdx to .md
- Convert all file extensions from `.mdx` to `.md`
- This ensures maximum compatibility with AI training systems
- Use batch commands for efficiency: `mv *.mdx *.md`

### 2. Add Public URLs at the Top of Each Document
- Add `**Public URL:** https://docs.sketricgen.ai/[section]/[page]` at the very beginning
- This allows AI agents to reference the source document when quoting content
- Format: `**Public URL:** https://docs.sketricgen.ai/getting-started/quickstart`

### 3. Remove HTML Tags and Replace with Pure Markdown
- Convert HTML elements to markdown equivalents:
  - `<Tabs>` and `<Tab>` → Use markdown headings (`##`, `###`)
  - `<div>` → Use markdown formatting
  - Any other HTML tags → Convert to appropriate markdown syntax
- Ensure documents are in pure markdown format for AI compatibility

### 4. Update All Image URLs with Full Base URL
- Change relative image paths from `/images/...` to `https://docs.sketricgen.ai/images/...`
- This ensures images display correctly when AI agents reference them
- Use find/replace operations for efficiency

### 5. Update All Internal Links with Full Base URL
- Change relative internal links from `/section/page` to `https://docs.sketricgen.ai/section/page`
- This ensures links work correctly in AI agent responses
- Verify all internal references are properly updated

### 6. Add Descriptive Alt Text for All Images
- Replace generic alt text with comprehensive descriptions
- Format: `![Descriptive text explaining what the image shows](https://docs.sketricgen.ai/images/...)`
- Examples:
  - `![Screenshot showing SketricGen dashboard with Publish button for embed code](https://docs.sketricgen.ai/images/wix/screenshot7.png)`
  - `![Animated GIF showing handoff creation between agents in AgentSpace](https://docs.sketricgen.ai/images/user-guides/agent-space/canvas_handoff.gif)`

### 7. Verify All Changes Are Complete
- Check that all images have full URLs and descriptive alt text
- Verify all internal links use full base URLs
- Ensure no HTML tags remain in the document
- Confirm public URL is added at the top
- Test that the document renders correctly

## Example Conversion

### Before (MDX format):
```mdx
<Tabs>
  <Tab title="Floating Chat Bubble">
    ## Step 1: Create your account
    ![](/images/wix/screenshot1.png)
    See the [Agents Guide →](/user-guides/agents) for more details.
  </Tab>
</Tabs>
```

### After (Optimized MD format):
```markdown
**Public URL:** https://docs.sketricgen.ai/deploy/wix

## Floating Chat Bubble

### Step 1: Create your account

![Screenshot showing account creation interface with sign-up form](https://docs.sketricgen.ai/images/wix/screenshot1.png)

See the [Agents Guide →](https://docs.sketricgen.ai/user-guides/agents) for more details.
```

## URL Structure Reference

Based on the docs.json configuration, use these URL patterns:

- **Getting Started**: `https://docs.sketricgen.ai/getting-started/[page]`
- **User Guides**: `https://docs.sketricgen.ai/user-guides/[page]`
- **Deploy**: `https://docs.sketricgen.ai/deploy/[page]`
- **Dev Guide**: `https://docs.sketricgen.ai/dev-guide/[page]`
- **Changelog**: `https://docs.sketricgen.ai/changelog/[page]`

## Quality Checklist

Before considering a document conversion complete, verify:

- [ ] File renamed from `.mdx` to `.md`
- [ ] Public URL added at the top
- [ ] No HTML tags remain
- [ ] All images use full URLs (`https://docs.sketricgen.ai/images/...`)
- [ ] All images have descriptive alt text
- [ ] All internal links use full URLs (`https://docs.sketricgen.ai/...`)
- [ ] Document renders correctly in markdown preview
- [ ] All references are absolute and functional

## Benefits for AI Agent Training

This conversion process ensures that:

1. **Proper Attribution**: AI agents can cite sources with working URLs
2. **Visual Understanding**: Descriptive alt text helps agents understand image content
3. **Cross-Reference Capability**: Full URLs enable proper linking between documents
4. **Deployment Flexibility**: Absolute URLs work across different environments
5. **Training Efficiency**: Pure markdown format is optimal for AI processing

## Future Use

When converting new documentation or updating existing files:

1. Follow this systematic approach
2. Use batch operations for efficiency when processing multiple files
3. Verify each step before proceeding to the next
4. Test the final output to ensure everything works correctly
5. Update this guide if new patterns or requirements emerge

---

*This guide was created based on the successful conversion of the SketricGen documentation from MDX to optimized markdown format for AI agent training.*
