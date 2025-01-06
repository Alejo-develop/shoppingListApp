import { useState } from "react";
import MessageComponent from "../../message/message.component";
import { deletedWishService } from "../../../services/wish.services";
import { PurchaseResponseInterface } from "../../../interfaces/item.interface";
import { wishToPurchasedServices } from "../../../services/purchase.services";
import { useGlobalContext } from "../../../context/global.context";

const UseItemCard = (id: number, color: string, item: PurchaseResponseInterface) => {
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const globalContext = useGlobalContext();

  const deleteItem = async () => {
    try {
      await deletedWishService(id)
      
      globalContext.changeStatusUpdate(true);
      setVisibleModal(false)
      MessageComponent({
        color: color,
        text1: 'Wish deleted',
        type: "success",
        position:"top",
        text2: 'Your wish has been successfully deleted',
      }) 
    } catch (err) {
      MessageComponent({
        color: color,
        text1: 'Error',
        type: "error",
        position:"top",
        text2: 'Cannot posible delete item :C',
      })
    }
  };

  const changeToPurchased = async () => {
    try {
      await deletedWishService(id)
      await wishToPurchasedServices(item)
      
      globalContext.changeStatusUpdate(true);
      setVisibleModal(false)
      MessageComponent({
        color: color,
        text1: 'Now your wish was purchased!',
        type: "success",
        position:"top",
        text2: 'Your wish has been purchased succesfully',
      }) 
    } catch (err) {
      MessageComponent({
        color: color,
        text1: 'Error',
        type: "error",
        position:"top",
        text2: 'Cannot posible change to purchased :C',
      })
    }
  };

  return {
    isVisibleModal,
    setVisibleModal,
    deleteItem,
    changeToPurchased
  };
};

export default UseItemCard;
