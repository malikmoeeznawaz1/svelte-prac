export const load = async ({ params }) => {
  const res = await fetch('https://dummyjson.com/users');
  const json = await res.json();  

  const user = json.users.find(user => user.id === parseInt(params.slug));

  return { user };
};
