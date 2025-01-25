function Profile() {
  const user = {
    name: "Usman Abuhuseina",
    imageUrl:
      "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
    description: "I am a Video Editor and a Chess Player",
  };


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={user.imageUrl} className="card-img-top" alt="..."  />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">
          {user.description}
        </p>
        <a href="#" className="btn btn-primary">
          View my detailed profile
        </a>
      </div>
    </div>
  );
}

export default Profile;


  // return (
  //     <>
  //       <h1>{user.name}</h1>
  //       <img
  //         className="avatar"
  //         src={user.imageUrl}
  //         alt={'Photo of ' + user.name}
  //         style={{
  //           width: user.imageSize,
  //           height: user.imageSize
  //         }}
  //       />
  //     </>
  //   );

