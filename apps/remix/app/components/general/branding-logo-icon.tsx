import type { SVGAttributes } from 'react';

import { ClientLogoIcon } from '~/components/general/client-logo-icon';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Global default brand icon.
 *
 * Renders the client's icon (`ClientLogoIcon`) as the instance-wide default.
 * To rebrand, edit `~/components/general/client-logo-icon`.
 */
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return <ClientLogoIcon {...props} />;
};
