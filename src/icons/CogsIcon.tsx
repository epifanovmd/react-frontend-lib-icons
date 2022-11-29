import React, { FC, memo } from 'react';
import CogsSvg from '../svg/cogs.svg';

export interface ICogsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogsIcon: FC<ICogsIconProps> = memo(props => {
  return <CogsSvg {...props} />;
});
