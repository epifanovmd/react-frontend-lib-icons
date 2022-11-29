import React, { FC, memo } from 'react';
import FitToScreenOutlineSvg from '../svg/fit-to-screen-outline.svg';

export interface IFitToScreenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FitToScreenOutlineIcon: FC<IFitToScreenOutlineIconProps> = memo(props => {
  return <FitToScreenOutlineSvg {...props} />;
});
