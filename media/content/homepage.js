import OnlineBanking from "../images/onlineBanking.svg";
import Stocks from "../images/stocks.svg";
import Crypto from "../images/crypto.svg";

export const menuItems = [
  { name: "Home", link: "home", active: true },
  { name: "Online banking", link: "online-banking", active: false },
  { name: "Stocks", link: "stocks", active: false },
  { name: "Crypto", link: "crypto", active: false },
];
export const onlineBankingContent = {
  headerLabel: "Online banking",
  header: "One platform, for all your banking needs.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  svg: <OnlineBanking />,
};
export const stockContent = {
  headerLabel: "Stocks",
  header: "Real time stock market data.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  svg: <Stocks />,
};
export const cryptoContent = {
  headerLabel: "Crypto",
  header: "Stay up to date, in this volatile domain.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  svg: <Crypto />,
};
