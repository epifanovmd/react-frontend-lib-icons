import React, { FC, memo } from 'react';
import OneUpSvg from '../svg/one-up.svg';

export interface IOneUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OneUpIcon: FC<IOneUpIconProps> = memo(props => {
  return <OneUpSvg {...props} />;
});
