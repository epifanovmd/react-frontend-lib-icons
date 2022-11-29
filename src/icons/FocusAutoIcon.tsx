import React, { FC, memo } from 'react';
import FocusAutoSvg from '../svg/focus-auto.svg';

export interface IFocusAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FocusAutoIcon: FC<IFocusAutoIconProps> = memo(props => {
  return <FocusAutoSvg {...props} />;
});
