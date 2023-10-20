export default defineEventHandler((event) => {
    const hwid = getRouterParam(event, 'hwid')

    const bypass = async () => {
        const cookie = "Anti-Bypass=BypassersKHTTP_VERSION5069e4e61337c2fbea2368f9da1a07725f2a65bb1eab2d8de6dc9cf83e7a683e; .pipe=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJLMGc4SjNsRmY1TW43UWw4bVh5bytpNnVBeGh4aWFSYTU2bldDZEcxQnlNPSIsImUiOjE2ODkyNTAyODEsImlzc3VlZCI6MTY4OTI0NjY4MS44MzksInNhbHQiOiJzYWx0eSIsImNvbm5lY3RvciI6LTF9.tHnUGnosgCctAafGTgta4F1_1KQezhvdIATrj9YwQU0";
        const url = [
            "https://flux.li/windows/start.php?HWID=" + hwid,
            "https://flux.li/windows/start.php?7b20bcc1dfe26db966bb84f159da392f=false&HWID=" + hwid,
            "https://fluxteam.net/windows/checkpoint/check1.php",
            "https://fluxteam.net/windows/checkpoint/check2.php",
            "https://fluxteam.net/windows/checkpoint/main.php",
        ];
        const header = {
            'Referer': 'https://linkvertise.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
        };
    
        await $fetch(url[0], {
            method: 'GET',
            headers: { 'Referer': 'https://fluxteam.net/' }
        });
    
        await $fetch(url[1], {
            method: 'GET',
            headers: { 
                'Referer': `${url[0]}`,
                'Cookie': cookie
            }
        });
    
        await $fetch(url[2], {
            method: 'GET',
            headers: header
        });
    
        await $fetch(url[3], {
            method: 'GET',
            headers: header
        });
    
        const response = await fetch(url[4], {
            method: 'GET',
            headers: header
        });
    
        const text = await response.text();
        return text;
    };

    return bypass();
})