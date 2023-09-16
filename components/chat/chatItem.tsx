"use client";
import * as z from "zod";
import axios from "axios";
import qs from "query-string";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Member, MemberRole, Profile } from "@prisma/client";
import {
  Edit,
  FileAudio2,
  FileQuestion,
  FileText,
  FileVideo2,
  FileX,
  ShieldAlert,
  ShieldCheck,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserAvatar } from "@/components/userAvatar";
import { ActionTooltip } from "@/components/actionTooltip";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatItemProps {
  id: string;
  content: string;
  member: Member & {
    profile: Profile;
  };
  timestamp: string;
  fileUrl: string | null;
  deleted: boolean;
  currentMember: Member;
  isUpdated: boolean;
  socketUrl: string;
  socketQuery: Record<string, string>;
}

const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  ADMIN: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

const formSchema = z.object({
  content: z.string().min(1),
});

export const ChatItem = ({
  id,
  content,
  member,
  timestamp,
  fileUrl,
  deleted,
  currentMember,
  isUpdated,
  socketUrl,
  socketQuery,
}: ChatItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        setIsEditing(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keyDown", handleKeyDown);
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: content,
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `${socketUrl}/${id}`,
        query: socketQuery,
      });
      await axios.patch(url, values);
      form.reset();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    form.reset({
      content: content,
    });
  }, [content]);
  const fileType = fileUrl?.split(".").pop();
  const isAdmin = currentMember.role === MemberRole.ADMIN;
  const isModerator = currentMember.role === MemberRole.MODERATOR;
  const isOwner = currentMember.id === member.id;
  const canDeleteMessage = !deleted && (isAdmin || isModerator || isOwner);
  const canEditMessage = !deleted && isOwner && !fileUrl;
  const isPDF = fileType === "pdf" && fileUrl;
  const isImage =
    (fileUrl && fileType === "png") ||
    (fileUrl && fileType === "jpg") ||
    (fileUrl && fileType === "jpeg") ||
    (fileUrl && fileType === "gif") ||
    (fileUrl && fileType === "webp") ||
    (fileUrl && fileType === "aces") ||
    (fileUrl && fileType === "avif") ||
    (fileUrl && fileType === "bmp") ||
    (fileUrl && fileType === "cgm") ||
    (fileUrl && fileType === "dicom-rle") ||
    (fileUrl && fileType === "emf") ||
    (fileUrl && fileType === "fits") ||
    (fileUrl && fileType === "g3fax") ||
    (fileUrl && fileType === "heic") ||
    (fileUrl && fileType === "heif") ||
    (fileUrl && fileType === "ief") ||
    (fileUrl && fileType === "jls") ||
    (fileUrl && fileType === "jp2") ||
    (fileUrl && fileType === "jph") ||
    (fileUrl && fileType === "jphc") ||
    (fileUrl && fileType === "jpm") ||
    (fileUrl && fileType === "jpx") ||
    (fileUrl && fileType === "ktx") ||
    (fileUrl && fileType === "ktx2") ||
    (fileUrl && fileType === "sgi") ||
    (fileUrl && fileType === "ico") ||
    (fileUrl && fileType === "svg+xml") ||
    (fileUrl && fileType === "t38") ||
    (fileUrl && fileType === "svg") ||
    (fileUrl && fileType === "tiff");
  const isVideo =
    (fileUrl && fileType === "3gp") ||
    (fileUrl && fileType === "3gpp") ||
    (fileUrl && fileType === "3gpp2") ||
    (fileUrl && fileType === "mj2") ||
    (fileUrl && fileType === "mp2t") ||
    (fileUrl && fileType === "mp4") ||
    (fileUrl && fileType === "mpeg") ||
    (fileUrl && fileType === "webm") ||
    (fileUrl && fileType === "f4v") ||
    (fileUrl && fileType === "fli") ||
    (fileUrl && fileType === "flv") ||
    (fileUrl && fileType === "m4v") ||
    (fileUrl && fileType === "mkv") ||
    (fileUrl && fileType === "mng") ||
    (fileUrl && fileType === "asf") ||
    (fileUrl && fileType === "vob") ||
    (fileUrl && fileType === "smv") ||
    (fileUrl && fileType === "wvx") ||
    (fileUrl && fileType === "wmx") ||
    (fileUrl && fileType === "wmv") ||
    (fileUrl && fileType === "wm");
  const isAudio =
    (fileUrl && fileType === "acc") ||
    (fileUrl && fileType === "mp3") ||
    (fileUrl && fileType === "wav") ||
    (fileUrl && fileType === "flac") ||
    (fileUrl && fileType === "aiff") ||
    (fileUrl && fileType === "wma") ||
    (fileUrl && fileType === "dsd") ||
    (fileUrl && fileType === "opus") ||
    (fileUrl && fileType === "m4a") ||
    (fileUrl && fileType === "ogg") ||
    (fileUrl && fileType === "3gpp") ||
    (fileUrl && fileType === "adpcm") ||
    (fileUrl && fileType === "amr") ||
    (fileUrl && fileType === "basic") ||
    (fileUrl && fileType === "midi") ||
    (fileUrl && fileType === "mxmf") ||
    (fileUrl && fileType === "s3m") ||
    (fileUrl && fileType === "silk") ||
    (fileUrl && fileType === "uva") ||
    (fileUrl && fileType === "eol") ||
    (fileUrl && fileType === "dra") ||
    (fileUrl && fileType === "dts") ||
    (fileUrl && fileType === "dtshd") ||
    (fileUrl && fileType === "lvp") ||
    (fileUrl && fileType === "pya") ||
    (fileUrl && fileType === "ecelp4800") ||
    (fileUrl && fileType === "ecelp7470") ||
    (fileUrl && fileType === "ecelp9600") ||
    (fileUrl && fileType === "rip") ||
    (fileUrl && fileType === "mka") ||
    (fileUrl && fileType === "aiff") ||
    (fileUrl && fileType === "caf") ||
    (fileUrl && fileType === "flac") ||
    (fileUrl && fileType === "m3u") ||
    (fileUrl && fileType === "wax") ||
    (fileUrl && fileType === "wma") ||
    (fileUrl && fileType === "ram") ||
    (fileUrl && fileType === "rm") ||
    (fileUrl && fileType === "rmp") ||
    (fileUrl && fileType === "ra") ||
    (fileUrl && fileType === "xm");
  return (
    <div className="relative group flex items-center hover:bg-black/5 p-4 transition w-full">
      <div className="group flex gap-x-2 items-start w-full">
        <div className="cursor-pointer hover:drop-shadow-md transition">
          <UserAvatar src={member.profile.imageUrl} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <p className="font-semibold text-sm hover:underline cursor-pointer">
                {member.profile.name}
              </p>
              <ActionTooltip label={member.role}>
                {roleIconMap[member.role]}
              </ActionTooltip>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {timestamp}
            </span>
          </div>
          {isImage && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-md mt-2 overflow-hidden border flex items-center bg-secondary h-48 w-48"
            >
              <Image
                src={fileUrl}
                alt={content}
                fill
                className="object-cover"
              />
            </a>
          )}
          {isAudio && (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
              <FileAudio2 className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                Audio File
              </a>
            </div>
          )}
          {isVideo && (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
              <FileVideo2 className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                Video File
              </a>
            </div>
          )}

          {isPDF && (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
              <FileText className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                PDF File
              </a>
            </div>
          )}
          {!isPDF && !isAudio && !isImage && !isVideo && fileUrl && (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
              <FileQuestion className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                Unsupported File Extension
              </a>
            </div>
          )}
          {!fileUrl && !isEditing && (
            <p
              className={cn(
                "text-sm text-zinc-600 dark:text-zinc-300",
                deleted &&
                  "italic text-zinc-500 dark:text-zinc-400 text-xs mt-1"
              )}
            >
              {content}
              {isUpdated && !deleted && (
                <span className="text-[10px] mx-2 text-zinc-500 dark:text-zinc-400">
                  (edited)
                </span>
              )}
            </p>
          )}
          {!fileUrl && isEditing && (
            <Form {...form}>
              <form
                className="flex items-center w-full gap-x-2 pt-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            disabled={isLoading}
                            className="p-2 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                            placeholder="Edited message"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} size="sm" variant="primary">
                  Save
                </Button>
              </form>
              <span className="text-[10px] mt-1 text-zinc-400">
                Press escape to cancel, enter to save
              </span>
            </Form>
          )}
        </div>
      </div>
      {canDeleteMessage && (
        <div className="hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800 border rounded-sm">
          {canEditMessage && (
            <ActionTooltip label="Edit">
              <Edit
                onClick={() => setIsEditing(true)}
                className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
              />
            </ActionTooltip>
          )}
          <ActionTooltip label="Delete">
            <Trash className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
          </ActionTooltip>
        </div>
      )}
    </div>
  );
};
