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
import ActionDataBoard from './ActionDataBoard';
import ActionDataCard from './ActionDataCard';
import ActionDataList from './ActionDataList';

/**
 * The ActionData model module.
 * @module model/ActionData
 * @version 0.0.1
 */
class ActionData {
    /**
     * Constructs a new <code>ActionData</code>.
     * @alias module:model/ActionData
     */
    constructor() { 
        
        ActionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionData} obj Optional instance to populate.
     * @return {module:model/ActionData} The populated <code>ActionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionData();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = ActionDataCard.constructFromObject(data['card']);
            }
            if (data.hasOwnProperty('board')) {
                obj['board'] = ActionDataBoard.constructFromObject(data['board']);
            }
            if (data.hasOwnProperty('list')) {
                obj['list'] = ActionDataList.constructFromObject(data['list']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
ActionData.prototype['text'] = undefined;

/**
 * @member {module:model/ActionDataCard} card
 */
ActionData.prototype['card'] = undefined;

/**
 * @member {module:model/ActionDataBoard} board
 */
ActionData.prototype['board'] = undefined;

/**
 * @member {module:model/ActionDataList} list
 */
ActionData.prototype['list'] = undefined;






export default ActionData;

