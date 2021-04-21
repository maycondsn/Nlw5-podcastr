import React from "react";
import { GetStaticProps } from 'next'

type Episode = {
  id: string;
  title: string;
  members: string;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>

    </div>
  )
}

//Static site generation request
export  const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: { 
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
