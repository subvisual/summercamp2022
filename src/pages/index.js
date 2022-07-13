import "../index.css";
import "./Home.css";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ParallaxProvider } from "react-scroll-parallax";

import Nav from "../component/Nav";
import ThreeDee from "../component/ThreeDeeLazy";
import Seo from "../component/Seo";
import JoinUs from "../component/Home/JoinUs";
import AreYouUp from "../component/Home/AreYouUp";
import DontJustTake from "../component/Home/DontJustTake";
import HowItWorks from "../component/Home/HowItWorks";
import Footer from "../component/Footer";
import Onboard from "../component/Home/Onboard";
import TalkToUs from "../component/Home/TalkToUs";
import SomeQuestions from "../component/Home/SomeQuestions";
import Showcase from "../component/Home/Showcase";

import fontActa from "../fonts/Acta-Book.otf";
import fontColfaxRegular from "../fonts/Colfax-Regular.otf";

function toFaq({ node }) {
  return {
    id: node.id,
    title: node.frontmatter.title,
    text: node.html,
  };
}

function toProject({ node }) {
  return {
    id: node.id,
    title: node.frontmatter.title,
    subtitle: node.frontmatter.subtitle,
    description: node.html,
    image: node.frontmatter.image,
  };
}

function toTestimonial({ node }) {
  return {
    id: node.id,
    author: node.frontmatter.title,
    info: node.frontmatter.info,
    quote: node.html,
  };
}

function Home(props) {
  const faqs = props.data.faqs.edges.map(toFaq);
  const projects = props.data.projects.edges.map(toProject);
  const testimonials = props.data.testimonials.edges.map(toTestimonial);

  return (
    <ParallaxProvider>
      <Fragment>
        <Helmet>
          <link rel="preload" href={fontActa} as="font" crossorigin />
          <link rel="preload" href={fontColfaxRegular} as="font" crossorigin />
        </Helmet>
        <Seo />
        <div className="fold has-background-blue-light">
          <div className="background">
            <ThreeDee />
          </div>
          <Nav />
          <JoinUs />
        </div>
        <AreYouUp />
        <DontJustTake testimonials={testimonials} />
        <Showcase projects={projects} />
        <HowItWorks />
        <SomeQuestions faqs={faqs} />
        <TalkToUs />
        <div className="fold has-background-blue Position-background">
          <StaticImage
            className="backgroundImage"
            loading="lazy"
            objectFit="contain"
            objectPosition="right top"
            src="../images/ImageBackground.png"
            alt=""
          />
          <Onboard />
        </div>
        <Footer />
      </Fragment>
    </ParallaxProvider>
  );
}

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    faqs: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "faq" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image
            subtitle
          }
        }
      }
    }
    testimonials: allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "testimonial" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            info
          }
        }
      }
    }
  }
`;
