import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CardNavigation() {
  return (
    <div className="swiper-navigation absolute -right-10 top-0 flex h-full w-auto flex-col items-center justify-center gap-5">
      <div className="swiper-button-prev">
        <FaArrowUp />
      </div>
      <div className="swiper-button-next">
        <FaArrowDown />
      </div>
    </div>
  );
}
