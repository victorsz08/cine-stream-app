'use client';

import Link from "next/link";
import styled from "styled-components";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";

type IListMovie = {
    titleList: string;
    children: React.ReactNode;
    moreInfo: string;
}


const SectionStyled = styled.section`
    padding: 3rem;

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
        transition: 1s;
    }

    a {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;
        text-decoration: none;
        margin: 2rem 0;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        transform: translateX(30px);
    }

    .actions button {
        background-color: transparent;
        cursor: pointer;
    }

    .actions svg {
        width: 2rem;
        height: 2rem;
        color: #FFD100;
    }

    .actions svg:hover {
        color: #000;
        transition: .3s;
    }
`


export default function ListMovie({ titleList, children, moreInfo } : IListMovie) {
    const [translateList, setTranslateList] = useState(0);
    console.log(translateList)

    return (
        <SectionStyled>
            <Link href={moreInfo}><h2>{titleList}</h2></Link>
            <div className="movies-lists"  style={{ transform: `translateX(${translateList}vw)`}}>
                {children}
            </div>
            <div className="actions">
                <button onClick={() => setTranslateList(translateList - translateList)}><FaRegArrowAltCircleLeft/></button>
                <button onClick={() => setTranslateList(translateList <= -185 ? 0 : translateList - 93)}><FaRegArrowAltCircleRight/></button>
            </div>
        </SectionStyled>
    )
}