import React, { FC, memo } from 'react';
import MoleculeCo2Svg from '../svg/molecule-co2.svg';

export interface IMoleculeCo2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoleculeCo2Icon: FC<IMoleculeCo2IconProps> = memo(props => {
  return <MoleculeCo2Svg {...props} />;
});
