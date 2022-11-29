import React, { FC, memo } from 'react';
import HandPointingDownSvg from '../svg/hand-pointing-down.svg';

export interface IHandPointingDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPointingDownIcon: FC<IHandPointingDownIconProps> = memo(props => {
  return <HandPointingDownSvg {...props} />;
});
