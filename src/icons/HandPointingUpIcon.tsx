import React, { FC, memo } from 'react';
import HandPointingUpSvg from '../svg/hand-pointing-up.svg';

export interface IHandPointingUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPointingUpIcon: FC<IHandPointingUpIconProps> = memo(props => {
  return <HandPointingUpSvg {...props} />;
});
