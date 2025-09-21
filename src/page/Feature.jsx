import arrowIcon from "../assets/icon-arrow.svg";

const features = {
  fyloFeatures: [
    {
      id: 1,
      icon: "/images/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      description: [
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      ],
    },
    {
      id: 2,
      icon: "/images/icon-security.svg",
      title: "Security you can trust",
      description: [
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      ],
    },
    {
      id: 3,
      icon: "/images/icon-collaboration.svg",
      title: "Real-time collaboration",
      description: [
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachment required.",
      ],
    },
    {
      id: 4,
      icon: "/images/icon-any-file.svg",
      title: "Store any type of file",
      description: [
        "Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      ],
    },
  ],
  fyloWorks: {
    image: "/images/illustration-stay-productive.png",
    title: "Stay productive, wherever you are",
    description: [
      "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    ],
    link: { text: "See how Fylo works", href: "#" },
  },
};

export default function Feature() {
  return (
    <div className=" bg-Navy-900 max-w-[1500px] mx-auto p-5 md:px-10  text-white py-30 md:py-20">
      <h1 className="font-bold text-4xl md:text-6xl mb-10 text-white/20">Features</h1>

<div className="flex justify-center mb-30">
  <div className="grid gap-20 md:grid-cols-2 text-center">
    {features.fyloFeatures?.map((feature) => (
      <div key={feature.id} className="max-w-[400px] mx-auto">
        <img src={feature.icon} alt={feature.title} className="mx-auto" />
        <h2 className="text-2xl font-bold mt-4">{feature.title}</h2>
        <p className="text-neutral-300 mt-2">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
      <div className="flex flex-col  lg:flex-row lg:items-end gap-15">
        <img src={features.fyloWorks.image} alt="" />
        <div className="space-y-5 max-w-[600px]">
          <h2>{features.fyloWorks.title}</h2>

          {features.fyloWorks.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {features?.fyloWorks?.link && (
            <a
              href={features.fyloWorks.link.href}
              className=" flex gap-2 items-center border-b pb-2 w-fit text-Teal-200  "
            >
              <span>{features.fyloWorks.link.text}</span>
              <img src={arrowIcon} alt="arrow icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
