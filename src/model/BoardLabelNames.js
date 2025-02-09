/**
 * Trello REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BoardLabelNames model module.
 * @module model/BoardLabelNames
 * @version 0.0.1
 */
class BoardLabelNames {
    /**
     * Constructs a new <code>BoardLabelNames</code>.
     * @alias module:model/BoardLabelNames
     */
    constructor() { 
        
        BoardLabelNames.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BoardLabelNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BoardLabelNames} obj Optional instance to populate.
     * @return {module:model/BoardLabelNames} The populated <code>BoardLabelNames</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BoardLabelNames();

            if (data.hasOwnProperty('green')) {
                obj['green'] = ApiClient.convertToType(data['green'], 'String');
            }
            if (data.hasOwnProperty('yellow')) {
                obj['yellow'] = ApiClient.convertToType(data['yellow'], 'String');
            }
            if (data.hasOwnProperty('orange')) {
                obj['orange'] = ApiClient.convertToType(data['orange'], 'String');
            }
            if (data.hasOwnProperty('red')) {
                obj['red'] = ApiClient.convertToType(data['red'], 'String');
            }
            if (data.hasOwnProperty('purple')) {
                obj['purple'] = ApiClient.convertToType(data['purple'], 'String');
            }
            if (data.hasOwnProperty('blue')) {
                obj['blue'] = ApiClient.convertToType(data['blue'], 'String');
            }
            if (data.hasOwnProperty('sky')) {
                obj['sky'] = ApiClient.convertToType(data['sky'], 'String');
            }
            if (data.hasOwnProperty('lime')) {
                obj['lime'] = ApiClient.convertToType(data['lime'], 'String');
            }
            if (data.hasOwnProperty('pink')) {
                obj['pink'] = ApiClient.convertToType(data['pink'], 'String');
            }
            if (data.hasOwnProperty('black')) {
                obj['black'] = ApiClient.convertToType(data['black'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} green
 */
BoardLabelNames.prototype['green'] = undefined;

/**
 * @member {String} yellow
 */
BoardLabelNames.prototype['yellow'] = undefined;

/**
 * @member {String} orange
 */
BoardLabelNames.prototype['orange'] = undefined;

/**
 * @member {String} red
 */
BoardLabelNames.prototype['red'] = undefined;

/**
 * @member {String} purple
 */
BoardLabelNames.prototype['purple'] = undefined;

/**
 * @member {String} blue
 */
BoardLabelNames.prototype['blue'] = undefined;

/**
 * @member {String} sky
 */
BoardLabelNames.prototype['sky'] = undefined;

/**
 * @member {String} lime
 */
BoardLabelNames.prototype['lime'] = undefined;

/**
 * @member {String} pink
 */
BoardLabelNames.prototype['pink'] = undefined;

/**
 * @member {String} black
 */
BoardLabelNames.prototype['black'] = undefined;






export default BoardLabelNames;

