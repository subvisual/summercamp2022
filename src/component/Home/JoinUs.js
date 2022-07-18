import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ThreeDee from "../../component/ThreeDeeLazy";

const itemVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function FadeItem(props) {
  const control = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="item"
      ref={ref}
      variants={itemVariant}
      initial="hidden"
      animate={control}
    >
      {props.children}
    </motion.div>
  );
}

export default function JoinUs() {
  return (
    <div className="join-us">
      <div className="container content">
        <div className="columns" style={{ alignItems: "start" }}>
          <div className="left">
            <h2 className="title has-font-size-xlarge">Join us</h2>
            <div className="background">
              <ThreeDee />
            </div>
          </div>

          <div className="right">
            <FadeItem>
              <h2 className="title has-font-size-xlarge">
                on a{" "}
                <span className="has-text-blue has-font-family-secondary">
                  hands-on
                </span>{" "}
                approach
              </h2>
              <div className="text has-font-size-small">
                <p>
                  We created SummerCamp back in 2016 as a way to foster talent,
                  get new work perspectives and contribute to boosting new
                  career opportunities. We believe in continuous learning and
                  improvement, so SummerCamp is yet another way of us acting on
                  those values.
                </p>
              </div>
            </FadeItem>
            <FadeItem>
              <h2 className="title has-font-size-xlarge">
                <span>to get a </span>
                <span className="has-text-blue has-font-family-secondary">
                  real work
                </span>
                <br />
                <span>experience</span>
              </h2>
              <div className="text has-font-size-small">
                <p>
                  Whether you want to follow a career in technology or product,
                  during your time at SummerCamp you'll get access to a real use
                  case that will help you understand how a job in that area
                  could be like.
                </p>
              </div>
            </FadeItem>
            <FadeItem>
              <h2 className="title has-font-size-xlarge ">
                <span>with the support of</span> <span>a</span>{" "}
                <span className="has-text-blue has-font-family-secondary">
                  great team
                </span>
              </h2>
              <div className="text has-font-size-small">
                <p>
                  Our team members will be your mentors during the entire
                  program, wich means that you will always have someone to back
                  your decisions and help you choose wich path to follow.
                </p>
              </div>
            </FadeItem>
          </div>
        </div>
      </div>
    </div>
  );
}
