import "./App.css";
import { graphql, useLazyLoadQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        users(first: 3) {
          nodes {
            id
            name
            username
          }
        }
      }
    `,
    {}
  );

  if (!data.users?.nodes) {
    return <div>No users present!</div>;
  }

  return (
    <div>
      <ul>
        {data.users.nodes.map((user) => {
          if (!user) {
            return null;
          }

          return (
            <li key={user.id}>
              {user.name} ({user.username})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
