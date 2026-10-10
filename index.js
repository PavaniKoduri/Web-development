var users=[
    {
        name:"John Doe",
        gender:"Male",
        image:"john.png"
    },
    {
        name:"Jane Doe",
        gender:"Female",
        image:"jane.png"
    }
]

var index=0;

function toggle(){
    if(index==0){
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("userName").innerText=users[index].name;
    document.getElementById("userImage").src=users[index].image;
    document.getElementById("userGender").innerText=users[index].gender;
}

function randomUser(){
    fetch("https://randomuser.me/api/")
        .then(function(rawData){
            return rawData.json();
        })
        .then(function(jsonData){
            var user=jsonData.results[0];
            var gender=user.gender;
            var name=user.name.title+" "+user.name.first+" "+user.name.last;
            var image=user.picture.large;
            document.getElementById("userName").innerText=name;
            document.getElementById("userImage").src=image;
            document.getElementById("userGender").innerText=gender;
        })
        .catch(function(error){
            console.log("Error fetching random user:", error);
        });
}