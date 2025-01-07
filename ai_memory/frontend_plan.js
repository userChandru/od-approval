const FRONTEND_PLAN = {
  tech_stack: {
    base: "vite_react",
    language: "javascript", // not typescript
    styling: ["tailwind", "shadcn"],
    config_status: "complete",
  },
  next_steps: {
    priority: "setup_routing",
    required_packages: [
      "react-router-dom",
      "@reduxjs/toolkit",
      "react-redux",
      "axios"
    ],
  },
  sequence: {
    1: {
      phase: "setup",
      tasks: ["react_init", "tailwind_shadcn", "routing", "theme"],
      critical: true,
    },
    2: {
      phase: "auth",
      tasks: ["jwt_handling", "protected_routes", "rbac"],
      depends_on: [1],
    },
    3: {
      phase: "layout",
      tasks: ["main_structure", "role_nav", "responsive"],
      depends_on: [2],
    },
    4: {
      phase: "core_components",
      reusable: ["forms", "tables", "modals", "cards", "notifications"],
      priority: "high",
    },
    5: {
      phase: "dashboards",
      flow: ["student", "mentor", "events", "faculty"],
      features_per_role: true,
    },
    6: {
      phase: "features",
      core: ["od_flow", "events", "analytics", "calendar", "notifications"],
      complexity: "high",
    },
    7: {
      phase: "state_api",
      tasks: ["redux_setup", "api_layer", "realtime", "error_handling"],
      critical: true,
    },
    8: {
      phase: "finalization",
      tasks: ["optimize", "test", "document"],
    },
  },

  structure: {
    base: "client/src",
    critical_dirs: [
      "components/common",
      "components/layout",
      "components/role-specific",
      "context",
      "hooks",
      "pages",
      "services",
      "utils",
    ],
  },

  _dev_notes: {
    priority_focus: "auth_and_role_based_systems",
    component_reuse: "maximize",
    state_management: "centralized",
    api_integration: "prepare_early",
  },
};

//Internal Note:
//Sequential development with strong dependency chain.
//Core components and auth are critical foundation.
//Role-based implementation follows after stable base.
//State management crucial for complex features.
