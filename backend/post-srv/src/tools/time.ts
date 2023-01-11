
function getTime(): string{
    const date = new Date()
    const hours = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();
    return "["+hours+":"+minute+":"+sec+"] [Server INFO]: ";
}

export {getTime}