import * as azmaps from 'azure-maps-control';

declare namespace atlas {

    /**
     * Synchronizes the cameras of two or more maps.
     * @param maps An array of two or more maps to synchronize. 
     */
    export function syncMaps(maps: azmaps.Map[]): MapSynchronizer;

    /** A class that synchronizes the cameras of two or more maps. */
    export interface MapSynchronizer {

        /** Disposes the map synchronizer. */
        public dispose();

        /**
         * Get sthe enabled state.
         */
        public isEnabled(): boolean;

        /** Disables the synchronization of the maps. */
        public disable(): void;

        /** Enables the synchronization of the maps. */
        public enable(): void;
    }
}