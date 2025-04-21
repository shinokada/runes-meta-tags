export interface ArticleType {
	publishedTime?: string;
	modifiedTime?: string;
	expirationTime?: string;
	author?: string | string[];
	section?: string;
	tag?: string | string[];
}

export interface VideoType {
	url?: string;
	secureUrl?: string;
	type?: string;
	width?: number;
	height?: number;
}

export interface TwitterType {
	card?: 'summary' | 'summary_large_image' | 'app' | 'player';
	site?: string;
	creator?: string;
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	// Player card specific properties
	playerUrl?: string;
	playerWidth?: string;
	playerHeight?: string;
	// App card specific properties
	appIdIphone?: string;
	appIdIpad?: string;
	appIdGooglePlay?: string;
	appName?: string;
	appCountry?: string;
}

export interface OgType {
	type?: 'website' | 'article' | 'product' | 'book' | 'profile' | 'music' | 'video' | 'other';
	title?: string;
	description?: string;
	url?: string;
	image?: string;
	imageAlt?: string;
	imageSecureUrl?: string;
	siteName?: string;
	imageWidth?: string | number;
	imageHeight?: string | number;
	locale?: string;
	localeAlternate?: string[];
	video?: string | VideoType;
	audio?: string;
	article?: ArticleType;
	determiner?: 'a' | 'an' | 'the' | 'auto' | '';
}

export interface MetaProps {
	title?: string;
	robots?:
		| boolean
		| {
				index?: boolean;
				follow?: boolean;
				nocache?: boolean;
				googleBot?: string;
		  };
	description?: string;
	keywords?: string | string[];
	author?: string;
	viewport?: string;
	twitter?: TwitterType;
	og?: OgType;
	canonical?: string;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type AnyObject = { [key: string]: any };
