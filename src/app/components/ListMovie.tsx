'use client';

import Link from "next/link";
import styled from "styled-components";

type IListMovie = {
    titleList: string;
    children: React.ReactNode;
    moreInfo: string;
}

const SectionStyled = styled.section`
    padding: 5rem;

    h2 {
        font-size: 1.8rem;
        color: #D6D6D6;
        margin: 3rem 0;
        border-left: 12px solid #FFD100;
        padding-left: 1.8rem; 
    }

    .movies-lists {
        display: flex;
        justify-content: flex-start;
    }

    .more-movies {
        background-color: #fff;
        width: 15rem;
        height: 15rem;
        position: absolute;
        
    }

    .more-movies  a {
        color: #000;
    }
`

export default function ListMovie({ titleList, children, moreInfo } : IListMovie) {
    return (
        <SectionStyled>
            <h2>{titleList}</h2>
            <div className="movies-lists">
                {children}
            </div>
            <div className="more-movies">
                <Link href={moreInfo}>Mais Filmes</Link> 
            </div>
        </SectionStyled>
    )
}