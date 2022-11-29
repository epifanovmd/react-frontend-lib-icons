import React, { FC, memo } from 'react';
import SizeLSvg from '../svg/size-l.svg';

export interface ISizeLIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SizeLIcon: FC<ISizeLIconProps> = memo(props => {
  return <SizeLSvg {...props} />;
});
