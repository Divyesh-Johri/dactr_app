import { Component, OnInit } from '@angular/core';
import{ getPlacesService } from "../../../services/getPlacesAPI.service"
import{ getLocationService } from "../../../services/getLocation.service"
import {Position, Marker, MapView} from "nativescript-google-maps-sdk";

const mapsModule = require("nativescript-google-maps-sdk");

//These two lines initialize Google Maps Map View
import {registerElement} from "@nativescript/angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: 'outdoors-component',
    providers: [getPlacesService, getLocationService],
    templateUrl: 'outdoors.component.html'
})

export class OutdoorsComponent implements OnInit {
    public placeName = []
    public valid : boolean
    constructor(
        private places: getPlacesService, 
        private loc: getLocationService) { 

    }

    private getSearch(keyword) {
        this.loc.getLocation().then(location => {
            this.places.getPlacesFunct(location[0], location[1], keyword).then(results => {
            const temp = JSON.stringify(results);
            const json = JSON.parse(temp);
            for(var i = 0; i < json.length; i++) {
            this.placeName.push(json.results[i])
            }
            this.valid = true
            }).catch(e => console.log(e))
        }).catch(e => console.log())
        

    }

    private mapView: MapView;

    private onMapReady(args): void {
        this.mapView = args.object;

        this.addMarker();
    }

    private addMarker(): void {
        /* console.log("Setting a marker...");
         var marker = new Marker();
         marker.position = Position.positionFromLatLng(-33.86, 151.20);
         marker.title = "Sydney";
         marker.snippet = "Australia";
         marker.userData = { index : 1};
         this.mapView.addMarker(marker);
         */
        // If loop 
        if(this.valid == true) {

         //Loops through all the places and creates a marker for them
            for(var i = 0; i < this.placeName.length; i++)
            {
                var marker = new Marker();
                marker.position = Position.positionFromLatLng(this.placeName[i].geometry.location.lat, this.placeName[i].geometry.location.lng);
                //marker.position = {lat: this.placeName[i].geometry.location.lat, lng: this.placeName[i].geometry.location.lng};
                // mapsModule.Position.positionFromLatLng();
    
                marker.title = this.placeName[i].name;
                marker.userData = {index: 1};
    
                this.mapView.addMarker(marker);
            }
    
            console.log("Feedback Component: markerAdder(): Markers are all added");
    
        }  
    }



    ngOnInit() { }
}