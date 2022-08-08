import React, { FC } from 'react';

// interface MenuHeaderProps {
//   name?: string;
// }

const MenuHeader: FC = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>커피</button>
          </li>
          <li>
            <button>에이드</button>
          </li>
          <li>
            <button>티</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuHeader;
