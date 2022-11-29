import React, { FC, memo } from 'react';
import ArrowLeftBoldCircleOutlineSvg from '../svg/arrow-left-bold-circle-outline.svg';

export interface IArrowLeftBoldCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldCircleOutlineIcon: FC<IArrowLeftBoldCircleOutlineIconProps> = memo(props => {
  return <ArrowLeftBoldCircleOutlineSvg {...props} />;
});
