const theme = `
:root {
  /* Font */
  --font: 'Source Code Pro', Ubuntu, sans;
  --font-size: 12pt;
  --font-weight: bold;

  /* -------------------- */
  /* --    MONOKAI    -- */
  /* -------------------- */
  --fg: #F8F8F2;
  --bg: #272822;
  --bg-dark: #1D1E19;
  --border: #2D2E2E;
  --main-fg: #E6DB74;
  --accent-fg: #A6E22E;
  --info-fg: #f5a951;
  --select: #556172;

  /* Unused Alternate Colors */

  --red: #E74C3C;
  --orange: #FD971F;
  --blue: #268BD2;
  --violet: #9C91E4;
  --cyan: #66D9EF;
}
.sk_theme {
	background: #282828;
	color: #ebdbb2;
  font-size: 12pt;
}
.sk_theme tbody {
	color: #b8bb26;
}
.sk_theme input {
	color: #d9dce0;
}
.sk_theme .url {
	color: #98971a;
}
.sk_theme .annotation {
	color: #b16286;
}
.sk_theme .omnibar_highlight {
	color: #333;
	background: #ebdbb2;
}
.sk_theme #sk_omnibarSearchResult ul>li:nth-child(odd) {
	background: #282828;
}
.sk_theme #sk_omnibarSearchResult ul>li.focused {
	background: #161713;
}

/* ---------- ACE Editor ---------- */
#sk_editor {
  background: var(--bg-dark) !important;
  height: 50% !important;
  /* Remove this to restore the default editor size */
}

.ace_dialog-bottom {
  border-top: 1px solid var(--bg) !important;
}

.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: var(--bg) !important;
}

.ace-chrome {
  color: var(--fg) !important;
}

.ace_gutter,
.ace_dialog {
  color: var(--fg) !important;
}

.ace_cursor {
  color: var(--fg) !important;
}

.normal-mode .ace_cursor {
  background-color: var(--fg) !important;
  border: var(--fg) !important;
  opacity: 0.7 !important;
}

.ace_marker-layer .ace_selection {
  background: var(--select) !important;
}

.ace_editor,
.ace_dialog span,
.ace_dialog input {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}

/* ace editor's autocomplete styling */
.ace_content {
  background: var(--bg);
}

/* highlight selected line in ace autocomplete */
.ace_line.ace_selected {
  background: var(--bg-dark);
}

`;

export default theme;
