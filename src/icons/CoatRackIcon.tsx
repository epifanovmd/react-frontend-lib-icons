import React, { FC, memo } from 'react';
import CoatRackSvg from '../svg/coat-rack.svg';

export interface ICoatRackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoatRackIcon: FC<ICoatRackIconProps> = memo(props => {
  return <CoatRackSvg {...props} />;
});
