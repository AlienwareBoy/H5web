function openNewPage(obj) {
  let _error = ''
  obj = JSON.stringify(obj)
  try {
    window.webkit.messageHandlers.openNewPage.postMessage(obj)
  } catch (error) {
    _error = error
    try {
      const _obj = getString(obj)
      messageWatcher.openNewPage1(_obj)
    } catch (error) {
      _error = error
    }
  }
  if (_error) {
    _log(_error)
  }
}
