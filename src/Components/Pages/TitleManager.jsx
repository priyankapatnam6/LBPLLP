import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const companyName = "LeftBrain Path LLP";

    if (pathname === "/") {
      document.title = companyName;
    } else {
      const pageName = pathname
        .replace("/", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      document.title = `${pageName} - ${companyName}`;
    }
  }, [pathname]);

  return null;
};

export default TitleManager;
