// Modules
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { RiHome4Line } from "@remixicon/react";

// Components
import LoginForm from "./form";

// Utilities
import { BRAND } from "@/core/constants/constant";
import { useTheme } from "@/core/contexts/theme";

export default async function LoginPage() {
  const auth = await getTranslations("auth");
  // const { textColor } = useTheme();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h4 className="mb-0">
          {auth("login_title") + " "}{" "}
          <span className={"text-warning"}>{BRAND.name}</span>
        </h4>
        <Link href="/" className="back-home">
          <RiHome4Line />
        </Link>
      </div>
      <p className="fs-6">{auth("login_description")}</p>
      <LoginForm />
    </>
  );
}
