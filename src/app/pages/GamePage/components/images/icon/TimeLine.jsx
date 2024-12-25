function TimeLine(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_2503)">
        <g clipPath="url(#clip1_2_2503)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h14zm-1-3a1 1 0 011 1v1H3V6a1 1 0 011-1h12zm-2-3a1 1 0 011 1v1H5V3a1 1 0 011-1h8z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2_2503">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
        <clipPath id="clip1_2_2503">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default TimeLine;
