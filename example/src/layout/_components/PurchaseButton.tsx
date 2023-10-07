import styled from 'styled-components';
import React from 'react';
import {Grid, FCChildrenProps} from 'bear-react-grid';

interface IProps extends FCChildrenProps{
   className?: string
}

const PurchaseButton = ({
    className,
    children
}: IProps) => {
    return <PurchaseButtonRoot columns="45px auto" gap="10px" className={className} as="button">
        {children}
    </PurchaseButtonRoot>;
};

export default PurchaseButton;


const PurchaseButtonRoot = styled(Grid)`
  background: linear-gradient(rgb(255, 255, 255) 0%, rgb(217, 223, 255) 100%);
  border: none;
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 0 0.5px inset, rgba(23, 0, 102, 0.2) 0 20px 40px, rgba(0, 0, 0, 0.1) 0 1px 3px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  padding: 4px;
  color: #000;

  text-align: left;
  align-items: center;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;

