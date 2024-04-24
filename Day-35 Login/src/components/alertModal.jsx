import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const dialogStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: 'fixed',
    zIndex: '1',
    padding: '50px',
    fontSize: '20px',
    borderRadius: '3%',
  };

export function AlertDialogBox({ message, onClose }) {
  return (
    <Dialog open={message !== null} onClose={onClose}
        animate={{
            mount: {scale: 1, y : 0, x : 780},
            unmount: {scale: 1, y: 0, x : 780},
        }}
    >
      <div className="w-max rounded mt-4" style={dialogStyles}>
        <DialogHeader className="text-red-500">Error</DialogHeader>
        <DialogBody>
          <p className="mt-3">{message}</p>
        </DialogBody>
        <DialogFooter className="flex flex-col">
          <Button className="p-1 mt-3 px-5 rounded" onClick={onClose} color="blue">
            Close
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
}
