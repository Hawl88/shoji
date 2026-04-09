import Link from "next/link";
import { circleInfos } from "./circles";
import { clubInfos } from "./clubs";
import { committeeInfos } from "./committees";

export const dynamic = "error";
export const revalidate = false;

export default function Page() {
  return (
    <>
      <div id="club" className="my-10 text-center text-5xl font-medium text-red-600">
        部活動
      </div>
      <div className="flex flex-wrap">
        {clubInfos.map((clubInfo) => (
          <div
            key={clubInfo.clubName}
            className="image-full card m-8 mx-auto w-80 shadow-xl"
          >
            <figure>
              {/* todo: use next/image instead of img */}
              <img src={clubInfo.clubimgSrc} alt="circle image" />
            </figure>
            <div className="card-body rounded-2xl bg-black/15">
              <h2 className="card-title">
                <Link href={`/circles/${clubInfo.clubName}`}>
                  {clubInfo.clubName}
                </Link>
              </h2>
              <p>{clubInfo.clubshortDescription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">詳細ページへ</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="circle" className="my-10 text-center text-5xl font-medium text-blue-600">
        サークル
      </div>
      <div className="flex flex-wrap">
        {circleInfos.map((circleInfo) => (
          <div
            key={circleInfo.circleName}
            className="image-full card m-8 mx-auto w-80 shadow-xl"
          >
            <figure>
              {/* todo: use next/image instead of img */}
              <img src={circleInfo.imgSrc} alt="circle image" />
            </figure>
            <div className="card-body rounded-2xl bg-black/15">
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
      <div id="committee" className="my-10 text-center text-5xl font-medium text-green-600">
        学生会
      </div>
      <div className="flex flex-wrap">
        {committeeInfos.map((committeeInfo) => (
          <div
            key={committeeInfo.committeeName}
            className="image-full card m-8 mx-auto w-80 shadow-xl"
          >
            <figure>
              {/* todo: use next/image instead of img */}
              <img src={committeeInfo.imgSrc} alt="circle image" />
            </figure>
            <div className="card-body rounded-2xl bg-black/15">
              <h2 className="card-title">
                <Link href={`/circles/${committeeInfo.committeeName}`}>
                  {committeeInfo.committeeName}
                </Link>
              </h2>
              <p>{committeeInfo.shortDescription}</p>
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
