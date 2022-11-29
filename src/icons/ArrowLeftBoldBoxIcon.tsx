import React, { FC, memo } from 'react';
import ArrowLeftBoldBoxSvg from '../svg/arrow-left-bold-box.svg';

export interface IArrowLeftBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldBoxIcon: FC<IArrowLeftBoldBoxIconProps> = memo(props => {
  return <ArrowLeftBoldBoxSvg {...props} />;
});
