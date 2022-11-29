import React, { FC, memo } from 'react';
import SurfingSvg from '../svg/surfing.svg';

export interface ISurfingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurfingIcon: FC<ISurfingIconProps> = memo(props => {
  return <SurfingSvg {...props} />;
});
