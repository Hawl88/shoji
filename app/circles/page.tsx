import Link from "next/link";
import { circleInfos } from "./circles";

export const dynamic = "error";
export const revalidate = false;

export default function Page() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>ホーム</a>
              </li>
              <li>
                <a>運営</a>
              </li>
              <li>
                <a>質問</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            href="/circles"
            className="btn btn-ghost text-xl font-Hachi_Maru_Pop"
          >
            サークル一覧
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <h1 className="text-2xl">サークル一覧</h1>
      <div className="flex flex-wrap">
        {circleInfos.map((circleInfo) => (
          <div
            key={circleInfo.circleName}
            className="card image-full w-80 shadow-xl mx-auto m-8"
          >
            <figure>
              <img src={circleInfo.Image} alt="Nakatsuji" />
            </figure>
            <div className="card-body bg-black/40">
              <h2 className="card-title">
                <Link href={`/circles/${circleInfo.circleName}`}>
                  {circleInfo.circleName}
                </Link>
              </h2>
              <p>{circleInfo.shortDescription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">詳細ページへ</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
