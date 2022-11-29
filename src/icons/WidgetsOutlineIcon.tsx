import React, { FC, memo } from 'react';
import WidgetsOutlineSvg from '../svg/widgets-outline.svg';

export interface IWidgetsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WidgetsOutlineIcon: FC<IWidgetsOutlineIconProps> = memo(props => {
  return <WidgetsOutlineSvg {...props} />;
});
