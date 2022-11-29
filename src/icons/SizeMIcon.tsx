import React, { FC, memo } from 'react';
import SizeMSvg from '../svg/size-m.svg';

export interface ISizeMIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeMIcon: FC<ISizeMIconProps> = memo(props => {
  return <SizeMSvg {...props} />;
});
