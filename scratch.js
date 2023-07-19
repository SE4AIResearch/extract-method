async function requestGitHub() {
  const response = await fetch("https://api.github.com/repos/JetBrains-Research/anti-copy-paster");
  const data = await response.json();
  const forkElement = document.getElementById("Forks");
  const html = `<p>${data.forks_count}</p>`;
  forkElement.insertAdjacentHTML("afterend", html);
  const watchElement = document.getElementById("Watched")
  const html1 = `<p>${data.watchers_count}</p>`;
  watchElement.insertAdjacentHTML("afterend", html1);
}

async function requestSourceForge() {;
let currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const today = `${year}-${month}-${day}`;
const url = "https://sourceforge.net/projects/anti-copy-paster/files/stats/json?start_date=2023-06-30&end_date=" + today;
const response = await fetch(url);
const data = await response.json();
const downloadElement = document.getElementById("Download");
const html = `<p>${data.total}</p>`;
downloadElement.insertAdjacentHTML("afterend", html);
}

requestSourceForge();
requestGitHub();

