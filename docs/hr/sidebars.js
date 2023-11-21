/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  useCasesSidebar: [{ type: 'autogenerated', dirName: 'use_cases' }],

  tutorialSidebar: [
    // About
    {
      type: 'doc',
      label: 'About SuperDuperDB', // sidebar label
      id: 'docs/intro', // document ID
    },
    // Installation
    {
      type: 'doc',
      label: 'Install SuperDuperDB',
      id: 'docs/installation',
    },
    // Configuration
    {
      type: 'doc',
      label: 'Configure SuperDuperDB',
      id: 'docs/configuration',
    },
    // Talks & Tutorials
    {
      type: 'doc',
      label: 'Talks & Tutorials',
      id: 'docs/presentation',
    },
    // Best Practises
    {
      type: 'doc',
      label: 'Best Practises',
      id: 'docs/best_practises',
    },
    // FAQ
    {
      type: 'doc',
      label: 'FAQ',
      id: 'docs/faq',
    },
    // Fundamentals
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/fundamentals',
        },
      ],
    },
    // Walkthrough
    {
      type: 'category',
      label: 'Walk Through',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docs/walkthrough',
        },
      ],
    },

    // Use Cases
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        {
          type: 'autogenerated',
          dirName: 'use_cases',
        },
      ],
    },

    // Reference
    {
      type: 'category',
      label: 'Reference',
      items: [
        // External link
        {
          type: 'link',
          label: 'ChangeLog', // The link label
          href: 'https://raw.githubusercontent.com/SuperDuperDB/superduperdb/main/CHANGELOG.md', // The external URL
        },

        // Internal link
        {
          type: 'link',
          label: 'Home', // The link label
          href: '/', // The internal path
        },
      ],
    },
  ],
};

module.exports = sidebars;
