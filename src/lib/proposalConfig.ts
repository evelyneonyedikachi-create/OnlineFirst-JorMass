// Central Proposal Configuration & Status Switch
// Controls whether the public proposal and prototype demos are active or in the holding/expired state.

export type ProposalStatus = 'active' | 'closed';

const getEnvString = (key: string, defaultValue: string = ''): string => {
  try {
    const metaEnv = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env;
    const value = metaEnv ? metaEnv[key] : undefined;
    if (value === undefined || value === null || value === '') {
      return defaultValue;
    }
    return String(value).trim();
  } catch {
    return defaultValue;
  }
};

/**
 * DEFAULT_PROPOSAL_STATUS:
 * - 'closed': Renders the dedicated Proposal Expired / Review Period Closed holding page.
 * - 'active': Renders the full interactive proposal hub, Demo 1, Demo 2, Demo 3, and commercial acceptance.
 * 
 * Can be overridden at deployment time with the VITE_PROPOSAL_STATUS environment variable,
 * or changed directly here to reactivate the proposal in one step.
 */
export const DEFAULT_PROPOSAL_STATUS: ProposalStatus = 'active';

export const PROPOSAL_STATUS: ProposalStatus =
  (getEnvString('VITE_PROPOSAL_STATUS', DEFAULT_PROPOSAL_STATUS).toLowerCase() === 'active')
    ? 'active'
    : 'closed';

/**
 * Checks if the public proposal is currently in closed/expired state.
 * Allows an optional internal administrative preview token via URL query parameter for internal verification:
 * e.g., ?internal_access=onlinefirst_admin
 */
export const isProposalClosed = (): boolean => {
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      // Optional protected internal bypass for OnlineFirst team review
      if (params.get('internal_access') === 'onlinefirst_admin') {
        return false;
      }
    } catch {
      // ignore
    }
  }
  return PROPOSAL_STATUS === 'closed';
};
