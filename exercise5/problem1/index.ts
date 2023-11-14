function callbackExec(callback: () => void) {
  setTimeout(callback, 2000);
}

export default callbackExec;