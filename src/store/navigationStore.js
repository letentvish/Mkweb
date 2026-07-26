import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  // Track if we're in SAAS context or main site context
  isSaasContext: false,

  // Set SAAS context (when on SAAS-related pages)
  setSaasContext: (value) => set({ isSaasContext: value }),

  // Reset to main site context
  resetToMainContext: () => set({ isSaasContext: false }),
}));

export default useNavigationStore;
