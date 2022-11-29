import React, { FC, memo } from 'react';
import ArrowLeftBoldBoxOutlineSvg from '../svg/arrow-left-bold-box-outline.svg';

export interface IArrowLeftBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldBoxOutlineIcon: FC<IArrowLeftBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowLeftBoldBoxOutlineSvg {...props} />;
});
