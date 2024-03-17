"use client";

import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

type IMovieCard = {
  image: string;
  title: string;
  votePercent: number | undefined;
};

const CardMovieStyled = styled.section`
  background-color: #333533;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1.2rem;
  height: 28rem;

  img {
    width: 13rem;
    border-radius: 1rem;
  }

  h4 {
    font-size: 0.55rem;
    color: #fff;
    transform: translateX(178px) translateY(5px);
    position: absolute;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function CardMovie({ image, title, votePercent }: IMovieCard) {
  const percent = votePercent || 0;

  return (
    <CardMovieStyled>
      <img src={image} />
      <div className="info">
        <h3>{title}</h3>
        <Doughnut
          data={{
            datasets: [
              {
                label: "",
                data: [(percent / 10) * 100],
                type: "doughnut",
                backgroundColor:
                  (percent / 10) * 100 < 68 ? "#FFD100" : "#38b000",
                circumference: (89 / 100) * 360,
                borderColor: "transparent",
                weight: 600,
              },
            ],
          }}
          options={{
            cutout: "88%",
            responsive: false,
          }}
          width={40}
          height={60}
        />
        <h4>{(Math.round(percent) / 10) * 100}%</h4>
      </div>
    </CardMovieStyled>
  );
}
