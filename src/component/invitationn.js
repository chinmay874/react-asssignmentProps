//import {fragment} from React;
const Info={
    Subject : "Birthday party Invitation",
    email : "jaGdish@gmail.com",
    sender : "jaGdish",
    receiver : "jaGdish",
    event : "birthday party",
    friends : ["Ritu" , "Saurabh" , "Kartik"],
    place: "near Green field Avenue",
}
const Invitation=(props)=>{
    return(
        <div>
    `Subject : {props.Subject} 
    To : {props.email}
  
    Hi , {props.receiver} 
  
    I am having a {props.event} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - {props.friends} .
  
    My house is behind our school , {props.place} .
  
    I hope you will come and see you soon .
  
    from ,
    {props.sender}`

        </div>
    )
}
export default Invitation