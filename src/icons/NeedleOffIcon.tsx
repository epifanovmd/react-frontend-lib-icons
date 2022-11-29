import React, { FC, memo } from 'react';
import NeedleOffSvg from '../svg/needle-off.svg';

export interface INeedleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NeedleOffIcon: FC<INeedleOffIconProps> = memo(props => {
  return <NeedleOffSvg {...props} />;
});
