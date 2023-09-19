import React,{useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './Display.css'
import {BsFillPersonFill,BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import {BiHomeAlt,BiMessageAlt} from "react-icons/bi"
import { Stack } from '@mui/material';
import Fab from '@mui/material/Fab';

function Display(userDetails) {
  
    console.log("inside display: ");
    console.log(userDetails.userDetails)

    const [selectedUser, setSelectedUser] = useState(0)
    userDetails = userDetails.userDetails;

    // function avatarClickNext(){

    //   console.log("Next function: "+ selectedUser);
    //   var temp = selectedUser
    //   temp = (temp+1)%userDetails.length
    //   setSelectedUser(temp);
    //   console.log("Next function after setting value: "+ selectedUser);
    // }

    // function avatarClickPrev(){

    //   console.log("Prev function: "+ selectedUser);
    //   var temp = selectedUser

    //   if(temp-1<0){
    //     temp=userDetails.length-1
    //   }
    //   else{
    //     temp--;
    //   }
    //   setSelectedUser(temp);
    //   console.log("Prev function after setting value: "+ selectedUser);
    // }

    function handleClick(key) {
      setSelectedUser(key);
    };

    return (
    <Stack style={{display: "flex"}}  direction="row" alignItems={'center'} spacing={2}>
      <div className="display">

        <div style={{display: "flex"}} >
          <Avatar 
          alt={userDetails[selectedUser].firstName} 
          src={userDetails[selectedUser].image} 
          sx={{ width: 90, height: 90, bgcolor: "white", border: "3px solid gray"}}
          />

        <Stack direction="row" spacing={-1} alignItems={'flex-end'}>
          {(()=>{
              const avatarList = [];
              for(var i = 0; i<userDetails.length; i++){
                if(i!=selectedUser){  
                  
                  avatarList.push(<Avatar 
                    alt={i}
                    src={userDetails[i].image} 
                    sx={{ bgcolor: "white", border: "2px solid gray"}} 
                    onClick={(event)=>{handleClick(event.target.alt)}}
                    />)
                }
              }
              return avatarList;
          })()}
        </Stack>

        </div>
        <div className='content-conainer'>
            <div className='normal-details'>
              <h2 style={{color: "white"}} >{userDetails[selectedUser].firstName + " " + userDetails[selectedUser].lastName}</h2>
              <h3 className='cid'>Customer ID: #{userDetails[selectedUser].customerId.slice(1,10)}</h3>
              <h4 className='gray'>Account Owner | Since {userDetails[selectedUser].customerId.slice(2,3)} Years</h4>
            </div>
            <div className='personal-details'>
              <span className='gray'><BsFillPersonFill/> {userDetails[selectedUser].username}</span><br/>
              <span className='gray'><BsFillTelephoneFill/> {userDetails[selectedUser].phone}</span><br/>
              <span className='gray'><BiMessageAlt/> {userDetails[selectedUser].email}</span><br/>
              <span className='gray'><BiHomeAlt/> {userDetails[selectedUser].address}</span>
            </div>
        </div>
      </div>
    </Stack>  
  )
}

export default Display
