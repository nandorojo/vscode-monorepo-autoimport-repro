# vscode-monorepo-autoimport-repro
A monorepo's TS autoimport doesn't work in VSCode. https://github.com/microsoft/TypeScript/pull/38923#issuecomment-970549122

## Screenshots

🚨 Look in `packages/components/index.ts`. If you open this in `VSCode`, you'll see that `createContext` does not autoimport.

<img width="1101" alt="Screen Shot 2021-11-16 at 2 07 42 PM" src="https://user-images.githubusercontent.com/13172299/142049610-0aa32b60-a956-4d53-a0e1-7f3d2236601e.png">

✅ Meanwhile, importing the same variable in `apps/nextjs/pages/index.ts` works fine.

 <img width="923" alt="Screen Shot 2021-11-16 at 2 07 24 PM" src="https://user-images.githubusercontent.com/13172299/142049563-86b2c028-1077-42cb-855f-65951cacb173.png">

This is coming from `@types/react`.

## Expected behavior

All variables from `@types/react` should autoimport in *any* package from this monorepo. 

If `@types/react` is a dependency of `apps/nextjs`, then `packages/components` should get autoimport for it.

## Actual behavior

The only way to get autoimport for `react` inside of `packages/*` if I add `@types/react` to the root `package.json`, or to the `package.json` of every folder in `packages/*`.

This doesn't match runtime behavior.

## Hack solution

Add `"@types/react": "*"` to root `package.json`. This is bad though: the root package shouldn't have dependencies like that.

## Attempted solutions

Adding a `tsconfig` to the `packages/*` did not help.

## Related discussion

See https://github.com/microsoft/TypeScript/pull/38923#issuecomment-970509969
