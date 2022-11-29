import React, { FC, memo } from 'react';
import FitToScreenSvg from '../svg/fit-to-screen.svg';

export interface IFitToScreenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FitToScreenIcon: FC<IFitToScreenIconProps> = memo(props => {
  return <FitToScreenSvg {...props} />;
});
