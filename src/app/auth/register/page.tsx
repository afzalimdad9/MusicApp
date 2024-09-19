// Modules
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { RiHome4Line } from "@remixicon/react";

// Components
import RegisterForm from "./form";

// Utilities
import { BRAND } from "@/core/constants/constant";
import { useTheme } from "@/core/contexts/theme";

export default async function RegisterPage() {
  // const { textColor } = useTheme();

  const auth = await getTranslations("auth");

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h4 className="mb-0">
          {auth("register_title") + " "}{" "}
          <span className={"text-warning"}>{BRAND.name}</span>
        </h4>
        <Link href="/" className="back-home">
          <RiHome4Line />
        </Link>
      </div>
      textColor
      <p
        className="fs-6"
        dangerouslySetInnerHTML={{
          __html:
            auth("register_1_description") +
            " " +
            BRAND.name +
            " " +
            auth("register_2_description"),
        }}
      />
      <RegisterForm />
    </>
  );
}
