/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  // +--------------------------------------------------------------------------------
  // + File: cocos2d/tilemap/CCTMXTiledMap.js
  // +--------------------------------------------------------------------------------

  /**
   * Orthogonal orientation
   * @const {number} TMX_ORIENTATION_ORTHO
   */
  export const TMX_ORIENTATION_ORTHO: number

  /**
   * Hexagonal orientation
   * @const {number} TMX_ORIENTATION_HEX
   */

  export const TMX_ORIENTATION_HEX: number

  /**
   * Isometric orientation
   * @const {number} TMX_ORIENTATION_ISO
   */
  export const TMX_ORIENTATION_ISO: number

  /**
   * <p>cc.TMXTiledMap knows how to parse and render a TMX map.</p>
   *
   * <p>It adds support for the TMX tiled map format used by http://www.mapeditor.org <br />
   * It supports isometric, hexagonal and orthogonal tiles.<br />
   * It also supports object groups, objects, and properties.</p>
   * @class
   * @extends cc.Node
   * @param {string} tmxFile tmxFile fileName or content string
   * @param {string} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
   *
   * @property {any[]}               properties      - Properties from the map. They can be added using tilemap editors
   * @property {number}              mapOrientation  - Map orientation
   * @property {TMXObjectGroup[]}    objectGroups    - Object groups of the map
   * @property {number}              mapWidth        - Width of the map
   * @property {number}              mapHeight       - Height of the map
   * @property {number}              tileWidth       - Width of a tile
   * @property {number}              tileHeight      - Height of a tile
   *
   * @example
   * //example
   * 1.
   * //create a TMXTiledMap with file name
   * var tmxTiledMap = new cc.TMXTiledMap("res/orthogonal-test1.tmx");
   * 2.
   * //create a TMXTiledMap with content string and resource path
   * var resources = "res/TileMaps";
   * var filePath = "res/TileMaps/orthogonal-test1.tmx";
   * var xmlStr = cc.loader.getRes(filePath);
   * var tmxTiledMap = new cc.TMXTiledMap(xmlStr, resources);
   */
  export class TMXTiledMap extends Node {
    /**
     * The properties
     * @member {any[]} properties
     */
    public properties: any[]

    /**
     * Map orientation
     * @member {number} mapOrientation
     */
    public mapOrientation: number

    /**
     * Object groups
     * @member {TMXObjectGroup[]} objectGroups
     */
    public objectGroups: TMXObjectGroup[]

    /**
     * Width of the map
     * @member {number} mapWidth
     */
    public mapWidth: number

    /**
     * Height of the map
     * @member {number} mapHeight
     */
    public mapHeight: number

    /**
     * Width of a tile
     * @member {number} tileWidth
     */
    public tileWidth: number

    /**
     * Height of a tile
     * @member {number} tileHeight
     */
    public tileHeight: number

    /**
     * Creates a TMX Tiled Map with a TMX file  or content string. <br/>
     * Constructor of cc.TMXTiledMap
     * @param {string} tmxFile tmxFile fileName or content string
     * @param {string} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
     */
    constructor (tmxFile: string, resourcePath?: string)

    /**
     * Gets the map size.
     * @return {cc.Size}
     */
    public getMapSize (): Size

    /**
     * Set the map size.
     * @param {cc.Size} Var
     */
    public setMapSize (Var: Size): void

    /**
     * Gets the tile size.
     * @return {cc.Size}
     */
    public getTileSize (): Size

    /**
     * Set the tile size
     * @param {cc.Size} Var
     */
    public setTileSize (Var: Size): void

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxFile
     * @param {string} tmxFile
     * @return {boolean} Whether the initialization was successful.
     * @example
     * //example
     * var map = new cc.TMXTiledMap()
     * map.initWithTMXFile("hello.tmx");
     */
    public initWithTMXFile (tmxFile: string): boolean

    /**
     * Initializes the instance of cc.TMXTiledMap with tmxString
     * @param {string} tmxString
     * @param {string} resourcePath
     * @return {boolean} Whether the initialization was successful.
     */
    public initWithXML (tmxString: string, resourcePath: string): boolean

    /**
     * Return All layers array.
     * @returns {TMXLayer[]}
     */
    public allLayers (): TMXLayer[]

    /**
     * return the TMXLayer for the specific layer
     * @param {string} layerName
     * @return {cc.TMXLayer}
     */
    public getLayer (layerName: string): TMXLayer

    /**
     * Return the TMXObjectGroup for the specific group
     * @param {string} groupName
     * @return {cc.TMXObjectGroup}
     */
    public getObjectGroup (groupName: string): TMXObjectGroup

    /**
     * Return the value for the specific property name
     * @param {string} propertyName
     * @return {string}
     */
    public getProperty (propertyName: string): string

    /**
     * Return properties dictionary for tile GID
     * @param {number} GID
     * @return {any}
     */
    public getPropertiesForGID (GID: number): any
  }
}
