import React, { FC, memo } from 'react';
import ArrowTopLeftBoldBoxSvg from '../svg/arrow-top-left-bold-box.svg';

export interface IArrowTopLeftBoldBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftBoldBoxIcon: FC<IArrowTopLeftBoldBoxIconProps> = memo(props => {
  return <ArrowTopLeftBoldBoxSvg {...props} />;
});
