
import React from "react";

function Pagenation({ GoToNextPage, GoToPrePage }) {
  return (
    <div className="pagination">
      {GoToPrePage && <button onClick={GoToPrePage}>Previous Page</button>}
      {GoToNextPage && <button onClick={GoToNextPage}>Next Page</button>}
    </div>
  );
}

export default Pagenation;
