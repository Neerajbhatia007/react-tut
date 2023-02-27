import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      // <>
      // <h1>LOADING</h1>
      // </>
      <div className="spin-container">
        <div className="spin" id="loader"></div>
        <div className="spin" id="loader2"></div>
        <div className="spin" id="loader3"></div>
        <div className="spin" id="loader4"></div>
        <span id="text">LOADING...</span>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {hits.map((curpost) => {
          const { title, author, objectID, url, num_comments } = curpost;
          return (
            <div className="col-md-3 mt-3" key={objectID}>
              {/* <div className="col-md-4"> */}
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">By {author}</p>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {num_comments} comments
                  </h6>
                  <a className="button1" target="_blank" href={url}>
                    Read More
                  </a>
                </div>
              {/* </div> */}
              </div>
            </div>

            // <div className="blog_post" key={objectID}>
            //   <div className="container_copy">
            //     <h1>{title}</h1>
            //     {/* <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p> */}
            //     <h3> By {author}</h3>
            //     <h4>{num_comments} comments</h4>
            //     <a className="btn_primary" href={url} target="_blank">
            //       Read More
            //     </a>
            //   </div>
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
