# 🍲📚 Cookbook App

Welcome to my personal cookbook! 👋🏻 I created this app to help me manage all my favorite recipes in one place.

## Table of contents

- [Motivation](#motivation)
- [Installation and Running the App](#installation)
- [Work in Progress](#work-in-progress)
- [Accessibility Report](#accessibility-report)

<a id="motivation"></a>

## 🧠 Motivation

Over the years, I’ve collected a large number of recipes and saved them in various places—some as bookmarks, others as screenshots on my phone, and a few handwritten on paper. Eventually, it became difficult and time-consuming to quickly find a specific recipe. That's one of the main reasons I decided to create this app: to have a practical and efficient way to store all my favorite recipes in one place and add functionality that makes cooking easier, like the ability to cross off ingredients as I use them.

Additionally, building this app helps me improve my web development and design skills.

<a id="installation"></a>

## 📥 Installation and Running the App

To get started, clone this repository. Then, install the dependencies:

```bash
npm install
# or
yarn install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the app 🚀

<a id="accessibility-report"></a>

## ♿ Accessibility Report

Automated accessibility audits run on every push to main and on every pull request using [Playwright](https://playwright.dev/) + [axe-core](https://github.com/dequelabs/axe-core), targeting WCAG 2.1 AA and axe best practices across desktop and mobile viewports.

- Main branch report: [https://domihustinova.github.io/cookbook/main/](https://domihustinova.github.io/cookbook/main/)
- PR reports are deployed automatically to `https://domihustinova.github.io/cookbook/pr-{PR number}/` and linked in the CI job summary. On PR close/merge, the report is automatically cleaned up.

### How it works

```bash
[ accessibility ] -> [ reducer ] -> [ html-index ] -> [ deploy ]
```

- **accessibility**: runs Playwright tests with axe-core across 2 browser/device configurations, generates a per-page HTML report and a JSON result file for each.
- **reducer**: merges the individual JSON files into a single `merged.json`.
- **html-index**: generates an HTML index page with scores, violation counts, and links to the individual reports.
- **deploy**: pushes the report to GitHub Pages under a branch-specific subdirectory (`main/` or `pr-{PR number}/`).

### Scoring

The score (0–100) is a weighted metric based on [Lighthouse's accessibility audit weights](https://developer.chrome.com/docs/lighthouse/accessibility/scoring). Only rules evaluated by axe (passes + violations) contribute to the score — inapplicable rules are excluded.

Violations **fail the CI** — any page with one or more violations will cause the accessibility job to fail. The report pipeline still runs so you can inspect what violated.

### Running locally

```bash
npm run pw:a11y:local
```

This runs the full pipeline (tests → reduce → generate index) and outputs the report to `public/index.html`. Open it in a browser to view results.

<a id="work-in-progress"></a>

## 🚧 Work in Progress

This app is still a work in progress. I'm continuously adding new features and improving the user experience. I'm starting small by focusing on basic functionality such as crossing off used ingredients, adding a search field, and using locally stored recipes. In the future, I plan to introduce features like filtering recipes by tags, connecting the database, adding user authentication, and enabling recipe submission through the UI. Stay tuned! 👀
