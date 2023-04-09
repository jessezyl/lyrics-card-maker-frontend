import React, { Fragment } from "react";
import styles from "./CardSymbol.module.sass";

const CardSymbol = ({
  className,
  state = "inactive",
  aspectRatio = "1:1",
  style = {},
}) => {
  const cards = {
    "1:1": (
      <svg
        className={`${styles[state]}`}
        viewBox="0 0 277 277"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="aspect-1-1">
          <g id="card">
            <g clipPath="url(#clip0_303_50)">
              <g className={styles["footer"]} clipPath="url(#clip1_303_50)">
                <rect
                  className={styles["background"]}
                  x="32"
                  y="198"
                  width="214"
                  height="48"
                />
                <rect
                  className={styles["foreground"]}
                  x="46"
                  y="217"
                  width="107"
                  height="10"
                  rx="4"
                />

                <g className={styles["foreground"]}>
                  <path
                    id="Vector"
                    d="M234.558 227.077C234.536 225.839 234.407 224.615 234.206 223.399C233.422 218.806 231.495 214.754 228.498 211.205C228.188 210.838 227.865 210.485 227.527 210.14C227.319 209.924 227.053 209.902 226.844 210.046C226.643 210.183 226.585 210.392 226.672 210.687C226.693 210.759 226.722 210.823 226.744 210.888C227.894 213.962 228.483 217.136 228.505 220.419C228.476 221.016 228.447 221.614 228.419 222.211C228.332 223.845 228.073 225.45 227.664 227.027C226.348 232.101 223.803 236.463 219.964 240.027C214.961 244.669 209.015 247.059 202.2 247.254C200.482 247.304 198.778 247.16 197.089 246.865C195.364 246.57 193.674 246.109 192.042 245.476C191.683 245.339 191.431 245.404 191.287 245.656C191.144 245.893 191.201 246.116 191.482 246.383C191.719 246.606 191.956 246.822 192.2 247.038C196.888 251.105 202.344 253.199 208.534 253.379C210.029 253.423 211.524 253.307 213.005 253.063C218.34 252.199 222.998 249.917 226.844 246.116C232.121 240.905 234.702 234.534 234.558 227.077Z"
                  />
                  <path
                    id="Vector_2"
                    d="M193.509 234.074C193.717 233.915 193.753 233.707 193.638 233.354C193.624 233.318 193.617 233.289 193.602 233.253C192.711 230.734 192.459 228.142 192.84 225.501C193.343 222.024 194.817 219.015 197.218 216.467C197.412 216.258 197.506 216.049 197.506 215.761C197.499 214.862 197.499 213.962 197.499 213.062C197.499 212.177 197.499 211.284 197.499 210.399C197.499 209.823 197.326 209.643 196.751 209.643C194.975 209.643 193.207 209.643 191.431 209.636C191.136 209.636 190.899 209.722 190.691 209.924C187.743 212.796 186.176 216.301 185.932 220.397C185.838 221.959 186.018 223.507 186.42 225.026C187.427 228.812 189.555 231.799 192.783 234.002C193.106 234.225 193.293 234.239 193.509 234.074Z"
                  />
                  <path
                    id="Vector_3"
                    d="M203.336 222.787C203.775 226.069 206.873 228.387 210.137 227.862C213.034 227.394 215.14 224.925 215.14 221.981C215.14 221.39 215.14 220.807 215.14 220.217C215.14 219.447 215.14 218.684 215.14 217.914C215.14 217.424 215.27 217.302 215.759 217.295C216.212 217.287 216.672 217.302 217.125 217.287C217.542 217.273 217.729 217.021 217.657 216.618C217.642 216.546 217.635 216.474 217.621 216.409C217.074 214.099 216.082 212.011 214.644 210.125C214.378 209.78 214.084 209.65 213.667 209.657C212.459 209.672 211.251 209.657 210.036 209.664C209.907 209.664 209.77 209.672 209.641 209.693C209.339 209.744 209.202 209.888 209.159 210.19C209.145 210.305 209.152 210.427 209.152 210.55C209.152 212.436 209.152 214.315 209.152 216.2C209.152 216.978 209.001 217.726 208.685 218.439C207.75 220.498 206.133 221.642 203.904 221.945C203.437 222.009 203.3 222.161 203.322 222.621C203.329 222.664 203.329 222.729 203.336 222.787Z"
                  />
                </g>
              </g>
              <g className={styles["main"]} clipPath="url(#clip2_303_50)">
                <rect
                  className={styles["background"]}
                  x="32"
                  y="32"
                  width="214"
                  height="166"
                />
                <path
                  className={styles["foreground"]}
                  d="M104.196 84.3636V144H88.0057V99.2727H87.6562L74.6108 107.077V93.3324L89.2869 84.3636H104.196ZM138.823 137.536C136.571 137.536 134.639 136.749 133.028 135.177C131.436 133.585 130.65 131.653 130.67 129.382C130.65 127.169 131.436 125.276 133.028 123.704C134.639 122.131 136.571 121.345 138.823 121.345C140.958 121.345 142.841 122.131 144.472 123.704C146.122 125.276 146.957 127.169 146.976 129.382C146.957 130.896 146.559 132.275 145.782 133.517C145.025 134.74 144.035 135.72 142.812 136.458C141.589 137.176 140.26 137.536 138.823 137.536ZM138.823 108.882C136.571 108.882 134.639 108.096 133.028 106.523C131.436 104.932 130.65 103 130.67 100.729C130.65 98.5156 131.436 96.6229 133.028 95.0504C134.639 93.478 136.571 92.6918 138.823 92.6918C140.958 92.6918 142.841 93.478 144.472 95.0504C146.122 96.6229 146.957 98.5156 146.976 100.729C146.957 102.243 146.559 103.621 145.782 104.864C145.025 106.087 144.035 107.067 142.812 107.805C141.589 108.523 140.26 108.882 138.823 108.882ZM198.361 84.3636V144H182.171V99.2727H181.822L168.776 107.077V93.3324L183.452 84.3636H198.361Z"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_303_50">
            <rect x="32" y="32" width="214" height="214" rx="10" />
          </clipPath>
          <clipPath id="clip1_303_50">
            <rect width="214" height="48" transform="translate(32 198)" />
          </clipPath>
          <clipPath id="clip2_303_50">
            <rect width="214" height="166" transform="translate(32 32)" />
          </clipPath>
        </defs>
      </svg>
    ),
    "3:4": (
      <svg
        className={`${styles[state]}`}
        viewBox="0 0 277 277"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="aspect-3-4">
          <g id="card">
            <g clipPath="url(#clip0_303_62)">
              <g className={styles["footer"]} clipPath="url(#clip1_303_62)">
                <rect
                  className={styles["background"]}
                  x="59"
                  y="199"
                  width="161"
                  height="47"
                />
                <rect
                  className={styles["foreground"]}
                  x="73"
                  y="218"
                  width="72"
                  height="9"
                  rx="4"
                />
                <g className={styles["foreground"]}>
                  <path
                    id="Vector"
                    d="M208.296 232.105C208.277 231.034 208.165 229.975 207.991 228.922C207.314 224.948 205.649 221.441 203.057 218.37C202.79 218.052 202.51 217.747 202.218 217.448C202.038 217.261 201.808 217.242 201.628 217.367C201.454 217.485 201.404 217.666 201.479 217.921C201.498 217.983 201.522 218.039 201.541 218.095C202.535 220.755 203.045 223.502 203.063 226.343C203.039 226.86 203.014 227.377 202.989 227.894C202.914 229.308 202.691 230.697 202.336 232.061C201.199 236.453 198.999 240.228 195.681 243.311C191.356 247.329 186.217 249.397 180.326 249.566C178.841 249.609 177.368 249.485 175.907 249.229C174.416 248.974 172.956 248.575 171.545 248.027C171.234 247.909 171.017 247.965 170.893 248.183C170.768 248.388 170.818 248.581 171.06 248.812C171.265 249.005 171.47 249.192 171.682 249.379C175.733 252.898 180.45 254.711 185.8 254.867C187.093 254.904 188.386 254.804 189.666 254.593C194.277 253.845 198.303 251.87 201.628 248.581C206.189 244.071 208.42 238.559 208.296 232.105Z"
                  />
                  <path
                    id="Vector_2"
                    d="M172.813 238.16C172.993 238.023 173.024 237.842 172.925 237.537C172.912 237.506 172.906 237.481 172.894 237.45C172.123 235.27 171.905 233.027 172.235 230.741C172.67 227.732 173.944 225.128 176.019 222.923C176.187 222.743 176.268 222.562 176.268 222.313C176.262 221.534 176.262 220.755 176.262 219.977C176.262 219.211 176.262 218.438 176.262 217.672C176.262 217.174 176.112 217.018 175.615 217.018C174.08 217.018 172.552 217.018 171.017 217.012C170.762 217.012 170.557 217.086 170.377 217.261C167.829 219.746 166.474 222.78 166.263 226.324C166.182 227.676 166.338 229.015 166.686 230.33C167.556 233.606 169.395 236.192 172.185 238.098C172.465 238.291 172.626 238.303 172.813 238.16Z"
                  />
                  <path
                    id="Vector_3"
                    d="M181.308 228.393C181.687 231.233 184.365 233.239 187.186 232.784C189.691 232.379 191.511 230.243 191.511 227.695C191.511 227.184 191.511 226.68 191.511 226.169C191.511 225.502 191.511 224.842 191.511 224.175C191.511 223.752 191.623 223.646 192.046 223.64C192.437 223.634 192.835 223.646 193.226 223.634C193.587 223.621 193.748 223.403 193.686 223.054C193.674 222.992 193.668 222.93 193.655 222.874C193.183 220.874 192.325 219.067 191.083 217.435C190.853 217.136 190.598 217.024 190.237 217.031C189.193 217.043 188.149 217.031 187.099 217.037C186.987 217.037 186.869 217.043 186.757 217.062C186.496 217.105 186.378 217.23 186.341 217.491C186.329 217.591 186.335 217.697 186.335 217.803C186.335 219.435 186.335 221.061 186.335 222.693C186.335 223.366 186.204 224.013 185.931 224.63C185.123 226.412 183.725 227.402 181.798 227.664C181.395 227.72 181.276 227.851 181.295 228.249C181.301 228.287 181.301 228.343 181.308 228.393Z"
                  />
                </g>
              </g>
              <g className={styles["main"]} clipPath="url(#clip2_303_62)">
                <rect
                  className={styles["background"]}
                  x="59"
                  y="32"
                  width="161"
                  height="167"
                />
                <path
                  className={styles["foreground"]}
                  d="M98.9432 137.597C95.5057 137.597 92.4517 137.007 89.7812 135.828C87.125 134.635 85.0369 132.994 83.517 130.906C81.9972 128.818 81.2301 126.418 81.2159 123.705H93.1477C93.1619 124.543 93.4176 125.295 93.9148 125.963C94.4261 126.616 95.1222 127.128 96.0028 127.497C96.8835 127.866 97.892 128.051 99.0284 128.051C100.122 128.051 101.088 127.859 101.926 127.476C102.764 127.078 103.418 126.531 103.886 125.835C104.355 125.139 104.582 124.344 104.568 123.449C104.582 122.568 104.313 121.787 103.759 121.105C103.219 120.423 102.459 119.891 101.479 119.507C100.499 119.124 99.3693 118.932 98.0909 118.932H93.6591V110.75H98.0909C99.2699 110.75 100.307 110.558 101.202 110.175C102.111 109.791 102.814 109.259 103.311 108.577C103.822 107.895 104.071 107.114 104.057 106.233C104.071 105.381 103.865 104.628 103.439 103.974C103.013 103.321 102.416 102.81 101.649 102.44C100.896 102.071 100.023 101.886 99.0284 101.886C97.9489 101.886 96.983 102.078 96.1307 102.462C95.2926 102.845 94.6321 103.378 94.1491 104.06C93.6662 104.741 93.4176 105.523 93.4034 106.403H82.0682C82.0824 103.733 82.8139 101.375 84.2628 99.3295C85.7259 97.2841 87.7287 95.679 90.2713 94.5142C92.8139 93.3494 95.733 92.767 99.0284 92.767C102.253 92.767 105.101 93.3139 107.572 94.4077C110.058 95.5014 111.997 97.0071 113.389 98.9247C114.795 100.828 115.491 103.009 115.477 105.466C115.506 107.909 114.668 109.912 112.963 111.474C111.273 113.037 109.128 113.96 106.528 114.244V114.585C110.051 114.969 112.7 116.048 114.476 117.824C116.251 119.585 117.125 121.801 117.097 124.472C117.111 127.028 116.344 129.294 114.795 131.268C113.261 133.243 111.124 134.791 108.382 135.913C105.655 137.036 102.509 137.597 98.9432 137.597ZM138.763 132.27C137.116 132.27 135.702 131.695 134.523 130.544C133.358 129.379 132.783 127.966 132.797 126.304C132.783 124.685 133.358 123.3 134.523 122.149C135.702 120.999 137.116 120.423 138.763 120.423C140.326 120.423 141.704 120.999 142.897 122.149C144.104 123.3 144.715 124.685 144.729 126.304C144.715 127.412 144.424 128.42 143.856 129.33C143.302 130.224 142.577 130.942 141.682 131.482C140.787 132.007 139.814 132.27 138.763 132.27ZM138.763 111.304C137.116 111.304 135.702 110.729 134.523 109.578C133.358 108.413 132.783 107 132.797 105.338C132.783 103.719 133.358 102.334 134.523 101.183C135.702 100.033 137.116 99.4574 138.763 99.4574C140.326 99.4574 141.704 100.033 142.897 101.183C144.104 102.334 144.715 103.719 144.729 105.338C144.715 106.446 144.424 107.455 143.856 108.364C143.302 109.259 142.577 109.976 141.682 110.516C140.787 111.041 139.814 111.304 138.763 111.304ZM160.51 130.182V120.977L178.067 93.3636H186.419V105.636H181.646L172.186 120.636V120.977H198.095V130.182H160.51ZM181.731 137V127.369L181.987 123.364V93.3636H193.067V137H181.731Z"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_303_62">
            <rect x="59" y="32" width="160.5" height="214" rx="10" />
          </clipPath>
          <clipPath id="clip1_303_62">
            <rect width="160.5" height="47.08" transform="translate(59 199)" />
          </clipPath>
          <clipPath id="clip2_303_62">
            <rect width="161" height="167" transform="translate(59 32)" />
          </clipPath>
        </defs>
      </svg>
    ),
    "4:3": (
      <svg
        className={`${styles[state]}`}
        viewBox="0 0 277 277"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="aspect-4-3">
          <g id="card">
            <g clipPath="url(#clip0_303_56)">
              <g className={styles["footer"]} clipPath="url(#clip1_303_56)">
                <rect
                  className={styles["background"]}
                  x="14"
                  y="183"
                  width="249"
                  height="35"
                />
                <rect
                  className={styles["foreground"]}
                  x="28"
                  y="197"
                  width="107"
                  height="7"
                  rx="3.5"
                />
                <g className={styles["foreground"]}>
                  <path
                    id="Vector"
                    d="M252.296 206.105C252.277 205.034 252.165 203.975 251.991 202.922C251.314 198.948 249.649 195.441 247.057 192.37C246.79 192.052 246.51 191.747 246.218 191.448C246.038 191.261 245.808 191.242 245.628 191.367C245.454 191.485 245.404 191.666 245.479 191.921C245.498 191.983 245.522 192.039 245.541 192.095C246.535 194.755 247.045 197.502 247.063 200.343C247.039 200.86 247.014 201.377 246.989 201.894C246.914 203.308 246.691 204.697 246.336 206.061C245.199 210.453 242.999 214.228 239.681 217.311C235.356 221.329 230.217 223.397 224.326 223.566C222.841 223.609 221.368 223.485 219.907 223.229C218.416 222.974 216.956 222.575 215.545 222.027C215.234 221.909 215.017 221.965 214.893 222.183C214.768 222.388 214.818 222.581 215.06 222.812C215.265 223.005 215.47 223.192 215.682 223.379C219.733 226.898 224.45 228.711 229.8 228.867C231.093 228.904 232.386 228.804 233.666 228.593C238.277 227.845 242.303 225.87 245.628 222.581C250.189 218.071 252.42 212.559 252.296 206.105Z"
                  />
                  <path
                    id="Vector_2"
                    d="M216.813 212.16C216.993 212.023 217.024 211.842 216.925 211.537C216.912 211.506 216.906 211.481 216.894 211.45C216.123 209.27 215.905 207.027 216.235 204.741C216.67 201.732 217.944 199.128 220.019 196.923C220.187 196.743 220.268 196.562 220.268 196.313C220.262 195.534 220.262 194.755 220.262 193.977C220.262 193.211 220.262 192.438 220.262 191.672C220.262 191.174 220.112 191.018 219.615 191.018C218.08 191.018 216.552 191.018 215.017 191.012C214.762 191.012 214.557 191.086 214.377 191.261C211.829 193.746 210.474 196.78 210.263 200.324C210.182 201.676 210.338 203.015 210.686 204.33C211.556 207.606 213.395 210.192 216.185 212.098C216.465 212.291 216.626 212.303 216.813 212.16Z"
                  />
                  <path
                    id="Vector_3"
                    d="M225.308 202.392C225.687 205.233 228.365 207.239 231.186 206.784C233.691 206.379 235.511 204.242 235.511 201.695C235.511 201.184 235.511 200.679 235.511 200.169C235.511 199.502 235.511 198.842 235.511 198.175C235.511 197.752 235.623 197.646 236.046 197.639C236.437 197.633 236.835 197.646 237.226 197.633C237.587 197.621 237.748 197.403 237.686 197.054C237.674 196.992 237.668 196.929 237.655 196.873C237.183 194.874 236.325 193.067 235.083 191.435C234.853 191.136 234.598 191.024 234.237 191.03C233.193 191.043 232.149 191.03 231.099 191.037C230.987 191.037 230.869 191.043 230.757 191.061C230.496 191.105 230.378 191.23 230.341 191.491C230.329 191.591 230.335 191.697 230.335 191.803C230.335 193.435 230.335 195.061 230.335 196.693C230.335 197.365 230.204 198.013 229.931 198.63C229.123 200.412 227.725 201.402 225.798 201.664C225.395 201.72 225.276 201.85 225.295 202.249C225.301 202.287 225.301 202.343 225.308 202.392Z"
                  />
                </g>
              </g>
              <g className={styles["main"]} clipPath="url(#clip2_303_56)">
                <rect
                  className={styles["background"]}
                  x="14"
                  y="60"
                  width="249"
                  height="123"
                />
                <path
                  className={styles["foreground"]}
                  d="M68.9659 139.818V128.773L90.0341 95.6364H100.057V110.364H94.3295L82.9773 128.364V128.773H114.068V139.818H68.9659ZM94.4318 148V136.443L94.7386 131.636V95.6364H108.034V148H94.4318ZM139.685 142.324C137.707 142.324 136.011 141.634 134.597 140.253C133.199 138.855 132.509 137.159 132.526 135.165C132.509 133.222 133.199 131.56 134.597 130.179C136.011 128.798 137.707 128.108 139.685 128.108C141.56 128.108 143.213 128.798 144.645 130.179C146.094 131.56 146.827 133.222 146.844 135.165C146.827 136.494 146.477 137.705 145.795 138.795C145.131 139.869 144.261 140.73 143.188 141.378C142.114 142.009 140.946 142.324 139.685 142.324ZM139.685 117.165C137.707 117.165 136.011 116.474 134.597 115.094C133.199 113.696 132.509 112 132.526 110.006C132.509 108.062 133.199 106.401 134.597 105.02C136.011 103.639 137.707 102.949 139.685 102.949C141.56 102.949 143.213 103.639 144.645 105.02C146.094 106.401 146.827 108.062 146.844 110.006C146.827 111.335 146.477 112.545 145.795 113.636C145.131 114.71 144.261 115.571 143.188 116.219C142.114 116.849 140.946 117.165 139.685 117.165ZM186.747 148.716C182.622 148.716 178.957 148.009 175.752 146.594C172.565 145.162 170.059 143.193 168.235 140.688C166.411 138.182 165.491 135.301 165.474 132.045H179.792C179.809 133.051 180.116 133.955 180.712 134.756C181.326 135.54 182.161 136.153 183.218 136.597C184.275 137.04 185.485 137.261 186.849 137.261C188.161 137.261 189.32 137.031 190.326 136.571C191.332 136.094 192.116 135.437 192.678 134.602C193.241 133.767 193.514 132.812 193.497 131.739C193.514 130.682 193.19 129.744 192.525 128.926C191.877 128.108 190.965 127.469 189.789 127.009C188.613 126.548 187.258 126.318 185.724 126.318H180.406V116.5H185.724C187.139 116.5 188.383 116.27 189.457 115.81C190.548 115.349 191.391 114.71 191.988 113.892C192.602 113.074 192.9 112.136 192.883 111.08C192.9 110.057 192.653 109.153 192.141 108.369C191.63 107.585 190.914 106.972 189.994 106.528C189.09 106.085 188.042 105.864 186.849 105.864C185.553 105.864 184.394 106.094 183.372 106.554C182.366 107.014 181.573 107.653 180.994 108.472C180.414 109.29 180.116 110.227 180.099 111.284H166.497C166.514 108.08 167.391 105.25 169.13 102.795C170.886 100.341 173.289 98.4148 176.34 97.017C179.391 95.6193 182.894 94.9205 186.849 94.9205C190.718 94.9205 194.136 95.5767 197.102 96.8892C200.085 98.2017 202.411 100.009 204.082 102.31C205.769 104.594 206.604 107.21 206.587 110.159C206.622 113.091 205.616 115.494 203.57 117.369C201.542 119.244 198.968 120.352 195.849 120.693V121.102C200.076 121.562 203.255 122.858 205.386 124.989C207.516 127.102 208.565 129.761 208.531 132.966C208.548 136.034 207.627 138.753 205.769 141.122C203.928 143.491 201.363 145.349 198.073 146.696C194.8 148.043 191.025 148.716 186.747 148.716Z"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_303_56">
            <rect x="14" y="60" width="249" height="158" rx="10" />
          </clipPath>
          <clipPath id="clip1_303_56">
            <rect width="249" height="35" transform="translate(14 183)" />
          </clipPath>
          <clipPath id="clip2_303_56">
            <rect width="249" height="123" transform="translate(14 60)" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return (
    <div className={className} style={style}>
      {cards[aspectRatio]}
    </div>
  );
};

export default CardSymbol;