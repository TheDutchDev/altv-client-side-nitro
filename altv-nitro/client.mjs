///
/// By Niels/DasNiels/DingoDongBlueBalls.
///

import * as alt from 'alt';
import * as natives from 'natives';

natives.requestNamedPtfxAsset( "veh_xs_vehicle_mods" ); // Durty <3

function giveNitro( toggle ) {
    natives.setVehicleNitroEnabled( +alt.Player.local.vehicle.scriptID, toggle );
}

alt.on( 'keydown', ( key ) => {

    if( alt.Player.local.vehicle instanceof alt.Vehicle ) {

        if( key === 49 ) { // key 1
            alt.log( 'enabling' );
            giveNitro( true );
        }

        if( key === 50 ) { // key 2
            alt.log( 'disabling' );
            giveNitro( false );
        }

        if( key === 55 ) { // key 7 to set time to nighttime, makes effect look cooler
            alt.log( 'time' );
            natives.setClockTime( 0, 0, 0 );
        }
    }
} );