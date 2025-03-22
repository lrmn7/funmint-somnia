'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import { useMintStepStatus } from '@/store/useMintStepStatus';
import { RotateCw } from 'lucide-react';

/**
 * DialogStartOver component renders a dialog to confirm starting over the minting process.
 * It provides visual feedback and interaction elements to confirm or cancel the action.
 */
export default function DialogStartOver({ isFormSubmitting }: { isFormSubmitting: boolean }) {
  const { setStepStatus } = useMintStepStatus();

  return (
    <AlertDialog>
      {/* Button to trigger the dialog, disabled when form is submitting */}
      <AlertDialogTrigger asChild disabled={isFormSubmitting}>
        <button
          className={cn(
            'flex flex-col justify-center items-center bg-black/60 absolute w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out',
            isFormSubmitting && 'hidden',
          )}
        >
          {/* Icon with rotation animation */}
          <RotateCw
            color="white"
            size={40}
            strokeWidth={2}
            className="-rotate-180 group-hover:rotate-0 transition-transform duration-500 ease-in-out"
          />
          <p className="text-white font-semibold">Start Over</p>
        </button>
      </AlertDialogTrigger>

      {/* Dialog content to confirm the action */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to restart?</AlertDialogTitle>
          <AlertDialogDescription>
            Your current progress will be lost, and you will begin again from the upload step.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={() => {
              if (isFormSubmitting) return;
              setStepStatus('Upload');
              localStorage.removeItem('unfinished_ipfs_url');
            }}
          >
            Start Over
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
