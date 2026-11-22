# Nycta Dark

<img src="https://raw.githubusercontent.com/fedetomassini/nycta-vscode/main/assets/icon.png" alt="Nycta's lavender moth" width="112" height="112">

Nycta Dark is a color theme for Visual Studio Code. The editor, sidebar, and terminal share a near-black `#080808` background. Tabs and panels are separated by fine gray borders, leaving the strongest colors for the code itself.

## Reading the palette

In a function signature, the name reads blue and the types lavender. Inside the function, pink keywords mark the control flow, green strings stand apart from gray variables, and italic comments recede into the background.

| Syntax | Color |
| --- | --- |
| Keywords | Rose `#E896BD` |
| Functions and methods | Blue `#9EB5EF` |
| Types and classes | Lavender `#9B96E8` |
| Strings | Green `#94D7A2` |
| Properties | Peach `#EFB9A0` |
| Comments | Gray `#7D7D7D` |

The theme defines both TextMate rules and semantic token colors. The exact highlighting depends on the language extension. Outside the editor, the integrated terminal has a matching ANSI palette, and Git additions, deletions, and modifications use green, red, and peach.

## Install and select the theme

Nycta Dark requires **VS Code 1.85 or later**. To install a packaged version:

1. Download the `.vsix` attached to a [Nycta release](https://github.com/fedetomassini/nycta-vscode/releases), or build it locally using the command below.
2. Open the Command Palette and run **Extensions: Install from VSIX…**. Select the downloaded file.
3. Run **Preferences: Color Theme** and choose **Nycta Dark**.

To select it from `settings.json` instead:

```json
{
  "workbench.colorTheme": "Nycta Dark"
}
```

## Preview or build from source

Open the repository in VS Code and press **F5**. Select **Nycta Dark** in the new Extension Development Host window to preview local changes.

To build an installable `.vsix`, run `npm run package` from the repository root with **Node.js 22 or later**. Node.js is only needed for packaging; the installed extension is a static color theme.

[Changelog](https://github.com/fedetomassini/nycta-vscode/blob/main/.github/CHANGELOG.md) · [Contributing](https://github.com/fedetomassini/nycta-vscode/blob/main/.github/CONTRIBUTING.md) · [MIT license](https://github.com/fedetomassini/nycta-vscode/blob/main/LICENSE)
