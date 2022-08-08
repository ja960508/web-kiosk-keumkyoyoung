import styled from 'styled-components';
import mixin from '../../styles/mixin';
import React from 'react';

function CartMenuItem() {
  return (
    <>
      <>
        <li>
          <Wrapper>
            <div>
              <img
                src="http://www.mmthcoffee.com/data/file/mm_new/thumb-1846184521_FvJity4O_379931970b3062dfc07284d9c27e7471b2e1aeae_216x216.png"
                alt="img"
              />
            </div>
            <div>
              <p>아메리카노</p>
              <p>2000</p>
            </div>
          </Wrapper>
        </li>
      </>
    </>
  );
}

export default CartMenuItem;

const Wrapper = styled.div`
  background-color: white;
  width: 100px;
  border-radius: 16px;
  ${mixin.flexMixin({ direction: 'column', align: 'center' })} p {
    text-align: center;
  }

  img {
    width: 160px;
  }
`;
