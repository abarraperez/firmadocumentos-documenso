/**
 * Central white-label configuration for the client instance.
 *
 * This is the single source of truth for the client's brand identity used as
 * the global default across the web app, emails and PDFs. Per-team branding
 * (configured in `o.<org>/settings/branding`) still overrides these defaults
 * when enabled.
 *
 * To rebrand the instance for a client, update the values below. The logo
 * itself lives in `~/components/general/client-logo` (and `client-logo-icon`).
 */
export const WHITE_LABEL = {
  /** Display name of the client, used in text fallbacks and alt attributes. */
  name: 'FirmaPrivada.bo',

  /** URL the client logo links to. Falls back to the app URL when empty. */
  url: 'https://firmaprivada.bo',

  /** Whether the "Powered by" badge should be hidden by default. */
  hidePoweredBy: true,
} as const;

export type WhiteLabelConfig = typeof WHITE_LABEL;
