import React, { FC, memo } from 'react';
import PanTopLeftSvg from '../svg/pan-top-left.svg';

export interface IPanTopLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanTopLeftIcon: FC<IPanTopLeftIconProps> = memo(props => {
  return <PanTopLeftSvg {...props} />;
});
