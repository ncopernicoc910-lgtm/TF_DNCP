var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lab6DNCPDepartamento_1 = new ol.format.GeoJSON();
var features_Lab6DNCPDepartamento_1 = format_Lab6DNCPDepartamento_1.readFeatures(json_Lab6DNCPDepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab6DNCPDepartamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab6DNCPDepartamento_1.addFeatures(features_Lab6DNCPDepartamento_1);
var lyr_Lab6DNCPDepartamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab6DNCPDepartamento_1, 
                style: style_Lab6DNCPDepartamento_1,
                popuplayertitle: 'Lab6 - DNCP — Departamento',
                interactive: true,
                title: '<img src="styles/legend/Lab6DNCPDepartamento_1.png" /> Lab6 - DNCP — Departamento'
            });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                popuplayertitle: 'Provincias',
                interactive: true,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_Distrito_3 = new ol.format.GeoJSON();
var features_Distrito_3 = format_Distrito_3.readFeatures(json_Distrito_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distrito_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distrito_3.addFeatures(features_Distrito_3);
var lyr_Distrito_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distrito_3, 
                style: style_Distrito_3,
                popuplayertitle: ' Distrito',
                interactive: true,
    title: ' Distrito<br />\
    <img src="styles/legend/Distrito_3_0.png" /> CHANCHAMAYO<br />\
    <img src="styles/legend/Distrito_3_1.png" /> PERENE<br />\
    <img src="styles/legend/Distrito_3_2.png" /> PICHANAQUI<br />\
    <img src="styles/legend/Distrito_3_3.png" /> SAN LUIS DE SHUARO<br />\
    <img src="styles/legend/Distrito_3_4.png" /> SAN RAMON<br />\
    <img src="styles/legend/Distrito_3_5.png" /> VITOC<br />\
    <img src="styles/legend/Distrito_3_6.png" /> <br />' });
var format_IIEECHANCHAMAYO_4 = new ol.format.GeoJSON();
var features_IIEECHANCHAMAYO_4 = format_IIEECHANCHAMAYO_4.readFeatures(json_IIEECHANCHAMAYO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IIEECHANCHAMAYO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IIEECHANCHAMAYO_4.addFeatures(features_IIEECHANCHAMAYO_4);
var lyr_IIEECHANCHAMAYO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IIEECHANCHAMAYO_4, 
                style: style_IIEECHANCHAMAYO_4,
                popuplayertitle: ' IIEE. CHANCHAMAYO',
                interactive: true,
    title: ' IIEE. CHANCHAMAYO<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_0.png" /> B�sica Alternativa - Avanzado<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_1.png" /> B�sica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_2.png" /> Inicial - Cuna Jard�n<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_3.png" /> Inicial - Jard�n<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_4.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_5.png" /> Primaria<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_6.png" /> Secundaria<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_7.png" /> Superior Tecnol�gica<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_8.png" /> T�cnico Productiva - CETPRO<br />\
    <img src="styles/legend/IIEECHANCHAMAYO_4_9.png" /> <br />' });
var lyr_Cortadomscara_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cortado (máscara)<br />\
    <img src="styles/legend/Cortadomscara_5_0.png" /> -1<br />\
    <img src="styles/legend/Cortadomscara_5_1.png" /> 5820<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cortadomscara_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8423623.173529, -1271837.460155, -8306954.162761, -1192832.346154]
        })
    });
var lyr_Combinado_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Combinado<br />\
    <img src="styles/legend/Combinado_6_0.png" /> -559<br />\
    <img src="styles/legend/Combinado_6_1.png" /> 6030<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Combinado_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8571616.252122, -1459748.139614, -8126307.366869, -1118874.275309]
        })
    });
var lyr_Pendiente_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_7_0.png" /> 89.9100<br />\
    <img src="styles/legend/Pendiente_7_1.png" /> 89.9325<br />\
    <img src="styles/legend/Pendiente_7_2.png" /> 89.9550<br />\
    <img src="styles/legend/Pendiente_7_3.png" /> 89.9775<br />\
    <img src="styles/legend/Pendiente_7_4.png" /> 90.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendiente_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8423623.173529, -1271837.460155, -8306954.162761, -1192832.346154]
        })
    });
var lyr_MapadeSombrasHillshade_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa de Sombras (Hillshade)<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_0.png" /> 1<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_1.png" /> 21<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_2.png" /> 41<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_3.png" /> 61<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_4.png" /> 81<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_5.png" /> 101<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_6.png" /> 121<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_7.png" /> 141<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_8.png" /> 161<br />\
    <img src="styles/legend/MapadeSombrasHillshade_8_9.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapadeSombrasHillshade_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8423623.173529, -1271837.460155, -8306954.162761, -1192832.346154]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Lab6DNCPDepartamento_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_Distrito_3.setVisible(true);lyr_IIEECHANCHAMAYO_4.setVisible(true);lyr_Cortadomscara_5.setVisible(true);lyr_Combinado_6.setVisible(true);lyr_Pendiente_7.setVisible(true);lyr_MapadeSombrasHillshade_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lab6DNCPDepartamento_1,lyr_Provincias_2,lyr_Distrito_3,lyr_IIEECHANCHAMAYO_4,lyr_Cortadomscara_5,lyr_Combinado_6,lyr_Pendiente_7,lyr_MapadeSombrasHillshade_8];
lyr_Lab6DNCPDepartamento_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_Provincias_2.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_Distrito_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'SitSocial': 'SitSocial', 'Hiper_link': 'Hiper_link', 'Hiper_foto': 'Hiper_foto', });
lyr_IIEECHANCHAMAYO_4.set('fieldAliases', {'fid': 'fid', 'C�digo Modular': 'C�digo Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'C�digo DRE/UGEL': 'C�digo DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'C�digo Centro Poblado': 'C�digo Centro Poblado', 'C�digo Local': 'C�digo Local', 'Direcci�n': 'Direcci�n', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Lab6DNCPDepartamento_1.set('fieldImages', {'fid': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', });
lyr_Provincias_2.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', });
lyr_Distrito_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', 'SitSocial': 'TextEdit', 'Hiper_link': 'ExternalResource', 'Hiper_foto': 'ExternalResource', });
lyr_IIEECHANCHAMAYO_4.set('fieldImages', {'fid': 'TextEdit', 'C�digo Modular': 'TextEdit', 'Anexo': 'TextEdit', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'TextEdit', 'Departamento': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'C�digo DRE/UGEL': 'TextEdit', 'DRE / UGEL': 'TextEdit', 'Centro Poblado': 'TextEdit', 'C�digo Centro Poblado': 'TextEdit', 'C�digo Local': 'TextEdit', 'Direcci�n': 'TextEdit', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Altitud': 'TextEdit', 'Fuente de coordenadas': 'TextEdit', });
lyr_Lab6DNCPDepartamento_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'no label', 'COUNT': 'no label', 'FIRST_IDDP': 'no label', 'HECTARES': 'no label', });
lyr_Provincias_2.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', });
lyr_Distrito_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', 'SitSocial': 'no label', 'Hiper_link': 'no label', 'Hiper_foto': 'no label', });
lyr_IIEECHANCHAMAYO_4.set('fieldLabels', {'fid': 'no label', 'C�digo Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'C�digo DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'C�digo Centro Poblado': 'no label', 'C�digo Local': 'no label', 'Direcci�n': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_IIEECHANCHAMAYO_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});