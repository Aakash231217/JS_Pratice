const myObject = {
    game1:'NFS',
    game2:"GTA"
}
for(const key in myObject){
    console.log(`${key} for shortcut game is`)
}
const lang = ["js","rb","c++"];
for(const key in lang){
    console.log(key,lang[key]);
}