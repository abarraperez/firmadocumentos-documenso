import { Img, Link } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

import { ClientLogo } from './client-logo';

export type TemplateBrandingLogoProps = {
  assetBaseUrl: string;
  className?: string;
};

/**
 * Renders the email logo.
 *
 * - When custom branding is enabled with a logo, the branding logo is shown.
 *   If a safe (http/https) Brand Website is configured, the logo links to it.
 * - Otherwise the client's default logo is shown (inline SVG, see
 *   `ClientLogo`). The previous default was the default logo at
 *   `/static/logo.png`.
 */
export const TemplateBrandingLogo = ({ assetBaseUrl, className = 'mb-4 h-6' }: TemplateBrandingLogoProps) => {
  const branding = useBranding();

  const hasCustomBrandingLogo = branding.brandingEnabled && Boolean(branding.brandingLogo);

  if (!hasCustomBrandingLogo) {
    const clientLogo = (
      <ClientLogo
        className={className}
        // eslint-disable-next-line jsx-a11y/alt-text
        role="img"
        aria-label="Client Logo"
      />
    );

    const safeBrandingUrl = getSafeBrandingUrl(branding.brandingUrl);

    if (!safeBrandingUrl) {
      return clientLogo;
    }

    return <Link href={safeBrandingUrl}>{clientLogo}</Link>;
  }

  const brandingLogo = <Img src={branding.brandingLogo} alt="Branding Logo" className={className} />;

  const safeBrandingUrl = getSafeBrandingUrl(branding.brandingUrl);

  if (!safeBrandingUrl) {
    return brandingLogo;
  }

  return (
    <Link href={safeBrandingUrl} target="_blank">
      {brandingLogo}
    </Link>
  );
};

export default TemplateBrandingLogo;
