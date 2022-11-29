import React, { FC, memo } from 'react';
import PolymerSvg from '../svg/polymer.svg';

export interface IPolymerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PolymerIcon: FC<IPolymerIconProps> = memo(props => {
  return <PolymerSvg {...props} />;
});
