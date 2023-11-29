import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "fndtn/components/ui/dialog";
import React from "react";

export interface IReusableDialog {
  contentTitle?: string;
  contentDescription?: string;
}
interface ReusableDialogProps
  extends IReusableDialog {
  trigger: string | React.ReactNode;
  children?: React.ReactNode;
}
export default function DialogReusable(
  props: ReusableDialogProps
) {
  const {
    contentDescription,
    contentTitle,
    trigger,
    children,
  } = props;
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {contentTitle ? (
            <DialogTitle>
              {contentTitle}
            </DialogTitle>
          ) : null}
          {contentDescription ? (
            <DialogDescription>
              {contentDescription}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
