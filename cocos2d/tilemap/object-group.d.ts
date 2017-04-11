/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXObjectGroup.js
  // +--------------------------------------------------------------------------------

  /**
   * cc.TMXObjectGroup represents the TMX object group.
   * @class
   * @extends cc.Class
   *
   * @property {any[]}    properties  - Properties from the group. They can be added using tilemap editors
   * @property {string}   groupName   - Name of the group
   */
  export class TMXObjectGroup extends Class {
    /**
     * Properties from the group. They can be added using tilemap editors
     * @member {any[]} properties
     */
    public properties: any[]

    /**
     * Name of the group
     * @member {string} groupName
     */
    public groupName: string

    /**
     * <p>The cc.TMXObjectGroup's constructor. <br/>
     * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".<br/>
     * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.</p>
     */
    constructor ()

    /**
     * Offset position of child objects
     * @return {cc.Point}
     */
    public getPositionOffset (): Point

    /**
     * Offset position of child objects
     * @param {cc.Point} offset
     */
    public setPositionOffset (offset: Point): void

    /**
     * List of properties stored in a dictionary
     * @param {any} Var
     */
    public setProperties (Var: any): void

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {any}
     */
    public propertyNamed (propertyName: string): any

    /**
     * <p>Return the dictionary for the specific object name. <br />
     * It will return the 1st object found on the array for the given name.</p>
     * @param {string} objectName
     * @return {any|null}
     */
    public getObject (objectName: string): any

    /**
     * Gets the objects.
     * @return {any[]}
     */
    public getObjects (): any[]

    /**
     * Set the objects.
     * @param {any} objects
     */
    public setObjects (objects: any): void
  }
}
