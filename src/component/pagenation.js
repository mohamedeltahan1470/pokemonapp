import React from "react";

function Pagenation({ GoToNextPage, GoToPrePage }) {
  return (
    <div>
      {GoToNextPage && <button onClick={GoToNextPage}>Next Page</button>}
      {GoToPrePage && <button onClick={GoToPrePage}>Previous Page</button>}
    </div>
  );
}

export default Pagenation;
