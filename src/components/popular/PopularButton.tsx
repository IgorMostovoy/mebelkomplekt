import React from 'react';
import { Button } from '@chakra-ui/react';

interface CatalogButtonProps {
  title: string;
  isActive: boolean;
  handleButtonClick: (id: string) => void;
  id: string;
}

const PopularButton = ({
  title,
  handleButtonClick,
  isActive,
  id,
}: CatalogButtonProps) => {
  return (
    <Button
      variant="cardButton"
      onClick={() => handleButtonClick(id)}
      isActive={isActive ? true : false}
    >
      {title}
    </Button>
  );
};

export default PopularButton;
