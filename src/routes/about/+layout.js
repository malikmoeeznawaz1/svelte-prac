export const load = async ({ fetch }) => {
  const res = await fetch('https://dummyjson.com/users');
  const json = await res.json();  

  return { users: json.users };
};