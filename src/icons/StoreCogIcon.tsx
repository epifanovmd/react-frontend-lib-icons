import React, { FC, memo } from 'react';
import StoreCogSvg from '../svg/store-cog.svg';

export interface IStoreCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreCogIcon: FC<IStoreCogIconProps> = memo(props => {
  return <StoreCogSvg {...props} />;
});
