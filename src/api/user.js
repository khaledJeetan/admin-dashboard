
import { reactive, ref } from 'vue';
import { server, request } from './config.js'

getUsers();
var loggedUser = reactive({
  user: login("khaled@gmail.com","123456")
});
var getClients = ref(0);
var getVendors = ref(0);
var getSuppliers = ref(0);
var users = reactive([]);

async function login(email, password) {
    try {
      const data = {
        password: password,
        email: email
      };
      console.log("before sending request")
  
      const response = await fetch(`${server}users/login`, request('POST', data));
      const user = await response.json();

      loggedUser.user = user;
      await getImgUrl(loggedUser.user);
      getUsers();
      return true;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught by the caller if needed
    }
  }

  function initializeUser(){
    login('client@gmail.com','123456');
  }

async function getImgUrl(user){

  if(user.url != null){
    try{
    let img = `${server}images/bytes/${user.url}`;
    // const response = await fetch(img, request('GET',null));
    // const responseText = await response.text();
    // return "data:image/jpeg;"+responseText;
    const response = await fetch(img, request('GET', null));
const responseData = await response.arrayBuffer();
const blob = new Blob([responseData], { type: 'image/jpeg' });
const imageUrl = URL.createObjectURL(blob);
console.log(imageUrl);
user.url = imageUrl;
// return imageUrl;
}catch (error) {
    console.error('Error fetching image:', error);
  }
    // return null;
}
  else{
    user.url = 'src/assets/user.jpg'
  }
}

async function addUser(user){
    console.log("before adding new user")
    const response = await fetch(`${server}users`, request('POST', user));
    if(response.status == 200){
        const res = await response.json();
        users.push(res);
        console.log("the added user is :"+ res);
        return true;
    }
    return false;
}

async function getUsers() {
    try {
     
      console.log("before fetching users")
  
      const response = await fetch(`${server}users`, request('GET', null));
      const userList = await response.json();
    
      getClients.value = userList.filter((u)=> u.role == "CLIENT" ).length
      getVendors.value = userList.filter((u)=> u.role == "VENDOR" ).length
      getSuppliers.value = userList.filter((u)=> u.role == "SUPPLIER" ).length
      users.splice(0, users.length, ...userList); // Update the users array
      users.forEach((user) => getImgUrl(user));
      return users;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught by the caller if needed
    }
  }

async function deleteUser(userId) {
    try {
     
      console.log("before Deleting user: "+userId)
  
      const response = await fetch(`${server}users/${userId}`, request('DELETE', null));
      if(response.status == 200){
      getUsers();
      return "User Deleted successfully.";}
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
  }

async function updateUser(user){
  console.log("before updating user info: " + user.id);
  const response = await fetch(`${server}users/${user.id}`,request('PUT',user));
  if(response.status == 200){
    const res = await response.json();
    users.filter((user)=> user.id=== res.id )[0] = await res;
    console.log("the updated user is :"+ await res);
    return true;
}
return false;
}

export {login, loggedUser,deleteUser, initializeUser,updateUser, getImgUrl,getClients,getVendors,getSuppliers, users, getUsers, addUser}
