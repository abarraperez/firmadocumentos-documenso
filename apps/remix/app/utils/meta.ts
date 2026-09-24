import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'FirmaPrivada.bo — firma electrónica segura y legal. Envía, firma y gestiona documentos de forma rápida, simple y 100% digital.';

  return [
    {
      title: title ? `${i18n._(title)} - FirmaPrivada.bo` : 'FirmaPrivada.bo',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'FirmaPrivada.bo, firma electrónica, firma digital, documento electrónico, Bolivia',
    },
    {
      name: 'author',
      content: 'FirmaPrivada.bo',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'FirmaPrivada.bo — Firma electrónica',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@firmaprivada',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
