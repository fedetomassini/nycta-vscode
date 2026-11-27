# Contributing to Nycta

For a color or contrast problem, open a **Theme bug** issue. For a new
highlighting rule or palette change, use **Theme suggestion**. Check existing
issues first so examples of the same problem stay together.

## Preview a change

1. Open the repository in VS Code and edit the files in `themes/source/`.
   `scopes.json` holds the TextMate scopes shared by every variant;
   `nycta-dark.json` holds the color values for Nycta Dark. Run `npm run build`
   to regenerate `themes/nycta-dark-color-theme.json` — never edit that file
   directly, because the build overwrites it.
2. Press **F5** and select **Nycta Dark** in the Extension Development Host.
3. Try the affected UI state or code snippet with custom color overrides disabled.
   For syntax changes, use **Developer: Inspect Editor Tokens and Scopes** on the
   affected text to see which semantic token or TextMate scope supplies its color.
4. Run `npm run package` with Node.js 22 or newer to check that the VSIX builds.

## Open a pull request

Describe the readability problem and what changed. For visual changes, include
before-and-after screenshots of the same snippet or UI state, using sample code.
Use a descriptive PR title, such as `fix: distinguish inactive line numbers`.
Leave version bumps and release notes to the release workflow.
