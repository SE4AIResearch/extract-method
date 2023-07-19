async function requestGitHub() {
  const response = await fetch("https://api.github.com/repos/JetBrains-Research/anti-copy-paster");
  const data = await response.json();
  const forkElement = document.getElementById("Forks");
  const html = `<p>${data.forks_count}</p>`;
  forkElement.insertAdjacentHTML("afterend", html);
  const watchElement = document.getElementById("Watched")
  const html1 = `<p>${data.watchers_count}`;
  watchElement.insertAdjacentHTML("afterend", html1);
  return data;
}
requestGitHub();

