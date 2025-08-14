

import React from "react";
import style from "./AdminNav.module.css";
import Link from "next/link";
export default function AdminNav() {
  return (
    <navbar className={style.nav}>
      <ul>
        <li className={style.Link}>
          <Link href="/admin/portfolios">portfolios</Link>
        </li>
        <li className={style.Link}>
          <Link href="/admin/chats">chats</Link>
        </li>
        <li className={style.Link}>
          <Link href="/admin/uploud">uploud</Link>
        </li>
        <li className={style.Link}>
          <Link href="/admin/times">times</Link>
        </li>
        <li className={style.Link}>
          <Link href="/admin/users">users</Link>
        </li>
      </ul>
    </navbar>
  );
}
