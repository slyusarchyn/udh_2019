import {getLocalUser} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        isRegistered: false,
        loading: false,
        auth_error: null,
        register_error: null,
        iconSize: {
            'Team/Crew': 5,
            'Squad': 10,
            'Section': 15,
            'Platoon/detachment': 20,
            'Company/battery/troop': 25,
            'Battalion/squadron': 30,
            'Regiment/group': 35,
            'Brigade': 40,
            'Division': 45,
            'Corps/MEF': 50,
            'Army': 55,
            'Army Group/front': 60,
            'Region/Theater': 65,
            'Command': 70,
            'default': 30,
        },
        symbolsSIDC: ['SUP*------*****', 'SFP*------*****', 'SNP*------*****', 'SHP*------*****', 'SUP*S-----*****', 'SFP*S-----*****', 'SNP*S-----*****', 'SHP*S-----*****', 'SUP*V-----*****', 'SFP*V-----*****', 'SNP*V-----*****', 'SHP*V-----*****', 'SUP*T-----*****', 'SFP*T-----*****', 'SNP*T-----*****', 'SHP*T-----*****', 'SUP*L-----*****', 'SFP*L-----*****', 'SNP*L-----*****', 'SHP*L-----*****', 'SUA*------*****', 'SFA*------*****', 'SNA*------*****', 'SHA*------*****', 'SUA*M-----*****', 'SFA*M-----*****', 'SNA*M-----*****', 'SHA*M-----*****', 'SUA*MF----*****', 'SFA*MF----*****', 'SNA*MF----*****', 'SHA*MF----*****', 'SUA*MFB---*****', 'SFA*MFB---*****', 'SNA*MFB---*****', 'SHA*MFB---*****', 'SUA*MFF---*****', 'SFA*MFF---*****', 'SNA*MFF---*****', 'SHA*MFF---*****', 'SUA*MFFI--*****', 'SFA*MFFI--*****', 'SNA*MFFI--*****', 'SHA*MFFI--*****', 'SUA*MFT---*****', 'SFA*MFT---*****', 'SNA*MFT---*****', 'SHA*MFT---*****', 'SUA*MFA---*****', 'SFA*MFA---*****', 'SNA*MFA---*****', 'SHA*MFA---*****', 'SUA*MFL---*****', 'SFA*MFL---*****', 'SNA*MFL---*****', 'SHA*MFL---*****', 'SUA*MFK---*****', 'SFA*MFK---*****', 'SNA*MFK---*****', 'SHA*MFK---*****', 'SUA*MFKB--*****', 'SFA*MFKB--*****', 'SNA*MFKB--*****', 'SHA*MFKB--*****', 'SUA*MFKD--*****', 'SFA*MFKD--*****', 'SNA*MFKD--*****', 'SHA*MFKD--*****', 'SUA*MFC---*****', 'SFA*MFC---*****', 'SNA*MFC---*****', 'SHA*MFC---*****', 'SUA*MFCL--*****', 'SFA*MFCL--*****', 'SNA*MFCL--*****', 'SHA*MFCL--*****', 'SUA*MFCM--*****', 'SFA*MFCM--*****', 'SNA*MFCM--*****', 'SHA*MFCM--*****', 'SUA*MFCH--*****', 'SFA*MFCH--*****', 'SNA*MFCH--*****', 'SHA*MFCH--*****', 'SUA*MFJ---*****', 'SFA*MFJ---*****', 'SNA*MFJ---*****', 'SHA*MFJ---*****', 'SUA*MFO---*****', 'SFA*MFO---*****', 'SNA*MFO---*****', 'SHA*MFO---*****', 'SUA*MFR---*****', 'SFA*MFR---*****', 'SNA*MFR---*****', 'SHA*MFR---*****', 'SUA*MFRW--*****', 'SFA*MFRW--*****', 'SNA*MFRW--*****', 'SHA*MFRW--*****', 'SUA*MFRZ--*****', 'SFA*MFRZ--*****', 'SNA*MFRZ--*****', 'SHA*MFRZ--*****', 'SUA*MFRX--*****', 'SFA*MFRX--*****', 'SNA*MFRX--*****', 'SHA*MFRX--*****', 'SUA*MFP---*****', 'SFA*MFP---*****', 'SNA*MFP---*****', 'SHA*MFP---*****', 'SUA*MFPN--*****', 'SFA*MFPN--*****', 'SNA*MFPN--*****', 'SHA*MFPN--*****', 'SUA*MFPM--*****', 'SFA*MFPM--*****', 'SNA*MFPM--*****', 'SHA*MFPM--*****', 'SUA*MFU---*****', 'SFA*MFU---*****', 'SNA*MFU---*****', 'SHA*MFU---*****', 'SUA*MFUL--*****', 'SFA*MFUL--*****', 'SNA*MFUL--*****', 'SHA*MFUL--*****', 'SUA*MFUM--*****', 'SFA*MFUM--*****', 'SNA*MFUM--*****', 'SHA*MFUM--*****', 'SUA*MFUH--*****', 'SFA*MFUH--*****', 'SNA*MFUH--*****', 'SHA*MFUH--*****', 'SUA*MFY---*****', 'SFA*MFY---*****', 'SNA*MFY---*****', 'SHA*MFY---*****', 'SUA*MFH---*****', 'SFA*MFH---*****', 'SNA*MFH---*****', 'SHA*MFH---*****', 'SUA*MFD---*****', 'SFA*MFD---*****', 'SNA*MFD---*****', 'SHA*MFD---*****', 'SUA*MFQ---*****', 'SFA*MFQ---*****', 'SNA*MFQ---*****', 'SHA*MFQ---*****', 'SUA*MFQA--*****', 'SFA*MFQA--*****', 'SNA*MFQA--*****', 'SHA*MFQA--*****', 'SUA*MFQB--*****', 'SFA*MFQB--*****', 'SNA*MFQB--*****', 'SHA*MFQB--*****', 'SUA*MFQC--*****', 'SFA*MFQC--*****', 'SNA*MFQC--*****', 'SHA*MFQC--*****', 'SUA*MFQD--*****', 'SFA*MFQD--*****', 'SNA*MFQD--*****', 'SHA*MFQD--*****', 'SUA*MFQF--*****', 'SFA*MFQF--*****', 'SNA*MFQF--*****', 'SHA*MFQF--*****', 'SUA*MFQH--*****', 'SFA*MFQH--*****', 'SNA*MFQH--*****', 'SHA*MFQH--*****', 'SUA*MFQJ--*****', 'SFA*MFQJ--*****', 'SNA*MFQJ--*****', 'SHA*MFQJ--*****', 'SUA*MFQK--*****', 'SFA*MFQK--*****', 'SNA*MFQK--*****', 'SHA*MFQK--*****', 'SUA*MFQL--*****', 'SFA*MFQL--*****', 'SNA*MFQL--*****', 'SHA*MFQL--*****', 'SUA*MFQM--*****', 'SFA*MFQM--*****', 'SNA*MFQM--*****', 'SHA*MFQM--*****', 'SUA*MFQI--*****', 'SFA*MFQI--*****', 'SNA*MFQI--*****', 'SHA*MFQI--*****', 'SUA*MFQN--*****', 'SFA*MFQN--*****', 'SNA*MFQN--*****', 'SHA*MFQN--*****', 'SUA*MFQP--*****', 'SFA*MFQP--*****', 'SNA*MFQP--*****', 'SHA*MFQP--*****', 'SUA*MFQR--*****', 'SFA*MFQR--*****', 'SNA*MFQR--*****', 'SHA*MFQR--*****', 'SUA*MFQRW-*****', 'SFA*MFQRW-*****', 'SNA*MFQRW-*****', 'SHA*MFQRW-*****', 'SUA*MFQRZ-*****', 'SFA*MFQRZ-*****', 'SNA*MFQRZ-*****', 'SHA*MFQRZ-*****', 'SUA*MFQRX-*****', 'SFA*MFQRX-*****', 'SNA*MFQRX-*****', 'SHA*MFQRX-*****', 'SUA*MFQS--*****', 'SFA*MFQS--*****', 'SNA*MFQS--*****', 'SHA*MFQS--*****', 'SUA*MFQT--*****', 'SFA*MFQT--*****', 'SNA*MFQT--*****', 'SHA*MFQT--*****', 'SUA*MFQU--*****', 'SFA*MFQU--*****', 'SNA*MFQU--*****', 'SHA*MFQU--*****', 'SUA*MFQY--*****', 'SFA*MFQY--*****', 'SNA*MFQY--*****', 'SHA*MFQY--*****', 'SUA*MFQO--*****', 'SFA*MFQO--*****', 'SNA*MFQO--*****', 'SHA*MFQO--*****', 'SUA*MFS---*****', 'SFA*MFS---*****', 'SNA*MFS---*****', 'SHA*MFS---*****'],
        maps: [],
        map: {
            id: null,
            name: null,
            created_at: null,
            layers: [],
        },
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        registerError(state) {
            return state.register_error;
        },
        iconSize(state) {
            return state.iconSize;
        },
        symbolsSIDC(state) {
            return state.symbolsSIDC;
        },
        layers(state) {
            return state.map.layers;
        },
        maps(state) {
            return state.maps;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        register(state) {
            state.loading = true;
            state.register_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        registerSuccess(state, payload) {
            state.register_error = null;
            state.isRegistered = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        registerFailed(state, payload) {
            state.loading = false;
            state.register_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        mapCreating(state) {
            state.loading = true;
        },
        mapsLoading(state) {
            state.loading = true;
        },
        mapLoading(state) {
            state.loading = true;
        },
        mapsLoaded(state, payload) {
            state.maps = payload.maps;
            state.loading = false;
        },
        mapsLoadingFailed(state, error) {
            console.log(error);
            state.loading = false;
        },
        mapLoaded(state, payload) {
            state.map.id = payload.id;
            state.map.layers = payload.layers;
            state.loading = false;
        },
        mapCreated(state, payload) {
            state.maps.push(payload);
            state.loading = false;
        },
        mapLoadingFailed(state, error) {
            console.log(error);
            state.loading = false;
        },
        saveLayer(state) {
            state.loading = true;
        },
        saveMarker(state) {
            state.loading = true;
        },
        layerSaved(state, payload) {
            state.map.layers.push({
                id: payload.id,
                name: payload.name,
                active: payload.active,
                features: payload.features,
            });
            state.loading = false;
        },
        markerSaved(state, payload) {
            let layer = state.map.layers.find(layer => layer.id === payload.layerId);

            layer.features.push({
                id: payload.id,
                name: payload.name,
                fullname: payload.fullname,
                type: payload.type,
                coords: payload.coords,
                SIDC: payload.SIDC,
                command: payload.command,
            });
            state.loading = false;
        },
        markerDestroying(state) {
            state.loading = true;
        },
        destroyMarker(state, payload) {
            let layerIndex = state.map.layers.findIndex(layer => layer.id === parseInt(payload.layerId));
            let featureIndex = state.map.layers[layerIndex].features.findIndex(feature => feature.id === parseInt(payload.id));
            state.map.layers[layerIndex].features.splice(featureIndex, 1);
            state.loading = false;
        },
        mapDestroyed(state, payload) {
            let mapIndex = state.maps.findIndex(map => map.id === parseInt(payload.id));

            state.maps.splice(mapIndex, 1);
            state.loading = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        register(context) {
            context.commit('register');
        },
        saveLayer(context) {
            context.commit('saveLayer');
        },
        saveMarker(context) {
            context.commit('saveMarker');
        },
        mapsLoading(context) {
            context.commit('mapsLoading');
        },
        mapLoading(context) {
            context.commit('mapLoading');
        },
        destroyMarker(context) {
            context.commit('markerDestroying')
        },
        mapCreating(context) {
            context.commit('mapCreating');
        },
    }
}
