import React, { FC, memo } from 'react';
import HighwaySvg from '../svg/highway.svg';

export interface IHighwayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HighwayIcon: FC<IHighwayIconProps> = memo(props => {
  return <HighwaySvg {...props} />;
});
