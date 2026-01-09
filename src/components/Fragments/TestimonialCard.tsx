import Card from "../Elements/Card";
import QuoteIcon from "../../assets/images/Quotes.svg";

interface TestimonialCardProps {
  rating: number;
  comment: string;
  avatar: string;
  name: string;
  role: string;
}

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
  </svg>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  comment,
  avatar,
  name,
  role,
}) => {
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const isColorCode = (str: string) => {
    return str.startsWith("#") || str.startsWith("rgb");
  };

  return (
    <Card className="bg-white p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <div className="text-primary">
          <img src={QuoteIcon} alt="Quote Icon" width={24} height={24} />
        </div>
      </div>

      <p className="text-sm text-black-lighter leading-relaxed mb-6 grow">
        {comment}
      </p>

      <div className="flex items-center gap-3">
        {isColorCode(avatar) ? (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={{
              backgroundColor: avatar,
            }}
          >
            {getInitials(name)}
          </div>
        ) : (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <h4 className="font-bold text-black text-sm">{name}</h4>
          <p className="text-xs text-black-lighter">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
