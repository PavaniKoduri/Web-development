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