/**
 * @name Brand
 * @file brand.tsx
 * @description music brand component
 */
"use client";

// Modules
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { THEME_MODE } from "./../constants/constant";

import { BRAND, SIDEBAR_TOGGLE } from "../constants/constant";
import { useTheme } from "../contexts/theme";

const Brand: React.FC = () => {
  /**
   *
   * Handle link `onClick` event
   */
  const { theme } = useTheme();

  const handleClick = () => {
    document.body.removeAttribute(SIDEBAR_TOGGLE);
  };
  return (
    <Link
      className="brand d-flex justify-content-center align-items-center"
      href={BRAND.href}
      onClick={handleClick}
    >
      <Image
        src={theme === "light" ? BRAND.logo : BRAND.dark_logo}
        width={100}
        height={28}
        alt={BRAND.name}
        priority
      />
    </Link>
  );
};

Brand.displayName = "Brand";
export default Brand;
