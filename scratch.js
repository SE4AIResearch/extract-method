async function requestGitHub(stat) {
    const response = await fetch("https://api.github.com/repos/JetBrains-Research/anti-copy-paster");
    const data = await response.json();
    if(stat == "Forked"){
         const forkElement = document.getElementById(stat);
         const html = `<p>${data.forks_count}</p>`;
         forkElement.insertAdjacentHTML("afterend", html);
    } else if (stat == "Starred"){
        const starElement = document.getElementById(stat);
        const html1 = `<p>${data.watchers_count}</p>`;
        starElement.insertAdjacentHTML("afterend", html1);
    }else if (stat == "Watched"){
        const watchElement = document.getElementById("Watched");
        const html2 = `<p>${data.subscribers_count}</p>`;
        watchElement.insertAdjacentHTML("afterend", html2);
    }
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
    const html = `<p id=${period}1>${data.total}</p>`;
    console.log(data.total, period);
    downloadElement.insertAdjacentHTML("afterend", html);
}
function clipboardCopy(text){
navigator.clipboard.writeText(text);
}

let page = document.body.className;
console.log(page);
if(page == "HomePage"){
    try{
        requestSourceForge("total",3);
        requestSourceForge("monthly",2);
        requestGitHub("Starred");
    }catch (error) {
        requestSourceForge("total",3);
        requestSourceForge("monthly",2);
        requestGitHub("Starred");
    }
} else if (page == "RecommenderPage") {
    try{
    requestSourceForge("total", 3);
    requestSourceForge("monthly",2);
    requestSourceForge("weekly",1);
    requestSourceForge("daily",0);
    requestGitHub("Forked");
    requestGitHub("Starred");
    requestGitHub("Watched");
    } catch(error) {
    requestSourceForge("total", 3);
    requestSourceForge("monthly",2);
    requestSourceForge("weekly",1);
    requestSourceForge("daily",0);
    requestGitHub("Forked");
    requestGitHub("Starred");
    requestGitHub("Watched");
    }
}

