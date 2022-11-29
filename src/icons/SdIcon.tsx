import React, { FC, memo } from 'react';
import SdSvg from '../svg/sd.svg';

export interface ISdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SdIcon: FC<ISdIconProps> = memo(props => {
  return <SdSvg {...props} />;
});
