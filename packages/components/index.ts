// 🚨 this doesn't autoimport from 'react'
// even though 'react' is a dependency of 'apps/nextjs'
// if you add "react: *" to "peerDependencies"/"devDependencies" of root package.json, it works

const context = createContext(null);
