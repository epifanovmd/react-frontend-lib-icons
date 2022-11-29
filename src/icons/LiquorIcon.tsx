import React, { FC, memo } from 'react';
import LiquorSvg from '../svg/liquor.svg';

export interface ILiquorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LiquorIcon: FC<ILiquorIconProps> = memo(props => {
  return <LiquorSvg {...props} />;
});
