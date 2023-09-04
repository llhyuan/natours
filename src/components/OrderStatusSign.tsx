export default function OrderStatusSign({
  status,
}: {
  status: "pending" | "paid" | "rejected";
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        className={
          "text-[1.2rem] " +
          (status === "pending"
            ? "fill-orange-500"
            : status === "paid"
            ? "fill-green-500"
            : "fill-red-500")
        }
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    </div>
  );
}
