import React, { FC, memo } from 'react';
import ForwardburgerSvg from '../svg/forwardburger.svg';

export interface IForwardburgerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForwardburgerIcon: FC<IForwardburgerIconProps> = memo(props => {
  return <ForwardburgerSvg {...props} />;
});
