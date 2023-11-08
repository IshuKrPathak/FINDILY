import { create } from "zustand";
interface RegsiterModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useRegisterModel = create<RegsiterModelStore>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () =>
    set({
      isOpen: false,
    }),
}));
export default useRegisterModel;
