import React, { FC, memo } from 'react';
import PanTopRightSvg from '../svg/pan-top-right.svg';

export interface IPanTopRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanTopRightIcon: FC<IPanTopRightIconProps> = memo(props => {
  return <PanTopRightSvg {...props} />;
});
