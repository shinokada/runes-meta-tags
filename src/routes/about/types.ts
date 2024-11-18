import type { HTMLImgAttributes } from 'svelte/elements';

export type LinkType = string[] | [string, string];
export interface BaseBadgePropsType {
  style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
  logo?: string | undefined | null;
  logoColor?: string | undefined | null;
  logoSize?: string | undefined | null;
  label?: string | undefined | null;
  labelColor?: string | undefined | null;
  color?: string | undefined | null;
  cacheSeconds?: string | undefined | null;
  link?: LinkType;
  class?: string | undefined | null;
}
interface ExtendedStyle extends BaseBadgePropsType, HTMLImgAttributes {
  style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
}

export interface GitHubVersionPropsType extends ExtendedStyle {
  user: string;
  repo: string;
  include_prereleases?: boolean;
  sort?: 'date' | 'semver';
  filter?: string;
  display_name?: 'tag' | 'release';
}

export interface GitHubDownloadPropsType extends ExtendedStyle {
  user: string;
  repo: string;
}

export interface NpmDownloadPropsType extends ExtendedStyle {
  interval?: 'dw' | 'dm' | 'dy' | 'd18m';
  packageName: string;
}

export interface NpmVersionPropsType extends ExtendedStyle {
  packageName: string;
  tag?: string;
}

export interface NpmAuthorDownloadPropsType extends ExtendedStyle {
  interval?: 'dw' | 'dm' | 'dy' | 'd18m';
  author: string;
}

export interface PypiVersionPropsType extends ExtendedStyle {
  packageName: string;
  pypiBaseUrl?: string;
}

export interface StaticBadgePropsType extends ExtendedStyle {
  badgeContent: string;
}

export interface JsrVersionPropsType extends ExtendedStyle {
  scope: string;
  packageName: string;
}

export interface LicensePropsType extends ExtendedStyle {
  source: 'github' | 'npm';
  github_user?: string;
  github_repo?: string;
  npm_packageName?: string;
  npm_registry_uri?: string;
}

export interface GitHubSponsorPropsType extends ExtendedStyle {
  user: string;
}

export interface VersionPropsType extends ExtendedStyle {
  source: 'jsr' | 'npm' | 'pypi';
  packageName: string;
  jsr_scope?: string;
  npm_tag?: string;
  pypiBaseUrl?: string;
}

export interface DownloadPropsType extends ExtendedStyle {
  source: 'npm' | 'github';
  user?: string;
  repo?: string;
  interval?: 'dw' | 'dm' | 'dy' | 'd18m';
  packageName?: string;
}

export interface LibType {
  packageName: string;
}

export interface Versions {
  latest: string | undefined;
  previousStable: string | undefined;
}

export interface PackageVersions {
  [packageName: string]: Versions;
}

export interface PageData {
  versions: {
    [packageName: string]: {
      v1: string | undefined;
      v2: string | undefined;
    };
  };
  error?: string;
}
