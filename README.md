# vscode-monorepo-autoimport-repro
A monorepo's TS autoimport doesn't work in VSCode. https://github.com/microsoft/TypeScript/pull/38923#issuecomment-970549122

🚨 Look in `packages/components/index.ts`. If you open this in `VSCode`, you'll see that `createContext` does not autoimport.

✅ Meanwhile, importing the same variable in `apps/nextjs/pages/index.ts` works fine.

This is coming from `@types/react`.

## Expected behavior

All variables from `@types/react` should autoimport in *any* package from this monorepo. 

If `@types/react` is a dependency of `apps/nextjs`, then `packages/components` should get autoimport for it.

## Actual behavior

The only way to get autoimport for `react` inside of `packages/*` if I add `@types/react` to the root `package.json`, or to the `package.json` of every folder in `packages/*`.

This doesn't match runtime behavior.

## Hack solution

Add `"@types/react": "*"` to root `package.json`. This is bad though: the root package shouldn't have dependencies like that.

