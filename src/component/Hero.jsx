import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Hero() {
  return (
    <div>
      <header>
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800   dark:text-gray lg:text-3xl">
                  NextGEn
                </h1>
                <div>
                  <a className="text-xl    ">
                    Professional and Hyperlocal Services
                  </a>
                  <span
                    style={{
                      display: "block",
                      padding: 2,
                      width: 31,
                      background: "#0185ff",
                    }}
                  />
                </div>

                <button className="  px-3 py-2 mt-6 text-xs w-32 font-medium text-white  rounded-none   bg-blue-500 ">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#0085FF" }}>
          <div
            style={{ padding: 16 }}
            className="mx-10"
            class="container px-6 py-3 h-96  mt-2 mx-auto"
          >
            <div
              style={{
                color: "#fff",
                fontSize: "24px",

                // marginLeft: 40,
                // marginBottom: 20,
                // paddingBottom: 20,
              }}
            >
              Our Services
            </div>
            <Corousel />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
const Card = ({ title, bodyText }) => {
  return (
    <div
      className="   overflow-hidden bg-white rounded-2xl p-5  mr-3  "
      style={{ marginTop: 24 }}
    >
      <img
        style={{
          objectFit: "contain",
          width: 100,
          alignSelf: "center",
          margin: "auto",
          padding: 10,
        }}
        src="https://rkdfuniversity.org/assets/Assets/images/image-preview.png"
        alt="Sunset in the mountains"
      />
      <div class="text-gray-900 font-bold text-x mb-2 text-left mt-2">
        {title}
      </div>
      <p class="text-gray-700 text-sm">{bodyText}</p>
      <span class="inline-block  pt-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 ">
        Know More
      </span>
    </div>
  );
};

const Corousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    800: { items: 3 },
    1024: { items: 4 },
    1200: { items: 4 },
    1350: { items: 5 },
    1500: { items: 5 },
    1800: { items: 6 },
    2150: { items: 6 },
  };
  return (
    <AliceCarousel
      disableDotsControls={true}
      renderPrevButton={() => {
        return (
          <p style={{ position: "absolute", top: "34%", left: "-76px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
            >
              <circle cx="30.5" cy="30.5" r="30.5" fill="#E6F3FF" />
              <circle cx="30" cy="30" r="20" fill="#A6D4FF" />
              <path
                d="M33.7221 21.2495C33.9799 21.5074 34.1247 21.857 34.1247 22.2216C34.1247 22.5862 33.9799 22.9359 33.7221 23.1938L26.9159 30L33.7221 36.8063C33.9726 37.0656 34.1112 37.4129 34.1081 37.7734C34.1049 38.134 33.9603 38.4788 33.7054 38.7338C33.4504 38.9887 33.1056 39.1333 32.7451 39.1364C32.3845 39.1396 32.0372 39.001 31.7779 38.7505L23.9995 30.9721C23.7417 30.7143 23.5969 30.3646 23.5969 30C23.5969 29.6354 23.7417 29.2857 23.9995 29.0279L31.7779 21.2495C32.0357 20.9917 32.3854 20.8469 32.75 20.8469C33.1146 20.8469 33.4643 20.9917 33.7221 21.2495Z"
                fill="#0085FF"
              />
            </svg>
          </p>
        );
      }}
      renderNextButton={() => {
        return (
          <p style={{ position: "absolute", top: "34%", right: "-76px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
            >
              <circle
                cx="30.5"
                cy="30.5"
                r="30.5"
                transform="rotate(-180 30.5 30.5)"
                fill="#E6F3FF"
              />
              <circle
                cx="30"
                cy="30"
                r="20"
                transform="rotate(-180 30 30)"
                fill="#A6D4FF"
              />
              <path
                d="M26.2779 38.7505C26.0201 38.4926 25.8753 38.143 25.8753 37.7784C25.8753 37.4138 26.0201 37.0641 26.2779 36.8062L33.0841 30L26.2779 23.1937C26.0274 22.9344 25.8888 22.5871 25.8919 22.2266C25.8951 21.866 26.0397 21.5212 26.2946 21.2662C26.5496 21.0113 26.8944 20.8667 27.2549 20.8636C27.6155 20.8604 27.9628 20.999 28.2221 21.2495L36.0005 29.0279C36.2583 29.2857 36.4031 29.6354 36.4031 30C36.4031 30.3646 36.2583 30.7143 36.0005 30.9721L28.2221 38.7505C27.9643 39.0083 27.6146 39.1531 27.25 39.1531C26.8854 39.1531 26.5357 39.0083 26.2779 38.7505Z"
                fill="#0085FF"
              />
            </svg>
          </p>
        );
      }}
      mouseTracking
      items={[
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Hyperlocal Services"
          bodyText="tailwind lets you conditionally apply utility classes in different "
        />,
        <Card
          title="Professional Services"
          bodyText="tailwind lets you conditionally apply utility classes in different"
        />,
        <Card
          title="Promotion and ad"
          bodyText="tailwind lets you conditionally apply utility classes in different"
        />,
        <Card
          title="Devloper API"
          bodyText="tailwind lets you conditionally apply utility classes in different"
        />,
        <Card
          title="Developer API"
          bodyText="tailwind lets you conditionally apply utility classes in different"
        />,
      ]}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};
