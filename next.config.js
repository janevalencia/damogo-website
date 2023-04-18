const { locales } = require('./src/libs/_locales');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig
