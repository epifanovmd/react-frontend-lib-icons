import React, { FC, memo } from 'react';
import AutorenewSvg from '../svg/autorenew.svg';

export interface IAutorenewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AutorenewIcon: FC<IAutorenewIconProps> = memo(props => {
  return <AutorenewSvg {...props} />;
});
