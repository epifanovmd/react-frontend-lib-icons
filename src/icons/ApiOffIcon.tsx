import React, { FC, memo } from 'react';
import ApiOffSvg from '../svg/api-off.svg';

export interface IApiOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApiOffIcon: FC<IApiOffIconProps> = memo(props => {
  return <ApiOffSvg {...props} />;
});
