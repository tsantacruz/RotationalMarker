import L from './L.js';

import Util from './core/Util.js';
import Class from './core/Class.js';
import Evented from './core/Events.js';
import Browser from './core/Browser.js';

import Point from './geometry/Point.js';
import Bounds from './geometry/Bounds.js';

import DomUtil from './dom/DomUtil.js';
import DomEvent from './dom/DomEvent.js';

import LatLng from './geo/LatLng.js';
import LatLngBounds from './geo/LatLngBounds.js';

import './geo/projection/Projection.LonLat.js';
import './geo/projection/Projection.SphericalMercator.js';
import CRS from './geo/crs/CRS.js';
import './geo/crs/CRS.Simple.js';
import './geo/crs/CRS.Earth.js';
import './geo/crs/CRS.EPSG3857.js';
import './geo/crs/CRS.EPSG4326.js';
import Map from './map/Map.js';
// import './layer/Layer.js'

function expose() {
	var oldL = window.L;

	L.noConflict = function () {
		window.L = oldL;
		return this;
	};

	window.L = L;
}

// define Leaflet as a global L variable, saving the original L to restore later if needed
if (typeof window !== 'undefined') {
	expose();
}

export default L;

/// TODO: Make rollup work while exporting both a default and named exports
// export {
// 	Util,
// 	Class,
// 	Evented,
// 	Browser,
//
// 	Point,
// 	Bounds,
// 	DomUtil,
// 	DomEvent,
//
// 	LatLng,
// 	LatLngBounds,
//
// 	CRS,
//
// 	Map
// }
