export const getUser=async()=>{
  const url = "https://randomuser.me/api/?results=30";
  const resp = await fetch(url);
  const {results} = await resp.json();
  const users= results.map( img => {
      
      return{
          id:img.login.uuid,
          name: img.name.first+' '+img.name.last,
          url: img.picture.large,
      }
     
  });
  return users;

}