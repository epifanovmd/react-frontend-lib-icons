import React, { FC, memo } from 'react';
import ArrowLeftBoldCircleSvg from '../svg/arrow-left-bold-circle.svg';

export interface IArrowLeftBoldCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldCircleIcon: FC<IArrowLeftBoldCircleIconProps> = memo(props => {
  return <ArrowLeftBoldCircleSvg {...props} />;
});
