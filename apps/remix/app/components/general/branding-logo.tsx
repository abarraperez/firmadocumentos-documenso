import type { SVGAttributes } from 'react';

import { ClientLogo } from '~/components/general/client-logo';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Global default brand logo.
 *
 * Renders the client's logo (`ClientLogo`) as the instance-wide default. When
 * per-team branding is enabled with a custom logo, that logo is used instead
 * (see `RecipientBranding`, `TemplateBrandingLogo` and the branding settings
 * page). To rebrand, edit `~/components/general/client-logo`.
 */
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return <ClientLogo {...props} />;
};
