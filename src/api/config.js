
const server = "http://localhost:8080/";

function request(rMethod,data){
    if(data !== null){
return {
    method: rMethod,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };}
  else{
    return {
        method: rMethod,
        headers: {
          'Content-Type': 'application/json'
        }
  }}
return null;
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

export { server, request, getImgUrl }