/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {

     /**
      * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D
      */
    export const textureCache: TextureCache

    /**
     * cc.textureCache is a singleton object, it's the global cache for cc.Texture2D
     * @class
     * @name cc.textureCache
     */
    export class TextureCache extends Class {
        constructor ();
        public init (): boolean

        /**
         * Cache the image data
         * @param path
         * @param texture
         */
        public cacheImage (path: string, texture: (Image | HTMLImageElement | HTMLCanvasElement)): void

        /** Returns "<TextureCache | Number of textures = " + this._textures.length + ">"
         * @return string
         */
        public description (): string

        /**
         * Output to cc.log the current contents of this TextureCache
         * This will attempt to calculate the size of each texture, and the total texture memory in use.
         */
        public dumpCachedTextureInfo (): void

        /**
         * @param texture
         * @example
         * //var key = cc.textureCache.getKeyByTexture(texture);
         */
        public getKeyByTexture (texture: Image): (string | null)

        /**
         * Returns an already created texture. Returns null if the texture doesn't exist.
         * @param textureKeyName
         */
        public getTextureForKey (textureKeyName: string): (Texture2D | null)

        /**
         * Purges the dictionary of loaded textures.
         * Call this method if you receive the "Memory Warning"
         * In the short term: it will free some resources preventing your app from being killed
         * In the medium term: it will allocate more resources
         * In the long term: it will be the same
         */
        public removeAllTextures (): void

        /**
         * Deletes a texture from the cache given a texture
         * @param texture
         */
        public removeTexture (texture: Image): void

        /**
         * Deletes a texture from the cache given a its key name
         * @param textureKeyName
         * @example
         * `cc.textureCache.removeTexture("hello.png");`
         */
        public removeTextureForKey (textureKeyName: string): void
    }
}
