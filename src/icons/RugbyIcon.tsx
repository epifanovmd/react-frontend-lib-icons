import React, { FC, memo } from 'react';
import RugbySvg from '../svg/rugby.svg';

export interface IRugbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RugbyIcon: FC<IRugbyIconProps> = memo(props => {
  return <RugbySvg {...props} />;
});
