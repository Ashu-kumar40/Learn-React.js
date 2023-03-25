function Profile(props){
    // we can destructure the props object in the function parameter itself in function based components as shown below 
    const {name, lastname} = props;

    return(
        <div>
            <h1>My name is {name} {lastname}</h1>
        </div>
    )
}

export default Profile;