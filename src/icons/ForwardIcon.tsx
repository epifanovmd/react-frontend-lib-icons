import React, { FC, memo } from 'react';
import ForwardSvg from '../svg/forward.svg';

export interface IForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForwardIcon: FC<IForwardIconProps> = memo(props => {
  return <ForwardSvg {...props} />;
});
