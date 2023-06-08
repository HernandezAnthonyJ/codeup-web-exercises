function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events`;

    return fetch(url, {headers: {'Authorization': 'token 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'}})
        .then(response => response.json())
        .then(events => {
            const pushEvents = events.filter(event => event.type === 'PushEvent');
            if (pushEvents.length > 0) {
                const lastCommitDate = pushEvents[0].created_at;
                return lastCommitDate;
            } else {
                throw new Error('No push events found for the user.');
            }
        });
}
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(milliseconds);
        }, milliseconds);
    });
}

// Example usage:
wait(1000).then((milliseconds) => console.log(`You'll see this after ${milliseconds} milliseconds`));
wait(3000).then((milliseconds) => console.log(`You'll see this after ${milliseconds} milliseconds`));
