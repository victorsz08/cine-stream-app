"use client";

import Link from "next/link"
import styled from "styled-components"
import { TbSearch } from "react-icons/tb";
import { useState } from "react";


const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100vw;
    padding: 2rem 3rem;
    background-color: #202020;
    box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.2);
    z-index: 10000;

    .icon {
        display: flex;
        width: 20rem;
    }

    h1 + h1 {
        color: #D6D6D6;
    }

    h1 {
        font-size: 1.8rem;
    }

    a {
        font-size: .9rem;
        font-weight: 600;
        text-decoration: none;
        margin: 0 1rem;
        padding: .4rem .2rem;
        transition: .5s;
    }

    a + a {
        color: #FFD100;
    }

    a + a + a{
        color: #D6D6D6;
    }

    a:hover {
        border-bottom: 2px solid #FFD100;
        transition: .5s;
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 20rem;
    }

    .search input {
        padding: .8rem;
        border: none;
        border-radius: 1.5rem;
        background-color: #202020;
        width: 4rem;
        transition: .2s;
        color: #fff;
    } 

    .search svg {
        color: #FFD100;
        width: 1.4rem;
        height: 1.4rem;
        position: absolute;
        transform: translateX(-10px);
    }

    .search input:hover, .search input:focus {
        width: 19rem;
        display: block;
        transition: .3s;
        background-color: #333533;
    }

    .search input:focus {
        outline: 0;
    }
`


export default function Header() {
    const [search, setSearch] = useState("");

    return (
        <HeaderStyled>
            <div className="icon">
                <h1>Cine</h1>
                <h1>Stream</h1>
            </div>
            <nav>
                <ul>
                    <Link href='/'>HOME</Link>
                    <Link href='/'>EM BREVE</Link>
                    <Link href='/'>SÉRIES</Link>
                    <Link href=''>POPULARES</Link>
                    <Link href='/'>FILMES</Link>
                </ul>
            </nav>
            <div className="search">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                <TbSearch/>
            </div>
        </HeaderStyled>
    )
}