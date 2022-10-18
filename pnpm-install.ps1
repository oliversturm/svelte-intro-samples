@(
  'images' 
  'morecomponents' 
  'statemanagement' 
  'sveltekit-start' 
  'sveltekit-final'
) | % { Push-Location $_; pnpm install; Pop-Location }
