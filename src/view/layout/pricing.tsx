/**
 * @name Pricing
 * @file pricing.tsx
 * @description component use to display plan pricing.
 */
"use client";

// Modules
import React from "react";
import PropTypes from "prop-types";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { useTranslations } from "next-intl";

// Contexts
import { useTheme } from "@/core/contexts/theme";

// Components
import PlanCard from "@/core/components/card/plan";

// Utilities
import { PlanTypes } from "@/core/types";
import IconEl from "@/core/utils/icon";

interface Props {
  data: PlanTypes[];
  userPlan?: boolean;
  showLink?: boolean;
}

const propTypes = {
  /**
   * Set event data
   */
  data: PropTypes.any.isRequired,

  /**
   * Set user plan
   */
  userPlan: PropTypes.bool,

  /**
   * Set register/choose plan link
   */
  showLink: PropTypes.bool,
};

const Pricing: React.FC<Props> = ({ data, userPlan, showLink }) => {
  const { replaceClassName } = useTheme();
  const pricing = useTranslations("pricing");
  // const { textColor } = useTheme();

  return (
    <>
      {/* Plan [[ Find at scss/framework/plan.scss ]] */}
      <div className="plan bg-light">
        <PlanCard register={userPlan} showLink={showLink} />
        <div className="plan__data">
          {data.map((plan) => (
            <div className="card plan__col" key={plan.id}>
              <div className="card-body fw-medium">
                <div className="d-flex align-items-center text-dark mb-4">
                  {IconEl(plan.icon, 32)}
                  <i className="ri-music-2-line fs-3"></i>
                  <h3
                    className={replaceClassName("h4 mb-0 ps-3")}
                    dangerouslySetInnerHTML={{ __html: plan.title }}
                  />
                </div>
                <p className="fs-6 opacity-50">{pricing("plan_subtitle")}</p>
                {plan.features.map((feature) => (
                  <div className="d-flex mb-3" key={feature.id}>
                    <RiCheckboxCircleFill
                      className={`text-danger opacity-75`}
                      size={16}
                    />
                    <span className={replaceClassName("ps-2")}>
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="card-footer pb-4 pb-sm-0">
                <div className="text-dark mb-3">
                  <span className="fs-4 fw-bold">${plan.price}</span>/
                  {pricing("year")}
                </div>
                <button type="button" className="btn btn-primary w-100">
                  {pricing("choose")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Pricing.propTypes = propTypes as any;
Pricing.displayName = "Pricing";

export default Pricing;
