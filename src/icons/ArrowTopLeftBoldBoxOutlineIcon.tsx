import React, { FC, memo } from 'react';
import ArrowTopLeftBoldBoxOutlineSvg from '../svg/arrow-top-left-bold-box-outline.svg';

export interface IArrowTopLeftBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftBoldBoxOutlineIcon: FC<IArrowTopLeftBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowTopLeftBoldBoxOutlineSvg {...props} />;
});
