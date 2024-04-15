
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "full access granted";
}
else if (userRole === "manager") {
    accessLevel = "limited access granted";
} 
else {
    accessLevel = "no access granted";
}

console.log("access level;", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "welcome, admin!";
    } else {
        userMessage = "welcome, user!";
    }
} else {
    userMessage = "pleas log in to access the system.";
}

console.log("user message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "Manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;

    default:
        userCategory = "unknown";
        break;
}


console.log("user category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


// Practice task
let person = "Employee";
let services;

if (person === "Employee") {
    services = "full access to Dietary Services";
}
else if (person === "Enrolled Member") {
    services = "full access to Dietary Services and one-on-one interaction with a dietician";
} 
else if (person === "Subscriber") {
    services = "partial access to Dietary Services";
} 
else if (person === "Non-Subscriber") {
    services = "need to enroll or at least subscribe first to avail this facility"
} 

console.log(services);