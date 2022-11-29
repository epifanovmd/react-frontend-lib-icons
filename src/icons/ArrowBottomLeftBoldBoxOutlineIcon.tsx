import React, { FC, memo } from 'react';
import ArrowBottomLeftBoldBoxOutlineSvg from '../svg/arrow-bottom-left-bold-box-outline.svg';

export interface IArrowBottomLeftBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftBoldBoxOutlineIcon: FC<IArrowBottomLeftBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowBottomLeftBoldBoxOutlineSvg {...props} />;
});
