import { motion } from "framer-motion";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  /** Heading Animations */
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  /** Text Animations */

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };
  /** Button Animations */
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  /** Image Animations */
  const imgOptions = {
    initial: {
      acale: 0.1,
      opacity: 0,
    },
    whileInView: {
      acale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <section className="section" style={{ backgroundColor }}>
      <div>
        <motion.h3
          style={{ color: headingColor }}
          data-curserpointer={true}
          {...headingOptions}
        >
          {h3}
        </motion.h3>
        <motion.p
          style={{ color: textColor }}
          data-curserpointer={true}
          {...textOptions}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{ color: btnColor, backgroundColor: btnBgColor }}
            data-curserpointer={true}
            {...buttonOptions}
          >
            {btnTxt}
          </motion.button>
        )}
      </div>
      <motion.div {...imgOptions}>
        <img src={imgSrc} style={{ width: imgSize }} alt="ImgSrc" />
      </motion.div>
    </section>
  );
};

export default Section;
