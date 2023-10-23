import { React, useState } from "react";

function List(props) {
  const [searchValue, setSearchValue] = useState("");

  const filtered = props.contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
  });

  console.log(filtered);

  return (
    <div>
      <input
        placeholder="Search Contact"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <ul className="list">
        {filtered.map((item, i) => {
            return (
                <li key={i}> 
                <span>{item.fullName}</span>
                <span>{item.phoneNumber}</span></li>
            )
        })}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
      <br></br>
    </div>
  );
}

export default List;
