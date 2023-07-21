async function requestGitHub() {
    const response = await fetch("https://api.github.com/repos/JetBrains-Research/anti-copy-paster");
    const data = await response.json();
    const forkElement = document.getElementById("Forked");
    const html = `<p>${data.forks_count}</p>`;
    forkElement.insertAdjacentHTML("afterend", html);
    const starElement = document.getElementById("Starred");
    const html1 = `<p>${data.watchers_count}</p>`;
    starElement.insertAdjacentHTML("afterend", html1);
    const watchElement = document.getElementById("Watched");
    const html2 = `<p>${data.subscribers_count}</p>`;
    watchElement.insertAdjacentHTML("afterend", html2);
}

async function requestSourceForge(period, lenOfPeriod) {;
    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;
    let year = currentDate.getFullYear();
    const today = `${year}-${month}-${day}`;
        if(lenOfPeriod == 2){
            currentDate.setMonth(currentDate.getMonth() - 1);
        }
        if(lenOfPeriod == 1){
            currentDate.setDate(currentDate.getDate() - 7);
        }
        if(lenOfPeriod == 0){
            currentDate.setDate(currentDate.getDate() - 1);
        }
    let day1 = currentDate.getDate();
    let month1 = currentDate.getMonth()+1;
    let year1 = currentDate.getFullYear();
    let before = `${year1}-${month1}-${day1}`
        if(lenOfPeriod == 3){
            before = "2023-06-30";
        }
    const url = "https://sourceforge.net/projects/anti-copy-paster/files/stats/json?start_date=" + before + "&end_date=" + today + "&period=daily";
    const response = await fetch(url);
    const data = await response.json();
    const downloadElement = document.getElementById(period);
    const html = `<p>${data.total}</p>`;
    console.log(data.total, period);
    downloadElement.insertAdjacentHTML("afterend", html);
}
try{
requestSourceForge("total", 3);
requestSourceForge("monthly",2);
requestSourceForge("weekly",1);
requestSourceForge("daily",0);
requestGitHub();
} catch(error) {
requestSourceForge("total", 3);
requestSourceForge("monthly",2);
requestSourceForge("weekly",1);
requestSourceForge("daily",0);
requestGitHub();
}
