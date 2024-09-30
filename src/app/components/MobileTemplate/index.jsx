"use client";
import React from "react";
import ProfileCarousel from "../ProfileCarousel";
import MobileHeader from "@/app/organisms/MobileHeader";
import ContentBox from "@/app/molecules/ContentBox";
import MobileFooter from "@/app/organisms/MobileFooter";

const HyperHireMobile = () => {
  return (
    <>
      <MobileHeader />
      {/* Top Section (Banner) */}
      <main>
        <section className="main-section">
          <div className="section-2 bg-blue-500 text-white">
            {/* Header Section */}
            <div className="container flex mx-auto px-2 flex-col justify-left items-center">
              <div className="text-left">
                <div className="text-left">
                  <h1 className="text-2xl font-bold">
                    최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                  </h1>
                  <h3 className="mt-4 text-md w-2/4">
                    법률 및 인사관리 부담없이 1주일 이내에 원격으로
                    채용해보세요.
                  </h3>
                  <h3 className="mt-4 text-md w-2/4">개발자가 필요하신가요?</h3>
                </div>
              </div>
              {/* Profile Card Slider */}
              <div className="relative mobile-carousal">
                <ProfileCarousel />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Section (Contact and Details) */}
      <MobileFooter />
    </>
  );
};

export default HyperHireMobile;
