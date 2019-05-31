<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-11">
                <div class="row">
                    <div class="col">
                        <div id="map" class="map">
                        </div>
                    </div>
                </div>
                <div class="row new-marker">
                    <div class="col">
                        <div class="form-group">
                            <label for="type">Select type:</label>
                            <select class="form-control" id="type" v-model="marker.type">
                                <option value="marker">Marker</option>
                                <option value="polygon">Polygon</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="layer">Select layer:</label>
                            <select class="form-control" id="layer" v-model="marker.layer">
                                <option v-for="layer in layers" v-bind:value="layer.id"
                                        v-bind:selected="layer.id === layers[0].id">{{ layer.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <p class="select-title">Select symbol:</p>
                        <div class="select-symbol">
                            <ul class="symbols">
                                <li v-for="SIDC in symbolsSIDC">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sidc" v-bind:id="SIDC"
                                               v-on:change="showNewMarker"
                                               v-bind:value="SIDC" v-model="marker.SIDC">
                                        <label class="form-check-label" v-bind:for="SIDC">
                                            <img v-bind:src="makeSymbolAsImg(SIDC)" v-bind:alt="SIDC">
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <p>Coordinates:</p>
                            <template v-if="marker.type === 'marker'">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Lat:</div>
                                    </div>
                                    <input type="text" class="form-control" disabled
                                           v-bind:class="{'is-invalid': !marker.lat}"
                                           v-model="marker.lat">
                                </div>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Lng:</div>
                                    </div>
                                    <input type="text" class="form-control" disabled
                                           v-bind:class="{'is-invalid': !marker.lng}"
                                           v-model="marker.lng">
                                </div>
                            </template>
                            <template v-if="marker.type === 'polygon'">
                                <ul>
                                    <li v-for="coord in marker.coords">{{ coord.lat }}, {{ coord.lng }}</li>
                                </ul>
                            </template>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="markerName">Marker name</label>
                            <input type="text" class="form-control" id="markerName" placeholder="Enter marker name"
                                   v-on:change="showNewMarker"
                                   v-bind:class="{'is-invalid': !marker.name}"
                                   v-model="marker.name">
                        </div>
                        <div class="form-group">
                            <label for="markerFullName">Marker full name</label>
                            <input type="text" class="form-control" id="markerFullName"
                                   placeholder="Enter marker full name"
                                   v-on:change="showNewMarker"
                                   v-bind:class="{'is-invalid': !marker.fullname}"
                                   v-model="marker.fullname">
                        </div>
                        <div class="form-group">
                            <div class="btn-group" role="group">
                                <!--<button type="button" class="btn btn-primary" @click="showNewMarker"
                                        v-bind:disabled="!marker.lng">Show
                                </button>-->
                                <button type="button" class="btn btn-success" @click="saveNewMarker"
                                        v-bind:disabled="!marker.lng">Save
                                </button>
                                <button type="button" class="btn btn-danger" @click="closeNewMarker">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <h4>Layers:</h4>
                <ul id="layers">
                    <li v-for="layer in layers" :key="layer.id">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" v-bind:id="layer.id" v-model="layer.active"
                                   @change="layerChanged(layer.id, layer.active)">
                            <label class="form-check-label" v-bind:for="layer.id">{{ layer.name }}</label>
                        </div>
                    </li>
                    <li><span class="pointer" title="Add layer" @click="toggleAddLayer" v-if="!newLayer.active"><i
                        class="fa fa-plus text-primary"></i></span>
                        <div class="input-group mb-3" v-if="newLayer.active">
                            <input type="text" class="form-control form-control-sm"
                                   v-bind:class="{'is-invalid': !newLayer.valid && !newLayerEmpty(newLayer.name) }"
                                   placeholder="Enter layer name"
                                   v-model="newLayer.name" v-on:keyup="validateNewLayer">
                            <div class="input-group-append">
                                <button class="btn btn-sm btn-outline-success" type="button" @click="saveNewLayer"
                                        v-bind:disabled="!newLayer.valid"><i
                                    class="fa fa-check"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-danger" type="button" @click="toggleAddLayer"><i
                                    class="fa fa-close"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
                <hr>
                <h4>Map type:</h4>
                <ul>
                    <div class="form-check" @click="nativeMap">
                        <input class="form-check-input" type="radio" name="mapRadio" id="map1" checked>
                        <label class="form-check-label" for="map1">
                            NativeMap
                        </label>
                    </div>
                    <div class="form-check" @click="topoMap">
                        <input class="form-check-input" type="radio" name="mapRadio" id="map2">
                        <label class="form-check-label" for="map2">
                            TopoMap
                        </label>
                    </div>
                    <div class="form-check" @click="roadsMap">
                        <input class="form-check-input" type="radio" name="mapRadio" id="map3">
                        <label class="form-check-label" for="map3">
                            RoadsMap
                        </label>
                    </div>
                    <div class="form-check" @click="transportMap">
                        <input class="form-check-input" type="radio" name="mapRadio" id="map4">
                        <label class="form-check-label" for="map4">
                            TransportMap
                        </label>
                    </div>
                    <div class="form-check" @click="satelliteMap">
                        <input class="form-check-input" type="radio" name="mapRadio" id="map5">
                        <label class="form-check-label" for="map5">
                            SatelliteMap
                        </label>
                    </div>
                </ul>
                <hr>
                <h3>Search by coordinates:</h3>
                <div class="input-group mb-2 input-group-sm">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Lat:</div>
                    </div>
                    <input type="text" class="form-control" v-model="search.lat">
                </div>
                <div class="input-group mb-2 input-group-sm">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Lng:</div>
                    </div>
                    <input type="text" class="form-control" v-model="search.lng">
                </div>
                <button class="btn btn-primary btn-sm" @click="searchByCoordinates"
                        v-bind:disabled="!search.lat || !search.lng">Search
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import L from 'leaflet';
    import ms from 'milsymbol';
    import $ from 'jquery';
    import {getSymbolSize} from '../../helpers/symbol';
    import {getMap, storeLayer, storeMarker, destroyMarker} from "../../helpers/map";
    import coordinator from 'coordinator';
    import {toCK42} from "../../helpers/sk42";

    export default {
        name: 'map-view',
        data() {
            return {
                map: null,
                newLayer: {
                    active: false,
                    name: null,
                    valid: false,
                },
                search: {
                    lat: null,
                    lng: null,
                },
                marker: {
                    lat: null,
                    lng: null,
                    coords: [],
                    leafletObject: null,
                    name: null,
                    fullname: null,
                    type: 'marker',
                    layer: null,
                    SIDC: null,
                    command: 'FTS',
                    valid: false,
                },
                tileLayer: null,
            }
        },
        computed: {
            symbolsSIDC() {
                return this.$store.getters.symbolsSIDC;
            },
            layers() {
                return this.$store.getters.layers;
            }
        },
        mounted() {
            this.loadMap(this.$route.params.id);
        },
        methods: {
            loadMap(id) {
                this.$store.dispatch('mapLoading');
                getMap(id)
                    .then((res) => {
                        this.$store.commit("mapLoaded", res);
                        this.marker.layer = this.layers[0].id;
                        this.initMap();
                        this.initLayers();
                        let self = this;
                        this.map.addEventListener('click', function (e) {
                            self.marker.lat = e.latlng.lat;
                            self.marker.lng = e.latlng.lng;
                            self.showNewMarker();
                        });
                        document.addEventListener('click', function (e) {
                            let el = $(e.target);
                            if (el.hasClass('destroy-marker')) {
                                self.destroyMarker(el.attr('markerId'), el.attr('layerId'));
                            }
                        });
                    })
                    .catch((error) => {
                        this.$store.commit("mapLoadingFailed", {error});
                    });
            },
            searchByCoordinates() {
                this.map.setView([this.search.lat, this.search.lng], 12);
                this.marker.lat = this.search.lat;
                this.marker.lng = this.search.lng;
                this.showNewMarker();
            },

            initMap() {
                this.map = L.map('map').setView([50.45097, 30.52266], 12);
                this.nativeMap();
            },
            nativeMap() {
                this.tileLayer = L.tileLayer(
                    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                    {
                        maxZoom: 18,
                    }
                );
                this.tileLayer.addTo(this.map);
            },
            topoMap() {
                this.tileLayer = L.tileLayer(
                    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                    {
                        maxZoom: 18,
                    }
                );
                this.tileLayer.addTo(this.map);
            },
            roadsMap() {
                this.tileLayer = L.tileLayer(
                    'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png',
                    {
                        maxZoom: 18,
                    }
                );
                this.tileLayer.addTo(this.map);
            },
            transportMap() {
                this.tileLayer = L.tileLayer(
                    'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png',
                    {
                        maxZoom: 18,
                    }
                );
                this.tileLayer.addTo(this.map);
            },
            satelliteMap() {
                this.tileLayer = L.tileLayer(
                    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                    {
                        maxZoom: 18,
                    }
                );
                this.tileLayer.addTo(this.map);
            },
            initLayers() {
                this.layers.forEach((layer) => {
                    const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                    const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

                    markerFeatures.forEach((feature) => {
                        let mySymbol = new ms.Symbol(
                            feature.SIDC, {
                                uniqueDesignation: feature.name
                            });

                        mySymbol = mySymbol.setOptions({size: getSymbolSize(mySymbol)});

                        let myIcon = L.divIcon({
                            className: '',
                            html: mySymbol.asSVG(),
                            iconAnchor: new L.Point(mySymbol.getAnchor().x, mySymbol.getAnchor().y)
                        });

                        let fn = coordinator('latlong', 'mgrs');
                        let mgrs = fn(feature.coords[0], feature.coords[1], 4);

                        let ck42 = toCK42(feature.coords[0], feature.coords[1]);

                        feature.leafletObject = L.marker(feature.coords, {icon: myIcon, myCustomId: feature.id})
                            .bindPopup(feature.name + '<br>Coordinates:<br>Lat: ' + feature.coords[0] + '<br>Lng:' + feature.coords[1] + '<br>MGRS: ' + mgrs + '<br>CK42:<br>Lat: ' + ck42.lat + '<br>Lng: ' + ck42.lng + '<br><span class="text-danger destroy-marker pointer" markerId="' + feature.id + '" layerId="' + layer.id + '">Delete</span>');
                    });

                    polygonFeatures.forEach((feature) => {
                        feature.leafletObject = L.polygon(feature.coords)
                            .bindPopup(feature.name);
                    });
                });
            },
            refreshLayers() {
                this.layers.forEach((layer) => {
                    layer.features.forEach((feature) => {
                        if (feature.leafletObject) {
                            feature.leafletObject.removeFrom(this.map);
                        }
                    });

                    const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                    const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

                    markerFeatures.forEach((feature) => {
                        let mySymbol = new ms.Symbol(
                            feature.SIDC, {
                                uniqueDesignation: feature.name
                            });

                        mySymbol = mySymbol.setOptions({size: getSymbolSize(mySymbol)});

                        let myIcon = L.divIcon({
                            className: '',
                            html: mySymbol.asSVG(),
                            iconAnchor: new L.Point(mySymbol.getAnchor().x, mySymbol.getAnchor().y)
                        });

                        let fn = coordinator('latlong', 'mgrs');
                        let mgrs = fn(feature.coords[0], feature.coords[1], 4);
                        let ck42 = toCK42(feature.coords[0], feature.coords[1]);

                        feature.leafletObject = L.marker(feature.coords, {icon: myIcon, myCustomId: feature.id})
                            .bindPopup(feature.name + '<br>Coordinates:<br>Lat: ' + feature.coords[0] + '<br>Lng:' + feature.coords[1] + '<br>MGRS: ' + mgrs + '<br>CK42:<br>Lat: ' + ck42.lat + '<br>Lng: ' + ck42.lng + '<br><span class="text-danger destroy-marker pointer" markerId="' + feature.id + '" layerId="' + layer.id + '">Delete</span>');
                    });

                    polygonFeatures.forEach((feature) => {
                        feature.leafletObject = L.polygon(feature.coords)
                            .bindPopup(feature.name);
                    });

                    layer.features.forEach((feature) => {
                        if (layer.active) {
                            feature.leafletObject.addTo(this.map);
                        }
                    });
                });
            },
            layerChanged(layerId, active) {
                let layer = this.layers.find(layer => layer.id === layerId);

                layer.features.forEach((feature) => {
                    if (active) {
                        feature.leafletObject.addTo(this.map);
                    } else {
                        feature.leafletObject.removeFrom(this.map);
                    }
                });
            },
            makeSymbolAsCanvas(sidc) {
                let size = 30;
                return new ms.Symbol(sidc, {
                    size: size,
                    uniqueDesignation: "ICON",
                    additionalInformation: sidc,
                    infoFields: 'Info'
                }).asCanvas();
            },
            makeSymbolAsImg(sidc) {
                let size = 30;
                return new ms.Symbol(sidc, {
                    size: size,
                    additionalInformation: sidc,
                }).toDataURL();
            },
            toggleAddLayer() {
                this.newLayer.name = null;
                this.newLayer.valid = false;
                this.newLayer.active = !this.newLayer.active;
            },
            saveNewLayer() {
                this.$store.dispatch('saveLayer');
                storeLayer({
                    name: this.newLayer.name,
                    map_id: this.$route.params.id,
                })
                    .then((data) => {
                        this.$store.commit('layerSaved', {
                            id: data.id,
                            name: data.name,
                            active: data.active,
                            features: data.features,
                        });
                        this.refreshLayers();
                        this.toggleAddLayer();
                    })
                    .catch((error) => {
                        alert('Layer not added');
                    });
            },
            validateNewLayer() {
                this.newLayer.valid = /^[A-Za-z0-9 _-]+$/.test(this.newLayer.name);
            },
            newLayerEmpty() {
                return null === this.newLayer.name;
            },
            showNewMarker() {
                if (this.marker.leafletObject) {
                    this.marker.leafletObject.removeFrom(this.map);
                }
                let attr = {};
                if (this.marker.SIDC) {
                    let mySymbol = new ms.Symbol(
                        this.marker.SIDC, {
                            uniqueDesignation: this.marker.name
                        });

                    mySymbol = mySymbol.setOptions({size: getSymbolSize(mySymbol)});

                    attr.icon = L.divIcon({
                        className: '',
                        html: mySymbol.asSVG(),
                        iconAnchor: new L.Point(mySymbol.getAnchor().x, mySymbol.getAnchor().y)
                    });
                }

                let fn = coordinator('latlong', 'mgrs');
                let mgrs = fn(this.marker.lat, this.marker.lng, 4);
                let ck42 = toCK42(this.marker.lat, this.marker.lng);

                this.marker.leafletObject = L.marker([this.marker.lat, this.marker.lng], attr)
                    .bindPopup((this.marker.fullname ? this.marker.fullname : 'New marker') + '<br>Coordinates:<br>Lat: ' + this.marker.lat + '<br>Lng:' + this.marker.lng + '<br>MGRS: ' + mgrs + '<br>CK42:<br>Lat: ' + ck42.lat + '<br>Lng: ' + ck42.lng + '<br>');
                this.marker.leafletObject.addTo(this.map);
            },
            saveNewMarker() {
                this.$store.dispatch('saveMarker');
                storeMarker({
                    layer_id: this.marker.layer,
                    name: this.marker.name,
                    full_name: this.marker.fullname,
                    type: this.marker.type,
                    lat: this.marker.lat,
                    lng: this.marker.lng,
                    sidc: this.marker.SIDC,
                    command: this.marker.command,
                })
                    .then((data) => {
                        this.$store.commit('markerSaved', {
                            id: data.id,
                            layerId: this.marker.layer,
                            name: data.name,
                            fullname: data.fullname,
                            type: data.type,
                            coords: data.coords,
                            SIDC: data.SIDC,
                            command: data.command,
                        });

                        if (this.marker.leafletObject) {
                            this.marker.leafletObject.removeFrom(this.map);
                        }
                        if (this.marker.leafletObjectTest) {
                            this.marker.leafletObjectTest.removeFrom(this.map);
                        }
                        this.refreshLayers();

                        this.closeNewMarker();
                    })
                    .catch((error) => {
                        alert(error);
                    });
            },
            closeNewMarker() {
                if (this.marker.leafletObject) {
                    this.marker.leafletObject.removeFrom(this.map);
                }

                this.marker.lat = null;
                this.marker.lng = null;
                this.marker.leafletObject = null;
                this.marker.name = null;
                this.marker.fullname = null;
                this.marker.type = 'marker';
                this.marker.layer = this.layers[0].id;
                this.marker.SIDC = null;
                this.marker.command = 'FTS';
                this.marker.valid = false;
            },
            destroyMarker(id, layerId) {
                this.$store.dispatch('destroyMarker');

                destroyMarker(id)
                    .then((data) => {
                        let layer = this.layers.find(layer => layer.id === parseInt(layerId));
                        if (layer) {
                            let feature = layer.features.find(feature => feature.id === parseInt(id));
                            if (feature) {
                                feature.leafletObject.removeFrom(this.map);

                                this.$store.commit('destroyMarker', {id: id, layerId: layerId});
                                this.refreshLayers();
                            }
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        alert(error);
                    });
            }
        },
    }
</script>

<style scoped>
    .col, .col-11, .col-1 {
        padding: 0;
        margin: 0;
    }

    .new-marker .col {
        margin: 5px;
    }

    .map {
        height: 600px;
    }

    ul {
        list-style: none;
        padding-left: 20px;
    }

    .select-symbol {
        max-height: 200px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .select-symbol::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .select-symbol::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
    }

    .select-symbol::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #555;
    }

    .select-symbol li {
        padding-bottom: 5px;
    }
</style>
