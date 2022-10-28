// Get Subscribers
const youtubeKey = 'Youtube KEY';
const youtubeUser = 'YouTube user KEY';

const subCount = document.getElementById('subCount');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })
    
}

getSubscribers();

