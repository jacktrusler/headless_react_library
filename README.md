## Vite/Tailwind/Radix/Headless UI/Typescript

Radix is a headless UI library that allows for custom styling,
you can pass tailwind styles to the components, and not have to worry about
making a multiselect for the 5th time.

Headless UI is a different library that uses tailwind out of the box with headless components,
very nice but missing some components that radix provides.

Vite is for fast building and serving of a React project, typescript is epic.

### How to use the components in your project

> Incremental adoption... Each primitive can be installed individually so you can adopt them incrementally.

-- [Radix intro](https://www.radix-ui.com/docs/primitives/overview/introduction)
-- [Headless UI]

To use the components and keep a small bundle size, you have to install the
components individually.

    npm install @radix-ui/react-checkbox
    @radix-ui/react-icons

Headless UI comes all at once

    npm install @headlessui/react
