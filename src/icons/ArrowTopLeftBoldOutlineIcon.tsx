import React, { FC, memo } from 'react';
import ArrowTopLeftBoldOutlineSvg from '../svg/arrow-top-left-bold-outline.svg';

export interface IArrowTopLeftBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftBoldOutlineIcon: FC<IArrowTopLeftBoldOutlineIconProps> = memo(props => {
  return <ArrowTopLeftBoldOutlineSvg {...props} />;
});
