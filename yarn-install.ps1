@(
  'images' 
  'morecomponents' 
  'statemanagement' 
  'sveltekit-start' 
  'sveltekit-final'
) | % { Push-Location $_; yarn; Pop-Location }
