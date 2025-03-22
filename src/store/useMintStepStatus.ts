/**
 * A store for managing the status of the minting process
 */
import { create } from 'zustand';

/**
 * The different statuses of the minting process
 */
type StepStatus = 'Upload' | 'Mint' | 'Done';

/**
 * The shape of the minting process store
 */
interface MintStepStatusStore {
  /**
   * The current status of the minting process
   */
  stepStatus: StepStatus | null;
  /**
   * Sets the current status of the minting process
   * @param status The new status of the minting process
   */
  setStepStatus: (status: StepStatus) => void;
}

/**
 * Creates a store for managing the status of the minting process
 * @returns A store with the current status of the minting process and a setter for it
 */
export const useMintStepStatus = create<MintStepStatusStore>((set) => ({
  /**
   * The initial status of the minting process is null
   */
  stepStatus: null,
  /**
   * Sets the current status of the minting process
   * @param status The new status of the minting process
   */
  setStepStatus: (status) => set({ stepStatus: status }),
}));
