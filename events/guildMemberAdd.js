module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hello **' + username + '** Welcome the Discord Server');

};
