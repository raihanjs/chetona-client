export default function PromotionAction({ onClikAdd }) {
  return (
    <div className="bg-slate-200 p-5 flex justify-end space-x-5 my-5 rounded-sm">
      <button
        className="bg-primary text-white font-bold py-1 px-3 rounded-sm"
        onClick={onClikAdd}
      >
        Add New Promotion
      </button>
      <button className="bg-primary text-white font-bold py-1 px-3 rounded-sm">
        Delete All Promotion
      </button>
    </div>
  );
}
