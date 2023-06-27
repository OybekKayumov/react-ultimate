import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    currency: "$",
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    currency: "€",
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    currency: "€",
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend); 

    // optional chaining ?.id
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend); 

    // auto close "add friend" block when opens "split bill" block
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log('value: ', value);

    setFriends(friends => 
      friends.map(friend => 
        friend.id === selectedFriend.id 
          ? {...friend, balance: friend.balance + value} 
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className='sidebar'>
        <FriendsList 
          friends={friends} 
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        { showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} /> }

        <Button
          onClick={handleShowAddFriend}
        >
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      { selectedFriend &&  
          <FormSplitBill 
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
      }
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  // const friends = initialFriends;

  return (
    <ul>
      {friends.map(friend => (
        <Friend 
          friend={friend} 
          key={friend.id} 
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  )
}

function Friend({ friend, onSelection, selectedFriend }) {
  // optional chaining ?.id
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      { friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} {Math.abs(friend.balance)}{friend.currency}.
        </p>
      )}
      { friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you {Math.abs(friend.balance)}{friend.currency}.
        </p>
      )}
      { friend.balance === 0 && (
        <p>
          You and {friend.name} are even
        </p>
      )}

      <Button 
        onClick={e => onSelection(friend)}
      >
        {/* Select */}
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  )
}

function Button({ children, onClick }) {
  return (
    <button 
      className="button" onClick={onClick}
    >
      {children}
    </button>
  )
  
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    console.log('newFriend: ', newFriend);
    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form 
      className='form-add-friend'
      onSubmit={handleSubmit}
    >
      <label>Friend Name</label>
      <input type="text" name="" id="" 
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input type="text" 
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    
    // guard preventing form from being submitted if there no bill...
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form 
      className="form-split-bill"
      onSubmit={handleSubmit}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill Value</label>
      <input 
        type="text"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input 
        type="text"
        value={paidByUser}
        onChange={e => setPaidByUser(Number(e.target.value) > bill 
          ? paidByUser 
          : Number(e.target.value)
        )}
      />

      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill</label>
      <select 
        name="" id=""
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}

export default App;
