import React, { FC, memo } from 'react';
import FitToPageSvg from '../svg/fit-to-page.svg';

export interface IFitToPageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FitToPageIcon: FC<IFitToPageIconProps> = memo(props => {
  return <FitToPageSvg {...props} />;
});
