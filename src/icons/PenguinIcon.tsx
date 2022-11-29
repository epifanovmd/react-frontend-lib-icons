import React, { FC, memo } from 'react';
import PenguinSvg from '../svg/penguin.svg';

export interface IPenguinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenguinIcon: FC<IPenguinIconProps> = memo(props => {
  return <PenguinSvg {...props} />;
});
