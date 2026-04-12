import { create } from 'zustand';

export type PageRoute =
  | 'home'
  | 'how-it-works'
  | 'solutions'
  | 'api-technology'
  | 'compliance'
  | 'compliance-regulatory'
  | 'compliance-aml-kyc'
  | 'compliance-program'
  | 'compliance-risk'
  | 'compliance-data-protection'
  | 'portal'
  | 'portal-dashboard'
  | 'portal-onboarding'
  | 'portal-documents'
  | 'portal-api-access'
  | 'terms-of-service'
  | 'privacy-policy'
  | 'compliance-statement';

interface AppStore {
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
  goBack: () => void;
  portalSidebarOpen: boolean;
  setPortalSidebarOpen: (open: boolean) => void;
}

const pageHistory: PageRoute[] = ['home'];

export const useAppStore = create<AppStore>((set) => ({
  currentPage: 'home',
  navigate: (page) => {
    pageHistory.push(page);
    set({ currentPage: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  goBack: () => {
    if (pageHistory.length > 1) {
      pageHistory.pop();
      const prev = pageHistory[pageHistory.length - 1];
      set({ currentPage: prev });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  portalSidebarOpen: true,
  setPortalSidebarOpen: (open) => set({ portalSidebarOpen: open }),
}));
