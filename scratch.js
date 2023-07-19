async function requestGitHub() {
  const response = await fetch("https://api.github.com/repos/JetBrains-Research/anti-copy-paster");
  const data = await response.json();

  console.log(data.watchers_count);
  return data;
}
requestGitHub();

