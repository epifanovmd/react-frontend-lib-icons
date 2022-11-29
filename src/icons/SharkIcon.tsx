import React, { FC, memo } from 'react';
import SharkSvg from '../svg/shark.svg';

export interface ISharkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SharkIcon: FC<ISharkIconProps> = memo(props => {
  return <SharkSvg {...props} />;
});
