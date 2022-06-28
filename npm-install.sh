#!/bin/sh

for dir in images morecomponents statemanagement sveltekit-start sveltekit-final; do
  pushd $dir; npm install; popd
done
