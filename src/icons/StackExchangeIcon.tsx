import React, { FC, memo } from 'react';
import StackExchangeSvg from '../svg/stack-exchange.svg';

export interface IStackExchangeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StackExchangeIcon: FC<IStackExchangeIconProps> = memo(props => {
  return <StackExchangeSvg {...props} />;
});
