import Image from "next/image";
import Link from "next/link";
import React from "react";

function BusinessCardMobile() {
  return (
    <div className="w-full bg-[url('/business-card/ios-wallpaper.png')] bg-cover">
      {/* <IOSWallpaper /> */}
      <ScreenContent />
    </div>
  );
}

export default BusinessCardMobile;

function IOSWallpaper() {
  return (
    <Image
      src="/business-card/ios-wallpaper.png"
      alt="Business Card Background"
      layout="fill"
      objectFit="cover"
      priority
    />
  );
}

function ScreenContent() {
  return (
    <div className="relative z-10 pb-10 h-screen xs:h-full flex flex-col justify-start items-start text-white">
      <StatusBar />
      <DateTime />
      <Notifications />
      <BottomActions />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="w-full h-12 flex justify-end items-center px-0 xs:px-8 py-4 scale-[.80] xs:scale-100">
      <svg
        width="79"
        height="25"
        viewBox="0 0 79 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.35" filter="url(#filter0_b_8_17)">
          <rect
            x="15.2"
            y="21.8"
            width="48"
            height="2.33333"
            rx="1.16666"
            fill="white"
          />
        </g>
        <rect
          opacity="0.35"
          x="51.7"
          y="1.1"
          width="24"
          height="12"
          rx="3.8"
          stroke="white"
        />
        <path
          opacity="0.4"
          d="M77.1 5.26666V9.26666C77.9047 8.92789 78.428 8.1398 78.428 7.26666C78.428 6.39353 77.9047 5.60544 77.1 5.26666Z"
          fill="white"
        />
        <rect x="53" y="2.6" width="21" height="9" rx="2.5" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.2713 3.62061C37.7584 3.62071 40.1504 4.52572 41.9529 6.14858C42.0886 6.27387 42.3056 6.27229 42.4393 6.14503L43.7367 4.90496C43.8044 4.84042 43.8422 4.753 43.8416 4.66203C43.841 4.57107 43.8022 4.48406 43.7338 4.42027C39.0027 0.126571 31.539 0.126571 26.808 4.42027C26.7395 4.48402 26.7006 4.57099 26.7 4.66196C26.6993 4.75292 26.737 4.84037 26.8046 4.90496L28.1025 6.14503C28.2361 6.27248 28.4532 6.27406 28.5889 6.14858C30.3916 4.52561 32.7839 3.6206 35.2713 3.62061ZM35.2695 7.76273C36.6268 7.76264 37.9357 8.26491 38.9418 9.17192C39.0779 9.30065 39.2922 9.29786 39.4249 9.16563L40.7122 7.87076C40.78 7.80284 40.8176 7.7107 40.8166 7.61495C40.8156 7.51921 40.7761 7.42785 40.707 7.36132C37.6431 4.524 32.8984 4.524 29.8346 7.36132C29.7654 7.42785 29.7259 7.51925 29.725 7.61503C29.7241 7.7108 29.7618 7.80293 29.8297 7.87076L31.1166 9.16563C31.2493 9.29786 31.4637 9.30065 31.5997 9.17192C32.6052 8.26551 33.913 7.76329 35.2695 7.76273ZM37.7915 10.5045C37.7935 10.6079 37.7564 10.7076 37.6891 10.7801L35.5124 13.1893C35.4486 13.2601 35.3616 13.3 35.2709 13.3C35.1801 13.3 35.0931 13.2601 35.0293 13.1893L32.8523 10.7801C32.785 10.7076 32.748 10.6079 32.75 10.5045C32.752 10.4011 32.7928 10.3031 32.8628 10.2338C34.2529 8.94427 36.2888 8.94427 37.6789 10.2338C37.7489 10.3032 37.7896 10.4011 37.7915 10.5045Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.2 2.225C19.2 1.60368 18.7224 1.1 18.1333 1.1H17.0667C16.4776 1.1 16 1.60368 16 2.225V11.975C16 12.5963 16.4776 13.1 17.0667 13.1H18.1333C18.7224 13.1 19.2 12.5963 19.2 11.975V2.225ZM11.7667 3.5H12.8333C13.4224 3.5 13.9 4.01577 13.9 4.652V11.948C13.9 12.5842 13.4224 13.1 12.8333 13.1H11.7667C11.1776 13.1 10.7 12.5842 10.7 11.948V4.652C10.7 4.01577 11.1776 3.5 11.7667 3.5ZM7.43333 6.1H6.36667C5.77756 6.1 5.3 6.62233 5.3 7.26666V11.9333C5.3 12.5777 5.77756 13.1 6.36667 13.1H7.43333C8.02244 13.1 8.5 12.5777 8.5 11.9333V7.26666C8.5 6.62233 8.02244 6.1 7.43333 6.1ZM2.13333 8.5H1.06667C0.477563 8.5 0 9.01487 0 9.65V11.95C0 12.5851 0.477563 13.1 1.06667 13.1H2.13333C2.72244 13.1 3.2 12.5851 3.2 11.95V9.65C3.2 9.01487 2.72244 8.5 2.13333 8.5Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_b_8_17"
            x="-14.7011"
            y="-8.1011"
            width="107.802"
            height="62.1355"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="14.9506" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_8_17"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_8_17"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function DateTime() {
  return (
    <div className="w-full   py-2 xs:py-6 flex flex-col items-center space-y-4">
      <p className="text-md xs:text-xl font-medium tracking-tight">
        Saturday, July 6
      </p>
      <h1 className="text-6xl xs:text-8xl sm:text-9xl font-semibold tracking-tighter">
        9:41
      </h1>
    </div>
  );
}

function Notifications() {
  return (
    <div className="w-full h-full px-5 tracking-tight flex flex-col space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          appIcon={notification.appIcon}
          title={notification.title}
          description={notification.description}
          time={notification.time}
          href={notification.href}
        />
      ))}
    </div>
  );
}

function Notification({
  appIcon,
  title,
  time,
  description,
  href,
}: NotificationProps) {
  return (
    <Link
      href={href}
      className="bg-[#fff]/50 backdrop-blur-2xl py-[12px] px-[14px] rounded-2xl flex items-center justify-start"
    >
      <Image
        className="mr-[12px]"
        src={appIcon}
        alt={`${title} icon`}
        height={38}
        width={38}
        priority
      />
      <div className="h-full w-full flex flex-col ">
        <div className="w-full flex items-center justify-between">
          <p className="text-base font-semibold text-black ">{title}</p>
          <p className="text-xs text-[#3D3D3D]/70 ">{time}</p>
        </div>
        <p className="text-base text-black -mt-1">{description}</p>
      </div>
    </Link>
  );
}

function BottomActions() {
  return (
    <div className="w-full flex items-center justify-between px-10 mt-10">
      <Image
        src="/business-card/icon-flashlight-button.svg"
        alt="Flashlight Button"
        height={50}
        width={50}
        priority
      />
      <Image
        src="/business-card/icon-camera-button.svg"
        alt="Camera Button"
        height={50}
        width={50}
        priority
      />
    </div>
  );
}

const notifications = [
  {
    id: "instagram1",
    title: "Instagram",
    time: "9:41 AM",
    description: "Your account reached 500K users",
    appIcon: "/business-card/icon-instagram.svg",
    href: "https://instagram.com/ziverium",
  },
  {
    id: "call",
    title: "Call us",
    time: "9:41 AM",
    description: "Missed call from Ziverium",
    appIcon: "/business-card/icon-call.svg",
    href: "tel:9987554888",
  },
  {
    id: "mail",
    title: "Mail us",
    time: "9:41 AM",
    description: "You just made a sale of $250",
    appIcon: "/business-card/icon-mail.svg",
    href: "mailto:business@ziverium.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    time: "9:41 AM",
    description: "Company sales up by 70%",
    appIcon: "/business-card/icon-linkedin.svg",
    href: "https://www.linkedin.com/in/krutik-maru/",
  },
  {
    id: "brochure",
    title: "Brochure",
    time: "9:41 AM",
    description: "Know more about us!",
    appIcon: "/business-card/icon-ziverium.svg",
    href: "/BusinessCard",
  },
];

interface NotificationProps {
  appIcon: string;
  title: string;
  time: string;
  description: string;
  href: string;
}
