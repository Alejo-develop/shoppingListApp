import {useState} from 'react';
import {violet} from '../../../utils/style.constants';
import { bannersCategory } from '../../../utils/img.constants';

const CategorySectionHook = () => {
  const banners = bannersCategory
  const [color, setColor] = useState<string>(violet);
  const [img, setImg] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return {
    color,
    isOpen,
    img,
    setImg,
    setIsOpen,
    setColor,
  };
};

export default CategorySectionHook;
