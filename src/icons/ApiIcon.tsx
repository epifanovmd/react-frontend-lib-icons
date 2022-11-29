import React, { FC, memo } from 'react';
import ApiSvg from '../svg/api.svg';

export interface IApiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApiIcon: FC<IApiIconProps> = memo(props => {
  return <ApiSvg {...props} />;
});
