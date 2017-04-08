import { IWorld, IWorldAction } from 'models/world';
import * as WHS from 'whs/build/whitestorm';
import * as THREE from 'three';

/** Action Types */
export const ADD: string = 'world/ADD';
export const REMOVE: string = 'world/REMOVE';

/** Initial State */
const initialState: IWorld = {
  world: null,
};

/** Reducer: WorldReducer */
export function worldReducer(state = initialState, action?: IWorldAction) {
  switch (action.type) {
    case ADD:
      return {
        world: newWorld(),
      };

    case REMOVE:
      return {
        world: null,
      };

    default:
      return state;
  }
}

/** Action Creator: Add world */
export function add(): IWorldAction {
  return {
    type: ADD,
  };
}

/** Action Creator: Remove world  */
export function remove(): IWorldAction {
  return {
    type: REMOVE,
  };
}

function newWorld() {
  const cameraModule = new WHS.app.CameraModule({
    position: {
      z: 30,
      y: 40
    },
    far: 2000,
    near: 1
  });

  const controlsModule = new WHS.controls.OrbitModule();

  const world = new WHS.App([
    new WHS.app.ElementModule(),
    new WHS.app.SceneModule(),
    cameraModule,
    new WHS.app.RenderingModule({
      bgColor: 0x2a3340,

      renderer: {
        antialias: true,
        shadowmap: {
          type: THREE.PCFSoftShadowMap
        }
      }
    }),
    controlsModule,
    new WHS.app.ResizeModule()
  ]);

  new WHS.AmbientLight({
    light: {
      color: 0xffffff,
      intensity: 0.4
    }
  }).addTo(world);
  world.start();

  return world;
}
