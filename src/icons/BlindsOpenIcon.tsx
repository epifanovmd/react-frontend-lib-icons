import React, { FC, memo } from 'react';
import BlindsOpenSvg from '../svg/blinds-open.svg';

export interface IBlindsOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsOpenIcon: FC<IBlindsOpenIconProps> = memo(props => {
  return <BlindsOpenSvg {...props} />;
});
