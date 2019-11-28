import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Github } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Github />
    <Skills />
    <Contact />
  </Layout>
);
