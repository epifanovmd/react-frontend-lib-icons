import React, { FC, memo } from 'react';
import ArrowLeftBoldOutlineSvg from '../svg/arrow-left-bold-outline.svg';

export interface IArrowLeftBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldOutlineIcon: FC<IArrowLeftBoldOutlineIconProps> = memo(props => {
  return <ArrowLeftBoldOutlineSvg {...props} />;
});
