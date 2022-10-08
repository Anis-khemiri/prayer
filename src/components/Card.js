import React from 'react';

function Card({ post }) {
  // let q = Object.keys(post.timings);
  // console.log(q)
  console.log(post.timings)
  let myArr = Object.entries(post.timings).slice(0, 8);
 myArr.lenght = 8;
  console.log(myArr);
  console.log(myArr[0]);

 
      

  return (
    <>
      {myArr.map((e, index) => {
        return (
        
          <div className="card" key={index}>
            <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <h3>
              {e[0]}:{e[1]}
            </h3>

            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              explicabo enim rem odio assumenda?
            </p> */}
            <hr />
          </div>
          
        );
      })}
    </>
  );
}

export default Card;
