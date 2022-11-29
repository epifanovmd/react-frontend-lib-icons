import React, { FC, memo } from 'react';
import ArrowBottomLeftBoldBoxSvg from '../svg/arrow-bottom-left-bold-box.svg';

export interface IArrowBottomLeftBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftBoldBoxIcon: FC<IArrowBottomLeftBoldBoxIconProps> = memo(props => {
  return <ArrowBottomLeftBoldBoxSvg {...props} />;
});
