import quotesIcon from "../assets/bg-quotes.png";
const Teams = [
  {
    id: 1,
    avatar: "/images/profile-1.jpg",
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
    description: [
      "Fylo has improved our team productivity by an order of magnitude.since making the switchour team has become a well-oiled collaboration machince.",
    ],
  },
  {
    id: 2,
    avatar: "/images/profile-2.jpg",
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
    description: [
      "Fylo has improved our team productivity by an order of magnitude.since making the switchour team has become a well-oiled collaboration machince.",
    ],
  },
  {
    id: 3,
    avatar: "/images/profile-3.jpg",
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
    description: [
      "Fylo has improved our team productivity by an order of magnitude.since making the switchour team has become a well-oiled collaboration machince.",
    ],
  },
];
export default function Team() {
  return (
    <div className="text-white p-5 md:px-10 py-30 max-w-[1500px] mx-auto bg-Navy-900 ">
   <h1 className="font-bold text-4xl md:text-6xl mb-10 text-white/20">Teams</h1>
      <div className=" w-fit mx-auto">
        <img src={quotesIcon} alt="quotes Icon" className=" w-8 lg:w-12 md:relative -bottom-3 -left-2 "/>

        <div className="flex flex-col lg:flex-row items-center gap-5 z-10 relative ">
          {Teams.map((team) => (
            <div
              key={team.id}
              className=" max-w-[350px]  bg-Navy-850 p-6 rounded-lg space-y-4 "
            >
              <p>{team.description}</p>
              <div className="flex items-center gap-5">
                <img
                  src={team.avatar}
                  alt=""
                  className=" w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h2>{team.name}</h2>
                  <p className="text-sm text-neutral-300">{team.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
