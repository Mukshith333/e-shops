import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
         <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      {/* This is two items as flex which look like image and description */}

      <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
             <p>Fashion product descriptions expand a product’s visual presentation. Your descriptions of clothing can also have an emotional and psychological influence on potential and current customers.</p>
             <p>You can appeal to their imagination or memory by describing experiences related to a product through copywriting. If a customer can imagine themselves wearing and sensing a shirt from reading its description, it increases the chance they’ll buy it.</p>
             <b className="text-gray-800">Our Vision</b>
             <p>Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.</p>
          </div>
      </div>

      <div className="text-xl py-4">
         <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Quality Assurance:</b>
             <p className="text-gray-600">Quality assurance is a broad process for preventing quality failures. The QA team is involved in all stages of a product's development: production, testing, packaging, and delivery. In contrast, quality control (QC) is a narrower process.</p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Convenience:</b>
             <p className="text-gray-600">Quality assurance is a broad process for preventing quality failures. The QA team is involved in all stages of a product's development: production, testing, packaging, and delivery. In contrast, quality control (QC) is a narrower process.</p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
             <b>Exceptional Customer:</b>
             <p className="text-gray-600">Quality assurance is a broad process for preventing quality failures. The QA team is involved in all stages of a product's development: production, testing, packaging, and delivery. In contrast, quality control (QC) is a narrower process.</p>
         </div>
      </div>

    </div>
  );
};

export default About;
