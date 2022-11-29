import React, { FC, memo } from 'react';
import HandPointingLeftSvg from '../svg/hand-pointing-left.svg';

export interface IHandPointingLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPointingLeftIcon: FC<IHandPointingLeftIconProps> = memo(props => {
  return <HandPointingLeftSvg {...props} />;
});
