"use client";
import Carousel from "react-card-carousel";
import Image from "next/image";
import Avatar from "@/app/assets/avtar.png";

const profiles = [
  {
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    countryFlag: "/flag.png", // Replace with actual image path for the flag
    avatar: "/avatar.jpg", // Replace with actual avatar image path
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
  },
  {
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    countryFlag: "/flag.png", // Replace with actual image path for the flag
    avatar: "/avatar.jpg", // Replace with actual avatar image path
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
  },
  {
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    countryFlag: "/flag.png", // Replace with actual image path for the flag
    avatar: "/avatar.jpg", // Replace with actual avatar image path
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
  },
  // Add more profiles here...
];

export default function ProfileCarousel() {
  return (
    <Carousel autoplay={true} autoplay_speed={2500}>
      {profiles.map((profile, idx) => (
        <div key={idx} className="keen-slider__slide flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-4 w-60">
            <div className="flex justify-center mb-4">
              <Image
                src={Avatar}
                alt="Profile picture"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="text-center mb-4">
              <h2 className="text-black text-2xl font-bold">{profile.name}</h2>
              <p className="text-blue-500 font-bold">
                {profile.title} • {profile.experience}
              </p>
            </div>
            <div className="space-y-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
