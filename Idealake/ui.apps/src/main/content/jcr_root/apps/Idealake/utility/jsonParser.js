"use strict";
use(function () {
    /*
     * This is used for parsing json objects passed from the sighlty templates for example
     *
     * <sly data-sly-use.JsonParser="${'/apps/pnb-metlife-market-core/components/utility/site/jsonParser.js' @ jsonData=jsonVariable, jsonInnerData=''}"/>
     * <sly data-sly-list.json="${JsonParser.listJson}">
     * ${json.key}
     *
     * If this is a nested multifield then you pass in the second parameter leaving the first empty
     *
     * <sly data-sly-use.JsonParser="${'/apps/pnb-metlife-market-core/components/utility/site/jsonParser.js' @ jsonData='', jsonInnerData=nestedJsonVariable }"/>
     * <sly data-sly-list.json="${JsonParser.listJson}">
     * ${json.value}
     */
    
    var readJson = null;
    var itemJson = "";
    var listArr = [];
    var count = 0;
    
    if (String(this.jsonInnerData) != "") {
        readJson = this.jsonInnerData;
        if (readJson != null && String(readJson) != "") {
            if (readJson.length > 0) {
                readJson.forEach(function (entry) {
                    itemJson = JSON.parse(entry);
                    listArr[count++] = itemJson;
                });
            }
        }
    } else if (String(this.jsonData) != '') {
        readJson = this.jsonData;
        if (readJson != null && String(readJson) != "") {
            if (readJson.length > 0 && typeof JSON.stringify(readJson) == "undefined") {
                readJson.forEach(function (entry) {
                    itemJson = JSON.parse(entry);
                    listArr[count++] = itemJson;
                });
            } else {
                listArr[0] = JSON.parse(readJson);
            }
        }
    }
    return {
        listJson: listArr,
        count: count
    }
});
