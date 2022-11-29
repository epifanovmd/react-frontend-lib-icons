import React, { FC, memo } from 'react';
import FocusFieldVerticalSvg from '../svg/focus-field-vertical.svg';

export interface IFocusFieldVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FocusFieldVerticalIcon: FC<IFocusFieldVerticalIconProps> = memo(props => {
  return <FocusFieldVerticalSvg {...props} />;
});
