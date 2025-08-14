import React from "react";
import style from "./AdminNav.module.css";
import Link from "next/link";
export default function AdminNav() {
  return (
    <div>
      <ul
        className="flex flex-row justify-center *:justify-between items-center gap-4 p-4  bg-(--blue-280A3E) text-white"
        // className={style.nav}
      >
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
    </div>
  );
}
