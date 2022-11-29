import React, { FC, memo } from 'react';
import WidgetsSvg from '../svg/widgets.svg';

export interface IWidgetsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WidgetsIcon: FC<IWidgetsIconProps> = memo(props => {
  return <WidgetsSvg {...props} />;
});
