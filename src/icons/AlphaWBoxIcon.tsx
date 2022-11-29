import React, { FC, memo } from 'react';
import AlphaWBoxSvg from '../svg/alpha-w-box.svg';

export interface IAlphaWBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaWBoxIcon: FC<IAlphaWBoxIconProps> = memo(props => {
  return <AlphaWBoxSvg {...props} />;
});
