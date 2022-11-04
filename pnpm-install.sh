#!/bin/sh

for dir in images morecomponents state-and-props statemanagement sveltekit-start sveltekit-final; do
  pushd $dir; pnpm install; popd
done
