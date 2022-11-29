import React, { FC, memo } from 'react';
import RegisteredTrademarkSvg from '../svg/registered-trademark.svg';

export interface IRegisteredTrademarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RegisteredTrademarkIcon: FC<IRegisteredTrademarkIconProps> = memo(props => {
  return <RegisteredTrademarkSvg {...props} />;
});
