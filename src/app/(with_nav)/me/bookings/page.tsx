import BookingItem from "@/components/BookingItem";
import { fetchBookings } from "@/utilities/fetchBookings";
import { BookingInfo } from "@Global/custom-types";
import { Lato } from "next/font/google";
import GuideInfo from "@/components/GuideInfo";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default async function Bookings() {
  const bookings = await fetchBookings();
  return (
    <div className="pb-10 max-w-[400px] max-md:mx-auto md:max-w-[600px] md:pl-6">
      <h1
        className={
          latoBold.className +
          " text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
        }
      >
        My Bookings
      </h1>
      <div className="max-sm:px-2">
        {bookings.map((booking: BookingInfo, index: number) => {
          const guideInfo = (
            <GuideInfo guide={booking.tour.guides[1]} view="booking" />
          );
          return (
            <BookingItem
              bookingInfo={booking}
              key={index}
              guideInfo={guideInfo}
            />
          );
        })}
      </div>
    </div>
  );
}
