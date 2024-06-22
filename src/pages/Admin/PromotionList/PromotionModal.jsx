import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function PromotionModal({
  onCloseModal,
  updatePromotion,
  onSavePromotion,
}) {
  const [promotion, setPromotion] = useState(
    updatePromotion || {
      title: "",
      warn: "",
      subWarn: "",
      image: "",
      imageCaption: "",
      writer: "",
      price: "",
      offerPrice: "",
      listTitle: "",
      listHeaderText: "",
      listFooterText: "",
      lists: [],
      youtubeLink: "",
      videoCaption: "",
      orderTitle: "",
      orderWarn: "",
      name: "",
      pixel: "",
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(updatePromotion, null));

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (name === "lists") value = value.split(",");

    setPromotion({ ...promotion, [name]: value });
  };

  return (
    <div className="absolute top-0 left-0 bg-black/75 w-[100%] z-40 flex justify-center">
      <form className="relative bg-primary font-bold rounded-md z-40 p-12 pb-5 w-[750px] flex flex-col space-y-3 mt-5 mb-20">
        <button
          className="absolute top-5 right-5 hover:text-red-500"
          onClick={onCloseModal}
        >
          <FaTimes />
        </button>
        {/* Title */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="p-2 rounded-md"
            name="title"
            value={promotion.title}
            onChange={handleChange}
          />
        </div>
        {/* Warn & Sub Warn */}
        <div className="flex justify-between items-center space-x-5">
          {/* Warn */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="warn">Warn</label>
            <input
              type="text"
              id="warn"
              className="p-2 rounded-md"
              name="warn"
              value={promotion.warn}
              onChange={handleChange}
            />
          </div>
          {/* Sub Warn */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="subwarn">Sub Warn</label>
            <input
              type="text"
              id="subwarn"
              className="p-2 rounded-md"
              name="subWarn"
              value={promotion.subWarn}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Image Link */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="imageLink">Image Link</label>
          <input
            type="text"
            id="imageLink"
            className="p-2 rounded-md"
            name="image"
            value={promotion.image}
            onChange={handleChange}
          />
        </div>
        {/* Image Caption */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="imageCaption">Image Caption</label>
          <input
            type="text"
            id="imageCaption"
            className="p-2 rounded-md"
            name="imageCaption"
            value={promotion.imageCaption}
            onChange={handleChange}
          />
        </div>
        {/* Book Name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            className="p-2 rounded-md"
            name="name"
            value={promotion.name}
            onChange={handleChange}
          />
        </div>
        {/* Writer, Price & Offer Price  */}
        <div className="flex justify-between items-center space-x-5">
          {/* Writer */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="writer">Writer Name</label>
            <input
              type="text"
              id="writer"
              className="p-2 rounded-md"
              name="writer"
              value={promotion.writer}
              onChange={handleChange}
            />
          </div>
          {/* Price */}
          <div className="flex flex-col space-y-1 w-3/12">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="p-2 rounded-md"
              name="price"
              value={promotion.price}
              onChange={handleChange}
            />
          </div>
          {/* Offer Price */}
          <div className="flex flex-col space-y-1 w-3/12">
            <label htmlFor="offerPrice">Offer Price</label>
            <input
              type="number"
              id="offerPrice"
              className="p-2 rounded-md"
              name="offerPrice"
              value={promotion.offerPrice}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* List Title */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="listTitle">List Title</label>
          <input
            type="text"
            id="listTitle"
            className="p-2 rounded-md"
            name="listTitle"
            value={promotion.listTitle}
            onChange={handleChange}
          />
        </div>
        {/* List Header & List Footer */}
        <div className="flex justify-between items-center space-x-5">
          {/* List Header */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="listHeader">List Header</label>
            <input
              type="text"
              id="listHeader"
              className="p-2 rounded-md"
              name="listHeaderText"
              value={promotion.listHeaderText}
              onChange={handleChange}
            />
          </div>
          {/* List Footer */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="listFooter">List Footer</label>
            <input
              type="text"
              id="listFooter"
              className="p-2 rounded-md"
              name="listFooterText"
              value={promotion.listFooterText}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Lists */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="lists">Lists</label>
          <input
            type="text"
            id="lists"
            className="p-2 rounded-md"
            name="lists"
            value={promotion.lists}
            onChange={handleChange}
          />
        </div>
        {/* Video Link & Caption */}
        <div className="flex justify-between items-center space-x-5">
          {/* Video Link */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="videoLink">Video Link</label>
            <input
              type="text"
              id="videoLink"
              className="p-2 rounded-md"
              name="youtubeLink"
              value={promotion.youtubeLink}
              onChange={handleChange}
            />
          </div>
          {/* Caption */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="videoCaption">Video Caption</label>
            <input
              type="text"
              id="videoCaption"
              className="p-2 rounded-md"
              name="videoCaption"
              value={promotion.videoCaption}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Order Title & Order Warn */}
        <div className="flex justify-between items-center space-x-5">
          {/* Video Link */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="orderTitle">Order Title</label>
            <input
              type="text"
              id="orderTitle"
              className="p-2 rounded-md"
              name="orderTitle"
              value={promotion.orderTitle}
              onChange={handleChange}
            />
          </div>
          {/* Caption */}
          <div className="flex flex-col space-y-1 w-6/12">
            <label htmlFor="orderWarn">Order Warn</label>
            <input
              type="text"
              id="orderWarn"
              className="p-2 rounded-md"
              name="orderWarn"
              value={promotion.orderWarn}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Facebook Pixel */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="pixel">Pixel</label>
          <input
            type="text"
            id="pixel"
            className="p-2 rounded-md"
            name="pixel"
            value={promotion.pixel}
            onChange={handleChange}
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-xl text-white border-2 px-12 py-1.5 rounded-md cursor-pointer hover:border-green-500"
            onClick={() => onSavePromotion(promotion, isAdd)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
