import React from 'react';
import Layout from './components/Layout/Layout';
import TicketCashier from './containers/TicketCashier/TicketCashier';


function App() {
  return (
    <div >
     <Layout>
       <TicketCashier/>
     </Layout>
    </div>
  );
}

export default App;
