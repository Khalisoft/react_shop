interface LogoProps {
  width: string;
}

export default function Logo({ width }: LogoProps) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.5 83"
      width={width}
    >
      <path
        fill="#c4abfd"
        d="m83,0h0c-7.56,0-14.64,2.03-20.75,5.57,12.4,7.18,20.75,20.58,20.75,35.93h0c0,15.36-8.35,28.76-20.75,35.93,6.11,3.53,13.19,5.57,20.75,5.57h0c22.92,0,41.5-18.58,41.5-41.5h0C124.5,18.58,105.92,0,83,0Z"
      />
      <path
        fill="#8b5cf6"
        d="m44.9,57.96l-2.27,3.93c-.5.87-1.76.87-2.26,0l-11.4-19.74c-.23-.4-.23-.9,0-1.31l11.4-19.75c.5-.87,1.76-.87,2.26,0l2.27,3.93c3.55-8.2,9.67-15.03,17.35-19.47-6.11-3.53-13.19-5.57-20.75-5.57h0C18.58,0,0,18.58,0,41.5v38.05c0,1.9,1.54,3.45,3.45,3.45h38.05c7.56,0,14.64-2.03,20.75-5.57-7.68-4.44-13.8-11.27-17.35-19.47Z"
      />
      <path
        fill="#8b5cf6"
        d="m83,41.5h0c0-15.36-8.35-28.76-20.75-35.93-7.68,4.44-13.8,11.27-17.35,19.47l9.13,15.81c.23.4.23.9,0,1.31l-9.13,15.81c3.55,8.2,9.67,15.03,17.35,19.47,12.4-7.18,20.75-20.58,20.75-35.93Z"
      />
    </svg>
  );
}
