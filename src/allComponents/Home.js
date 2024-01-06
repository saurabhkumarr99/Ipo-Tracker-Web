// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../App.css';

// // const Home = () => {
// //   return (
// //     <div data-testid="home-component">
// //       <div className="bg-primary py-4">
// //         <div className="container">
// //           <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
// //         </div>
// //       </div>
// //       <div className="container mt-4">
// //         <div className="row">
// //           <div className="col-md-8 mx-auto">
// //             <div className="overlay text-center">
// //               <div className="text">
// //                 <p className="lead">
// //                   IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
// //                 </p>
// //                 <h2>Key Features:</h2>
// //                 <ul className="list-group">
// //                   <li className="list-group-item">Explore different stock categories and sectors</li>
// //                   <li className="list-group-item">Create a personalized dashboard tailored to your preferences</li>
// //                   <li className="list-group-item">Experience real-time data visualization with interactive charts</li>
// //                   <li className="list-group-item">Customize settings for an enriched and personalized experience</li>
// //                 </ul>
// //                 <br />
// //                 <a href="/login" className="btn btn-primary btn-lg">Explore Now</a>
// //                 <p>Begin exploring our feature-rich platform today!</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const Home = () => {
//   return (
//     <div data-testid="home-component" className="bg-image" >
//       <div className="bg-primary py-4">
//         <div className="container">
//           <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
//         </div>
//       </div>
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-md-8 mx-auto">
//             <div className="overlay text-center">
//               <div className="text">
//                 <p className="lead">
//                   IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
//                 </p>
//                 <h2>Key Features:</h2>
//                 <ul className="list-group">
//                   <li className="list-group-item">Explore different stock categories and sectors</li>
//                   <li className="list-group-item">Create a personalized dashboard tailored to your preferences</li>
//                   <li className="list-group-item">Experience real-time data visualization with interactive charts</li>
//                   <li className="list-group-item">Customize settings for an enriched and personalized experience</li>
//                 </ul>
//                 <br />
//                 <a href="/login" className="btn btn-primary btn-lg">Explore Now</a>
//                 <p>Begin exploring our feature-rich platform today!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const Home = () => {
//   return (
//     <div data-testid="home-component">
//       <div className="bg-primary py-4">
//         <div className="container">
//           <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
//         </div>
//       </div>
//       <div className="bg-image">
//         <div className="container mt-4">
//           <div className="row">
//             <div className="col-md-8 mx-auto">
//               <div className="overlay text-center">
//                 <div className="text">
//                   <p className="lead">
//                     IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
//                   </p>
//                   <h2>Key Features:</h2>
//                   <ul className="list-group">
//                     <li className="list-group-item">Explore different stock categories and sectors</li>
//                     <li className="list-group-item">Create a personalized dashboard tailored to your preferences</li>
//                     <li className="list-group-item">Experience real-time data visualization with interactive charts</li>
//                     <li className="list-group-item">Customize settings for an enriched and personalized experience</li>
//                   </ul>
//                   <br />
//                   <a href="/login" className="btn btn-primary btn-lg">Explore Now</a>
//                   <p>Begin exploring our feature-rich platform today!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div data-testid="home-component">
      <div className="bg-primary py-4">
        <div className="container">
          <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
        </div>
      </div>
      <div className="bg-image">
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="overlay text-center">
                <div className="text">
                  <p className="lead " style={{ color: 'blue',fontWeight: 'bold' }}>
                    IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
                  </p>
                  <h2>Key Features:</h2>
                  <ul className="list-group">
                    <li className="list-group-item">Explore different stock categories and sectors</li>
                    <li className="list-group-item">Create a personalized dashboard tailored to your preferences</li>
                    <li className="list-group-item">Experience real-time data visualization with interactive charts</li>
                    <li className="list-group-item">Customize settings for an enriched and personalized experience</li>
                  </ul>
                  <br />
                  <a href="/login" className="btn btn-primary btn-lg">Explore Now</a>
                  <p>Begin exploring our feature-rich platform today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
