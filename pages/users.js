import User from "../components/user";

const Users = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // console.log(data);
  //return an object means pass props to page
  return {
    props: {
      users: data,
    },
  };
}
