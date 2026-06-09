import {
  TimeScheduleIcon,
  MoneyBag02Icon,
  CorporateIcon,
  GiftCardIcon,
  RiceBowl01Icon,
  FavouriteIcon,
} from "hugeicons-react";

const features = [
  {
    icon: TimeScheduleIcon,
    text: "Same-day Delivery",
  },
  {
    icon: MoneyBag02Icon,
    text: "Money Box & Bouquets",
  },
  {
    icon: CorporateIcon,
    text: "Corporate Gifts",
  },
  {
    icon: GiftCardIcon,
    text: "Souvenirs",
  },
  {
    icon: RiceBowl01Icon,
    text: "Fruit Hampers",
  },
  {
    icon: FavouriteIcon,
    text: "Mind-Blowing Custom & Pre-Packaged Gifts",
  },
];

export default function FeaturesSlider() {
  return (
    <div className="h-[104px] bg-[#3B3B3B] overflow-hidden relative">
      <div className="flex w-max animate-slide whitespace-nowrap h-full items-center">
        {[...features, ...features].map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center justify-center px-10">
              <Icon className="text-[#A87F3D] mr-2" size={20} strokeWidth={1} />

              <p className="text-white text-[16px] font-thin whitespace-nowrap">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      <style>{`
  @keyframes slide {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .animate-slide {
    animation: slide 25s linear infinite;
  }
`}</style>
    </div>
  );
}
