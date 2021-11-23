import React, { SetStateAction, useState } from "react";

import { StyledDropButton } from "./PriceButton.styles";
type Props = {
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
};
const PriceButton: React.FC<Props> = ({ sort, setSort }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyledDropButton>
      <button className='dropbtn' onClick={() => setShow(!show)}>
        {sort ? sort : "Sort by Price"}
      </button>
      <div className={show ? "newList" : "list"}>
        <button className='links' onClick={() => setSort("highest")}>
          High
        </button>
        <button className='links' onClick={() => setSort("lowest")}>
          Low
        </button>
        <button className='links' onClick={() => setSort("")}>
          None
        </button>
      </div>
    </StyledDropButton>
  );
};

export default PriceButton;
