import { useState } from "react";
import usePromotions from "../../../hooks/usePromotions";
import PromotionAction from "./PromotionAction";

import PromotionTable from "./PromotionTable";
import PromotionModal from "./PromotionModal";

export default function PromotionList() {
  const [showModal, setShowModal] = useState(false);
  const [promotions, setPromotions] = usePromotions();
  const [updatePromotion, setUpdatePromotion] = useState(null);

  console.log(promotions);

  const handleAddPromotion = (newPromotion, isAdd) => {
    if (isAdd) setPromotions([...promotions, newPromotion]);
    else
      setPromotions(
        promotions.map((promotion) => {
          if (promotion._id === newPromotion._id) {
            return newPromotion;
          } else {
            return promotion;
          }
        })
      );
    setShowModal(false);
    setUpdatePromotion(null);
  };

  const handleEditPromotion = (promotion) => {
    setShowModal(true);
    setUpdatePromotion(promotion);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUpdatePromotion(null);
  };

  return (
    <>
      {showModal && (
        <PromotionModal
          onCloseModal={handleCloseModal}
          onSavePromotion={handleAddPromotion}
          updatePromotion={updatePromotion}
        />
      )}
      <h2 className="text-2xl my-5 font-bold">All Promotions</h2>
      <PromotionAction
        onAddPromotion={handleAddPromotion}
        onClikAdd={() => setShowModal(true)}
      />
      <PromotionTable
        promotions={promotions}
        onEditPromotion={handleEditPromotion}
      />
    </>
  );
}
