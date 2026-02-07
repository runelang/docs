// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { readFileSync } from "node:fs";

const runelangGrammar = JSON.parse(
  readFileSync(
    new URL("./src/grammars/runelang.tmLanguage.json", import.meta.url),
    "utf-8",
  ),
);

runelangGrammar.name = "rune";
runelangGrammar.aliases = ["runelang"];

export default defineConfig({
  site: "https://runelang.com",
  integrations: [
    starlight({
      title: "RuneLang",
      tagline: "A fantasy-themed programming language built in Rust.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/runelang/runelang",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      expressiveCode: {
        shiki: {
          langs: [runelangGrammar],
        },
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#7c3aed",
          },
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Language Guide",
          items: [
            { label: "Variables & Types", slug: "guide/variables-and-types" },
            { label: "Operators", slug: "guide/operators" },
            { label: "Control Flow", slug: "guide/control-flow" },
            { label: "Rituals & Spells", slug: "guide/rituals-and-spells" },
            { label: "Guilds & Realms", slug: "guide/guilds-and-realms" },
            { label: "Scrolls & Tomes", slug: "guide/scrolls-and-tomes" },
            { label: "Error Handling", slug: "guide/error-handling" },
            { label: "Modules", slug: "guide/modules" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Type System", slug: "reference/type-system" },
            { label: "Keywords", slug: "reference/keywords" },
            { label: "Built-in Functions", slug: "reference/builtins" },
            { label: "Methods", slug: "reference/methods" },
          ],
        },
        {
          label: "Comparisons",
          items: [
            { label: "RuneLang vs Python", slug: "comparisons/vs-python" },
            {
              label: "RuneLang vs JavaScript",
              slug: "comparisons/vs-javascript",
            },
          ],
        },
        {
          label: "Examples",
          items: [
            { label: "Hello World", slug: "examples/hello-world" },
            { label: "Dungeon Crawler", slug: "examples/dungeon-crawler" },
            { label: "Feature Showcase", slug: "examples/showcase" },
          ],
        },
      ],
    }),
  ],
});
