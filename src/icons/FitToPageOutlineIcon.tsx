import React, { FC, memo } from 'react';
import FitToPageOutlineSvg from '../svg/fit-to-page-outline.svg';

export interface IFitToPageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FitToPageOutlineIcon: FC<IFitToPageOutlineIconProps> = memo(props => {
  return <FitToPageOutlineSvg {...props} />;
});
