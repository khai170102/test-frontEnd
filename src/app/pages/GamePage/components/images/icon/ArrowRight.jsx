function ArrowRight(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_2533)">
        <g clipPath="url(#clip1_2_2533)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7.929l-1.414 1.414L16.243 15l-5.657 5.657L12 22.07 19.071 15l-7.07-7.071z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2_2533">
          <path fill="#fff" transform="rotate(180 15 15)" d="M0 0H30V30H0z" />
        </clipPath>
        <clipPath id="clip1_2_2533">
          <path fill="#fff" transform="rotate(180 15 15)" d="M0 0H30V30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowRight;
