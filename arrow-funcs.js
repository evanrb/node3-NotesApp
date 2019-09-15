/*
const square = function(x) {
    return x * x
}
*/
/*
const square = (x) => {
    return x * x
}*/

//const square = (x) => x * x

const event = {
    name: "Birthday Party",
    guestList: ["evan", "joe"],
    printGuestList: function (){
        console.log("Guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    },
    printGuestListAlt(){
        console.log("Guest list for " + this.name)
        
    }
}