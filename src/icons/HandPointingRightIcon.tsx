import React, { FC, memo } from 'react';
import HandPointingRightSvg from '../svg/hand-pointing-right.svg';

export interface IHandPointingRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPointingRightIcon: FC<IHandPointingRightIconProps> = memo(props => {
  return <HandPointingRightSvg {...props} />;
});
