/// <reference path="../cocos2d-lib.d.ts" />

declare namespace cc {
  export class ParticleSystem extends Node {
    constructor (plistPath: string)

    public static TYPE_FREE: number
    public static TYPE_RELATIVE: number
    public static TYPE_GROUPED: number
    public static DURATION_INFINITY: number
    public static MODE_GRAVITY: number
    public static MODE_RADIUS: number
    public static START_SIZE_EQUAL_TO_END_SIZE: number
    public static START_RADIUS_EQUAL_TO_END_RADIUS: number

    public setBatchNode (batchNode: SpriteBatchNode): void
    public setPositionType (positionType: number): void

    public stopSystem (): void
  }
}
