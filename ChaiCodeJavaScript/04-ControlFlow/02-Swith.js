
/* switch (key) {
    case value:
        
        break;
        
        default:
            break;
            } */

// interview que
// agar break nahi lagayaa toh uske neeche ke saare cases exetute hojayege except default 

const month = 3 

switch (month) {
    case 1 :
        console.log("Jan");                
        break;
    case 2 :
        console.log("Feb");                
        break;
    case 3 :
        console.log("March");                
        break;

    default:
        console.log("Default Case");
        break;
}

const month2 = "March"
switch (month2) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "March":
        console.log("March");
        break;

    default:
        console.log("Default Case");
        break;
}