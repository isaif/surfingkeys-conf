import theme from "./gruvbox-simple.js";

settings.theme = theme;

api.aceVimMap("jj", "<Esc>", "insert");

// tab navigation
api.map("<Ctrl-h>", "E");
api.unmap("E");
api.map("<Ctrl-l>", "R");
api.unmap("R");
