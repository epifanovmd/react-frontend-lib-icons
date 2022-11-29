import React, { FC, memo } from 'react';
import ArrowBottomLeftBoldOutlineSvg from '../svg/arrow-bottom-left-bold-outline.svg';

export interface IArrowBottomLeftBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftBoldOutlineIcon: FC<IArrowBottomLeftBoldOutlineIconProps> = memo(props => {
  return <ArrowBottomLeftBoldOutlineSvg {...props} />;
});
