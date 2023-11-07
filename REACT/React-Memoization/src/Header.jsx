import React from "react";

function Header({data}) {
  console.log("Header Rendered");
  return <div>Header
    <br /><br />
<code>{JSON.stringify(data)}</code>
  </div>;
}

export default React.memo(Header);
