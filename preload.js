document.addEventListener('DOMContentLoaded', function() {
    // Assuming consonants is already defined somewhere
    const allSounds = [...consonants, ...vowelsAll];
    preloadAudioFiles(getAudioPaths(allSounds));
  });
  
  function preloadAudioFiles(filePaths) {
    filePaths.forEach(function(file) {
      var link = document.createElement('link');
      link.rel = 'preload';
      link.href = file;
      link.as = 'audio';
      document.head.appendChild(link);
    });
  }
  
  function getAudioPaths(items) {
    return items.map(function(item) {
      return item.audio;
    });
  }
  