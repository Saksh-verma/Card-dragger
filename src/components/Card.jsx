import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 0.3 }}
      dragElastic={0.1}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] py-10 px-8 text-white overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="px-8 flex justify-between items-center mb-5">
          <h5>{data.filesize}</h5>
          <span className="bg-zinc-600 rounded-full flex items-center justify-center w-7 h-7 ">
            {data.close ? (
              <MdOutlineClose />
            ) : (
              <BsDownload size=".7em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
