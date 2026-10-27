// Registers the service worker of the phone demo. While it saves the demo to the phone, a small note at the
// bottom shows how much is saved, then that the demo works without internet. Later visits show nothing.
(function () {
  if (!('serviceWorker' in navigator)) return;
  var note = document.getElementById('offline-note');
  var hideTimer;
  function show(text, hideAfter) {
    note.textContent = text;
    note.style.display = 'block';
    note.style.opacity = '1';
    clearTimeout(hideTimer);
    if (hideAfter) hideTimer = setTimeout(function () {
      note.style.opacity = '0';
      setTimeout(function () { note.style.display = 'none'; }, 400);
    }, hideAfter);
  }
  // onmessage (not addEventListener) also starts delivery of the worker's messages
  navigator.serviceWorker.onmessage = function (e) {
    var m = e.data || {};
    if (m.type === 'cache-progress') {
      if (m.done < m.total) show('Сохраняю демо на телефон… ' + Math.round(100 * m.done / m.total) + '%');
      else show('Готово — демо работает без интернета', 3500);
    } else if (m.type === 'cache-error') {
      show('Сохранилось не всё — откройте ещё раз с интернетом', 5000);
    }
  };
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js'); });
})();
