// Berlin variant — berlin.berlinmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Panel configuration for Berlin city dashboard
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map:           { name: 'Berlin Map',        enabled: true,  priority: 1 },
  'berlin-feed': { name: 'Berlin News',       enabled: true,  priority: 1 },
  'bvg-transit': { name: 'Transit Status',    enabled: true,  priority: 1 },
  'berlin-brief':{ name: 'Berlin Brief',      enabled: true,  priority: 2 },
  weather:       { name: 'Berlin Weather',    enabled: true,  priority: 2 },
};

// Map layers — all global layers off; Berlin stays clean
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Geopolitical (all off)
  conflicts:            false,
  bases:                false,
  cables:               false,
  pipelines:            false,
  hotspots:             false,
  ais:                  false,
  nuclear:              false,
  irradiators:          false,
  sanctions:            false,
  economic:             false,
  waterways:            false,
  outages:              false,
  cyberThreats:         false,
  datacenters:          false,
  protests:             false,
  flights:              false,
  military:             false,
  natural:              false,
  spaceports:           false,
  minerals:             false,
  fires:                false,
  gpsJamming:           false,
  iranAttacks:          false,
  ciiChoropleth:        false,
  // Data source layers (all off)
  ucdpEvents:           false,
  displacement:         false,
  climate:              false,
  // Tech layers (all off)
  startupHubs:          false,
  cloudRegions:         false,
  accelerators:         false,
  techHQs:              false,
  techEvents:           false,
  // Finance layers (all off)
  stockExchanges:       false,
  financialCenters:     false,
  centralBanks:         false,
  commodityHubs:        false,
  gulfInvestments:      false,
  // Happy variant layers (all off)
  positiveEvents:       false,
  kindness:             false,
  happiness:            false,
  speciesRecovery:      false,
  renewableInstallations: false,
  tradeRoutes:          false,
  // Commodity variant layers (all off)
  miningSites:          false,
  processingPlants:     false,
  commodityPorts:       false,
  // Weather (off — shown in weather strip panel instead)
  weather:              false,
  // Day/night overlay — subtle and useful for a city map
  dayNight:             true,
};

// Mobile defaults — same as desktop
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'berlin',
  description: 'Berlin city intelligence dashboard — transit, news, weather',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
