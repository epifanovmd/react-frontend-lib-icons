import React, { FC, memo } from 'react';
import FocusFieldSvg from '../svg/focus-field.svg';

export interface IFocusFieldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FocusFieldIcon: FC<IFocusFieldIconProps> = memo(props => {
  return <FocusFieldSvg {...props} />;
});
