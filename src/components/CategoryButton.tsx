import React, { SetStateAction, useState } from "react";

import { StyledDropButton } from "./PriceButton.styles";
type Props = {
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
};

const CategoryButton: React.FC<Props> = ({ category, setCategory }) => {
  const [show, setShow] = useState<boolean>(false);
  let categories = [
    "Sports",
    "Beauty",
    "Music",
    "Baby",
    "Garden",
    "Books",
    "Kids",
    "Home",
    "Jewelry",
    "Grocery",
    "Electronics",
  ];
  categories = categories.sort();

  return (
    <StyledDropButton>
      <button className='dropbtn' onClick={() => setShow(!show)}>
        {category ? category : "Sort by Category"}
      </button>
      <div className={show ? "newList" : "list"}>
        {categories.map((cat: string) => (
          <button className='links' key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
    </StyledDropButton>
  );
};

export default CategoryButton;
