import { Outlet, useLocation } from "react-router-dom";
import ExaHeader from "../example/component/ExaHeader";
import { useEffect, useState } from "react";

function ExaLayout() {
  const { pathname } = useLocation();
  const [notHeaderView, setNotHeaderView] = useState<string[]>(); //header 안보이게
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    const reset = [
      "coins",
      "joinstep1",
      "joinstep2",
      "joinconfirm",
      "todo",
      "netflix",
    ];
    const page = ["netflix"];
    setNotHeaderView(page);
    pageNameHandler(pathname);
    if (reset.includes(pathname.substring(1))) {
      // body scroll
      document.body.style.overflowY = "unset";
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const pageNameHandler = (page: string) => {
    const name = page.split("/")[1];

    switch (name) {
      case "coins":
        setPageName("Coin");
        break;
      case "joinstep1":
        setPageName("유의사항");
        break;
      case "joinstep2":
        setPageName("프로필");
        break;
      case "joinconfirm":
        setPageName("가입완료");
        break;
      case "todo":
        setPageName("ToDO");
        break;
    }
  };
  return (
    <>
      {notHeaderView?.includes(pathname.split("/")[1]) ? null : (
        <ExaHeader pageName={pageName} />
      )}
      <Outlet />
    </>
  );
}

export default ExaLayout;
