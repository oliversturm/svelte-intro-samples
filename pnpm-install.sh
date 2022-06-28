#!/bin/sh

for dir in images morecomponents statemanagement sveltekit-start sveltekit-final; do
  pushd $dir; pnpm install; popd
done
