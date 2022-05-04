import React, {useState} from 'react'

const Profile = () => {
  console.log("========== Inside Profile  ======");
  // useState() will return an array of getter, setter 
  const [profile, setProfile] =  useState("Arun"); 
  console.log(profile); //state data 
  console.log(setProfile); // fn to update state data

  const [ account, setAccount ] = useState({
    name: 'arun',
    createdDate: new Date()
  });

  // event handler 
  const handleChangeProfile = () => {
    // will change the profile data using setProfile() fn
    setProfile("John"); // mutating the state here. -- results in re-rendering
  }

  const handleChangeAccount = () => {
    // the following will not merge with existing property createdDate. createdDate would be removed.
    // setAccount({
    //   name: 'vj'
    // }); 

    setAccount({
      ...account, // by spreading I retain the other properties of this obj
      name: "vj" // changing only name property
    })
  }

  console.log(account);

  return (
    <div>
      <h2>useState() Hook Demo -- to have state within functional comp</h2>
      <p>{profile}</p>
      <button onClick={handleChangeProfile}>Change Profile Name</button>
      <hr />
      <p>{account.name}</p>
      <p>{account.createdDate.getDate()}</p>
      <button onClick={handleChangeAccount}>Change Account Name</button>
    </div>
  )
}

export default Profile;