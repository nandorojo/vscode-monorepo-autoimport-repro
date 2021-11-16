export {};

// this doesn't autoimport from 'react'
// even though 'react' is a dependency of 'apps/nextjs'
// if you add "react: *" to "peerDependencies" of the root package.json, it does work.
const context = createContext({});
