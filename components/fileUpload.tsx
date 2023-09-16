"use client";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if (
    (value && fileType === "png") ||
    (value && fileType === "jpg") ||
    (value && fileType === "jpeg") ||
    (value && fileType === "gif") ||
    (value && fileType === "webp") ||
    (value && fileType === "aces") ||
    (value && fileType === "avif") ||
    (value && fileType === "bmp") ||
    (value && fileType === "cgm") ||
    (value && fileType === "dicom-rle") ||
    (value && fileType === "emf") ||
    (value && fileType === "fits") ||
    (value && fileType === "g3fax") ||
    (value && fileType === "heic") ||
    (value && fileType === "heif") ||
    (value && fileType === "ief") ||
    (value && fileType === "jls") ||
    (value && fileType === "jp2") ||
    (value && fileType === "jph") ||
    (value && fileType === "jphc") ||
    (value && fileType === "jpm") ||
    (value && fileType === "jpx") ||
    (value && fileType === "ktx") ||
    (value && fileType === "ktx2") ||
    (value && fileType === "sgi") ||
    (value && fileType === "ico") ||
    (value && fileType === "svg+xml") ||
    (value && fileType === "t38") ||
    (value && fileType === "svg") ||
    (value && fileType === "tiff")
  ) {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-md" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (
    value &&
    fileType !== "png" &&
    fileType !== "jpg" &&
    fileType !== "jpeg" &&
    fileType !== "gif" &&
    fileType !== "webp" &&
    fileType !== "aces" &&
    fileType !== "avif" &&
    fileType !== "bmp" &&
    fileType !== "cgm" &&
    fileType !== "dicom-rle" &&
    fileType !== "emf" &&
    fileType !== "fits" &&
    fileType !== "g3fax" &&
    fileType !== "heic" &&
    fileType !== "heif" &&
    fileType !== "ief" &&
    fileType !== "jls" &&
    fileType !== "jp2" &&
    fileType !== "jph" &&
    fileType !== "jphc" &&
    fileType !== "jpm" &&
    fileType !== "jpx" &&
    fileType !== "ktx" &&
    fileType !== "ktx2" &&
    fileType !== "sgi" &&
    fileType !== "ico" &&
    fileType !== "svg+xml" &&
    fileType !== "t38" &&
    fileType !== "svg" &&
    fileType !== "tiff"
  ) {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
