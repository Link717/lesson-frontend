import { css } from "styled-components";

export const themes = {
  flex: (justify = null, align = null, direction = null) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `,

  container: css`
    width: 400px;
    margin: 150px auto 0;
  `,

  mainBlue: "rgb(111, 99, 233)",
  mainGrey: "rgb(247, 247, 247)",
  deepGrey: "rgb(162, 163, 165)",
};
