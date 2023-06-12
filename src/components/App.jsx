// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
// import FriendList from './FriendList';
// import friends from '../data/friends.json';
// import TransactionTable from './TransactionTable';
// import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 23,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionTable items={transactions} /> */}
    </div>
  );
}


