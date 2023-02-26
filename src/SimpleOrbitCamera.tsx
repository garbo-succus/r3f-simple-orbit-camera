import { PerspectiveCamera } from "@react-three/drei";

const SimpleOrbitCamera = ({
  origin, // Target position
  coords: [
    r, // Distance to origin
    theta, // Polar (up-down) angle
    phi // Azimuthal (left-right) angle
  ],
  makeDefault = true,
  ...cameraProps
}) => (
  <group position={origin} rotation={[0, phi, theta]}>
    <PerspectiveCamera
      {...cameraProps}
      makeDefault={makeDefault}
      position={[r, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    />
  </group>
);

export default SimpleOrbitCamera;
