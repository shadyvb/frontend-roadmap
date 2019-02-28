function supportsImports() {
    return 'import' in document.createElement('link');
  }
  
  if (supportsImports()) {
    // Good to go!
  } else {
    // Use other libraries/require systems to load files.
  }