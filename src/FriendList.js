import{Link} from 'react-router-dom';
import './App.css';
function FriendList(){
    return(
        <div className="App-chatroom-text ">
            FriendList
            <Link to="/">
            <button>
                Go to Chatroom
            </button>
            </Link>
     <div>
     <Link to="/">
            <button>
                Go to Chatroom
            </button>
            </Link>
     </div>
     
     
        </div>
    )
}
export default FriendList;