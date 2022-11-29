import React, { FC, memo } from 'react';
import AutorenewOffSvg from '../svg/autorenew-off.svg';

export interface IAutorenewOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AutorenewOffIcon: FC<IAutorenewOffIconProps> = memo(props => {
  return <AutorenewOffSvg {...props} />;
});
