import React, { SetStateAction, useState } from "react";

import { StyledDropButton } from "./PriceButton.styles";
type Props = {
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
};
const CategoryButton: React.FC<Props> = ({ category, setCategory }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyledDropButton>
      <button className='dropbtn' onClick={() => setShow(!show)}>
        {category ? category : "Sort by Category"}
      </button>
      <div className={show ? "newList" : "list"}>
        <button className='links' onClick={() => setCategory("highest")}>
          High
        </button>
        {/* map through categories to make items */}
      </div>
    </StyledDropButton>
  );
};

export default CategoryButton;
