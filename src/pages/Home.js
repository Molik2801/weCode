import React , {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  const [RoomId , setRoomId] = useState('');
  const [username , setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room');
  };

  const joinRoom = () =>{
    if(!RoomId || !username){
        toast.error('Room Id & Username is required');
        return;
    }

    //Redirect
    navigate(`/editor/${RoomId}` , {
        state : {
            username,
        },
    });
  };

  const inputEnter = (e) => {
    if(e.code === 'Enter'){
        joinRoom();
    }
  };

  return (
    <div className="HomePageWrapper">
        <div className="FormWrapper">
            <img id = "img" src = "/weCode.png" alt = "weCode-logo"/>
            <h4 className="mainLabel">Paste Invitation Room Id</h4>
            <div className="inputGroup">
                <input
                   type="text"
                   className='inputBox' 
                   placeholder='ROOM ID'
                   onChange={(e) => setRoomId(e.target.value)}
                   value = {RoomId}
                   onKeyUp={inputEnter}
                ></input>
                <input 
                    type="text" 
                    className='inputBox' 
                    placeholder='USERNAME'
                    onChange={(e) => setUsername(e.target.value)}
                    value = {username}
                    onKeyUp={inputEnter}
                ></input>
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className='createInfo'>
                    If you don't have an invite then create &nbsp;
                    <a onClick={createNewRoom} href="" className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>Built with ❤️ by <a href="https://github.com/Molik2801">Molik</a></h4>
        </footer>
    </div>
  )
}

export default Home