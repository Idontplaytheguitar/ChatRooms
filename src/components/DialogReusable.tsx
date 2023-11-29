import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "fndtn/components/ui/dialog";

export default function DialogReusable(props: {
  trigger: string | React.ReactNode;
  contentTitle: string;
  contentDescription?: string;
  children?: React.ReactNode;
}) {
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
          <DialogTitle>
            {contentTitle}
          </DialogTitle>
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
