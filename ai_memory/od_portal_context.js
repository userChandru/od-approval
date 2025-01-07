const OD_PORTAL = {
  core: {
    stack: "MERN",
    auth: "JWT",
    ui: ["Shadcn", "Tailwind"],
    flows: {
      od_request: ["eligibility_check", "event_validation", "ivr_parent", "mentor_approval"],
      fa_rules: {min: 50, types: ["academic", "placement"]},
    }
  },

  roles: {
    student: {
      access: ["request_od", "track", "feedback"],
      checks: ["fa_eligibility", "event_validity"]
    },
    mentor: {
      access: ["approve_od", "view_ivr", "analytics"],
      deps: ["parent_ack"] 
    },
    events: {
      access: ["crud_events", "approve_new"],
      notifs: ["new_event_requests", "email"]
    },
    faculty: {
      access: ["dept_analytics", "batch_trends"],
      views: ["charts", "insights"]
    }
  },

  features: {
    realtime: ["notifications", "status_updates"],
    analytics: ["approval_rates", "participation", "trends"],
    ml: ["event_suggestions"],
    automation: ["reminders", "eligibility", "notifications"],
    dashboards: {
      common: ["profile", "notifications"],
      role_specific: true
    }
  },

  architecture: {
    frontend: "react_role_based_routing",
    backend: "express_rest_api",
    db: "mongodb_collections",
    security: ["jwt", "role_middleware"]
  },

  _meta: {
    complexity: "high",
    priority_features: ["od_flow", "dashboards", "notifications"],
    scalability_concerns: ["ivr_integration", "realtime_updates"]
  }
} 

// Internal Note: Core system revolves around OD workflow with strong role segregation. 
// Critical to maintain parent acknowledgment → mentor approval sequence.
// Analytics heavy system with ML potential. 
// Focus on real-time capabilities and role-based access control.