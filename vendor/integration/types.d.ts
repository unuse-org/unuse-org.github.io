declare module 'astrowind:config' {
  import type { SiteConfig, I18NConfig, MetadataConfig, AppBlogConfig, UIConfig, AnalyticsConfig } from './config';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetadataConfig;
  export const APP_BLOG: AppBlogConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
}
