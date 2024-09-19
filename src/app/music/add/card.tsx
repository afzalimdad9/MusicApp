/**
 * @name SongCard
 * @file card.tsx
 * @description add song card component
 */
"use client";

// Modules
import React, { useCallback } from "react";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";
import { RiAddLine } from "@remixicon/react";

// Contexts
import { useTheme } from "@/core/contexts/theme";

// Components
import Tab from "@/core/components/tab";
import SongForm from "./form";
import Dropzone from "@/core/components/dropzone";
import Input from "@/core/components/input";
import ErrorHandler from "@/core/components/error";

const SongCard: React.FC = () => {
  const { replaceClassName } = useTheme();
  const locale = useTranslations();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<any>();

  //
  // Data for tab list view
  const tabs = [
    {
      id: "music",
      name: locale("add_music"),
    },
    {
      id: "album",
      name: locale("add_album"),
    },
  ];

  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  const submitForm = (data: any) => {};

  /**
   *
   * Handle dropzone `onDrop` event
   */
  const handleDrop = useCallback((acceptedFiles: any) => {
    const { path } = acceptedFiles[0];
    setValue("cover", path, { shouldValidate: true });
  }, []);

  return (
    <form className="card" onSubmit={handleSubmit(submitForm)}>
      <div className="card-header pb-0">
        <Tab id="add_music">
          {tabs.map((tab, index) => (
            <li key={tab.id} className="nav-item" role="presentation">
              <button
                className={classNames("nav-link", index === 0 && "active")}
                id={tab.id}
                data-bs-toggle="tab"
                data-bs-target={"#" + tab.id + "_pane"}
                type="button"
                role="tab"
                aria-controls={tab.id + "_pane"}
                aria-selected={index === 0 ? true : false}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </Tab>
      </div>
      <div className="card-body">
        <div className="tab-content" id="add_music_content">
          <div
            className="tab-pane fade show active"
            id="music_pane"
            role="tabpanel"
            aria-labelledby="music"
            tabIndex={0}
          >
            <SongForm attachmentId="song_file_1" />
          </div>
          <div
            className="tab-pane fade"
            id="album_pane"
            role="tabpanel"
            aria-labelledby="album"
            tabIndex={0}
          >
            <div className="mb-4">
              <Controller
                name="cover"
                control={control}
                render={() => (
                  <Dropzone
                    noClick
                    title={locale("drag_and_drop")}
                    infoText="320x320 (Max: 120KB)"
                    onDrop={handleDrop}
                  />
                )}
              />
              {<ErrorHandler root={errors?.cover as any} />}
            </div>
            <div className="mb-4">
              <Input
                id="name"
                placeholder="Album name"
                className={classNames(
                  "form-control",
                  errors?.name && "is-invalid"
                )}
                {...register("title", {
                  required: true,
                  minLength: { value: 5, message: "5" },
                })}
              />
              {<ErrorHandler root={errors?.name as any} />}
            </div>
            <SongForm attachmentId="song_file_2" />
            <button type="button" className="btn btn-sm btn-light-primary mt-3">
              <div className="btn__wrap">
                <RiAddLine size={20} />
                <span>{locale("add_new")}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-danger" style={{ minWidth: 120 }}>
          {locale("add_music")}
        </button>
        <button className={replaceClassName("btn btn-outline-secondary ms-2")}>
          {locale("cancel")}
        </button>
      </div>
    </form>
  );
};

SongCard.displayName = "SongCard";
export default SongCard;
