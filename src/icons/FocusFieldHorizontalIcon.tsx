import React, { FC, memo } from 'react';
import FocusFieldHorizontalSvg from '../svg/focus-field-horizontal.svg';

export interface IFocusFieldHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FocusFieldHorizontalIcon: FC<IFocusFieldHorizontalIconProps> = memo(props => {
  return <FocusFieldHorizontalSvg {...props} />;
});
