import { useState } from "react";

import PromotionTable from "./PromotionTable";
import PromotionModal from "./PromotionModal";
import PromotionAction from "./PromotionAction";
import usePromotions from "../../../hooks/usePromotions";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export default function PromotionList() {
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const [promotions, isLoading, refetch] = usePromotions();
  const [updatePromotion, setUpdatePromotion] = useState(null);

  const handleAddPromotion = (newPromotion, isAdd) => {
    if (isAdd) {
      axiosPublic
        .post("/promotions", newPromotion)
        .then((res) => res.data.insertedId && refetch());
    } else {
      axiosPublic
        .patch(`/promotions/${newPromotion._id}`, newPromotion)
        .then((res) => res.data.modifiedCount && refetch());
    }

    setShowModal(false);
    setUpdatePromotion(null);
  };

  const handleEditPromotion = (promotion) => {
    setShowModal(true);
    setUpdatePromotion(promotion);
  };

  const handleDeletePromotion = (promotionId) => {
    axiosPublic
      .delete(`/promotions/${promotionId}`)
      .then((res) => res.data.deletedCount === 1 && refetch());
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
        onDeletePromotion={handleDeletePromotion}
        promotions={promotions}
        onEditPromotion={handleEditPromotion}
      />
    </>
  );
}
