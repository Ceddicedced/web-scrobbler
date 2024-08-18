export {};

// Connector for the NDR stations

Connector.artistSelector = '#interpretNow';

Connector.trackSelector = '#titleNow';

Connector.pauseButtonSelector = '#play-button--pause';

Connector.getTrackArt = (): string | null => {
	const coverImage = document.querySelector(
		'#coverimage > img',
	) as HTMLImageElement;
	return coverImage ? coverImage.src : null;
};
