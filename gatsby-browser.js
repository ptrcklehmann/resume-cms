export const onServiceWorkerUpdateReady = () => {

  const answer = window.confirm(
    'Welcome back! 🌷 I have made some changes. Reload to display the latest version?'
  );
  if (answer === true) {
    window.location.reload();
  }
};
