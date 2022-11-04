@(
  'images' 
  'morecomponents' 
  'state-and-props'
  'statemanagement' 
  'sveltekit-start' 
  'sveltekit-final'
) | % { Push-Location $_; yarn; Pop-Location }
