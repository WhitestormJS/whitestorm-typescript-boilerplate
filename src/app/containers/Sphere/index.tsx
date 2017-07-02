const style = require('./style.css');

import * as React from 'react';
import {Sphere as wSphere} from 'whs';
import * as THREE from 'three';

import { add, remove } from 'modules/world/';
import { IWorld } from 'models/world';
import { IWorldAction } from 'models/world';
const { connect } = require('react-redux');

interface IProps {
  world: IWorld;
  add: Redux.ActionCreator<IWorldAction>;
  remove: Redux.ActionCreator<IWorldAction>;
}

@connect(
  (state) => ({ world: state.world }),
  (dispatch) => ({
    add: () => dispatch(add()),
    remove: () => dispatch(remove())
  })
)

class Sphere extends React.Component<IProps, any> {
  public constructor(props) {
    super(props);
    this.state = {
      world: null,
      object: null,
      material: null
    };
  }

  public componentWillUnmount() {
    const { world } = this.props;
    world.world.remove(this.state.object);
    this.setState({object: null});
  }

  public componentWillMount() {
    const { add, world } = this.props;
    if (!world.world) {
      add();
    }

    if (!this.state.object) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
      });

      this.setState({material});

      const object = new wSphere({
        geometry: {
           radius: 8,
           widthSegments: 16,
           heightSegments: 15
        },

        material,

        shadow: {
          receive: false
        },

        position: {
          x: 0,
          y: 0,
          z: 0
        }
      });

      this.setState({object});
    }
  }

  public render() {
    const { world } = this.props;
    if (world.world) {
      if (this.state.object) {
      world.world.add(this.state.object);
      }
    }
    return (
      <div className={style.About}>
        <h4>Sphere</h4>
      </div>
    );
  }
}

export { Sphere }
