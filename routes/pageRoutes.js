
import { FaReact } from "react-icons/fa";


export const pageRoutes = {
  home: { label: "HOME", path: "/" },
  learn: [
    {
      label: "React Mastery",
      Icon: FaReact,
      path: "react-mastery",
      // Element: ReactMasteryLandingSection,
    },
  ],

  resumebuilder: {
    label: "Resume builder",
    path: "/resume-builder",
  },
  // TASKS
  task: [
    // { label: "BATCH FORM", path: "batch-form", Element: MultiFormDataEntry },
    // { label: "MULTI DELETE", path: "mutidelete", Element: MultiDelete },
    {
      label: "ALPHABET GRID",
      path: "/task/alphabet-grid",
      // Element: MultiDelete,
    },
    {
      label: "OPTIMISTIC UI",
      path: "optimistic-ui",
      // Element: OptimiticHookPage,
      description: "React 19 useOptimistic pattern",
    },
    {
      label: "VIRTUAL LIST",
      path: "virtual-list",
      // Element: VirtualScroll,
      description: "Performance windowing for 10k items",
    },
    {
      label: "PREFETCH WIZARD",
      path: "prefetch-wizard",
      // Element: "StepWizard",
      description: "Multi-step form with persistence",
    },
    {
      label: "URL FILTERS",
      path: "filtered-search",
      // Element: "SearchSync",
      description: "Search state synced with URL Params",
    },
    {
      label: "COMPOUND LAYOUT",
      path: "compound-layout",
      // Element: "CompoundComponent",
      description: "Advanced context-driven patterns",
    },
  ],
  "Interview questions": [
    {
      label: "React Questions",
      Icon: FaReact,
      path: "/interview-prep/react",
      // Element: ReactMasteryLandingSection,
    },
  ],
};
