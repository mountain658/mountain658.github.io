function loadScript(scriptUrl, options) {
  var script = document.createElement('script');
  script.src = scriptUrl;
  script.onload = function() {
    console.log('Script loaded successfully');
  };
  script.onerror = function() {
    console.log('Failed to load script: ' + scriptUrl);
    var backups = options && options.backups;
    if (backups && backups.length > 0) {
      console.log('Attempting to load backups...');
      loadBackupScripts(backups, 0);
    } else {
      console.log('No backups available.');
    }
  };
  document.head.appendChild(script);
}

function loadBackupScripts(backups, currentIndex) {
  if (currentIndex >= backups.length) {
    console.log('All backup scripts failed to load.');
    return;
  }

  var backupScriptUrl = backups[currentIndex];
  var backupScript = document.createElement('script');
  backupScript.src = backupScriptUrl;
  backupScript.onload = function() {
    console.log('Backup script loaded successfully');
  };
  backupScript.onerror = function() {
    console.log('Failed to load backup script: ' + backupScriptUrl);
    loadBackupScripts(backups, currentIndex + 1);
  };
  document.head.appendChild(backupScript);
}

loadScript('https://unpkg.com/@ruffle-rs/ruffle', { backups: ['https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle/ruffle.min.js', './ruffle/ruffle.js'] });
