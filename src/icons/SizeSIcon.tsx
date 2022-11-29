import React, { FC, memo } from 'react';
import SizeSSvg from '../svg/size-s.svg';

export interface ISizeSIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeSIcon: FC<ISizeSIconProps> = memo(props => {
  return <SizeSSvg {...props} />;
});
